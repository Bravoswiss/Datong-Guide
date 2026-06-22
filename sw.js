// Service Worker — 大同导偏离线缓存
const CACHE_NAME = 'datong-guide-v1.4';

// 所有需要预缓存的资源（相对于 sw.js 的 scope）
const ASSETS = [
  './',
  './index.html',
  './data/spots.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// 安装：预缓存所有资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.error('[SW] 预缓存失败:', err))
  );
});

// 激活：清除所有旧版本缓存，并通知所有客户端
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// 监听 message：来自页面的 skipWaiting 请求
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 拦截请求：缓存优先，离线时直接用缓存
self.addEventListener('fetch', event => {
  // 只处理 GET 请求和 http(s) 协议
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  const url = new URL(event.request.url);

  event.respondWith(
    (async () => {
      // 先尝试精确匹配
      let cached = await caches.match(event.request);

      // 如果没命中，且是目录请求（以 / 结尾），尝试用 index.html 的缓存响应
      if (!cached && url.pathname.endsWith('/')) {
        const indexUrl = url.origin + url.pathname + 'index.html';
        cached = await caches.match(indexUrl);
      }

      // 定义网络请求函数（后台更新缓存）
      const fetchAndCache = async (req) => {
        const response = await fetch(req);
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        }
        return response;
      };

      // 有缓存 → 直接返回，同时后台静默更新
      if (cached) {
        fetchAndCache(event.request).catch(() => {});
        return cached;
      }

      // 无缓存 → 走网络
      try {
        return await fetchAndCache(event.request);
      } catch (err) {
        console.error('[SW] 请求失败（无缓存）:', event.request.url);
        throw err;
      }
    })()
  );
});
