var filesToCache = [
  '/',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
];

var staticCacheName = 'pages-cache-v1.0';

self.addEventListener('install', function(event) {
  console.log('Installing service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/*self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if(response) {
      return response;
    }else {
      return fetch(event.request).then(function(response) {
        const responseClone = response.clone();
        caches.open(staticCacheName).then(function(cache) {
          cache.put(event.request, responseClone);
        })
        return response;
      })
      .cache(function(error) {
        console.log(error);
      });
    };
  }));
});
*/
