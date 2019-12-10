var CACHE_NAME = 'cache';

var urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/eventos',
  'https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap',
  '/eventos/2019-12-07-Luiza/luiza-194_low.jpg'
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
  )
})

self.addEventListener('activate', function (event) {
  const cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map(key => {
      if (!cacheWhiteList.includes(key)) {
        return caches.delete(key);
      }
    })))
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  )
})