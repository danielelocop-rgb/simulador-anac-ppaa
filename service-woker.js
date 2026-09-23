const CACHE_NAME = 'simulador-ppa-v1';
const ARQUIVOS = [
  './',
  './index.html',
  './manifest.json',
  './aviao-icone.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARQUIVOS))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(resp => resp || fetch(evt.request))
  );
});