//Setting the file in the cache
let cacheData = 'appV1';
this.addEventListener('install', (event) => {
    event.waituntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/favicon.ico',
                '/ws',
                '/index.html',
                '/',
                '/about',
                '/users'
            ])
        })
    )
})

this.addEventListener('fetch', (event) => {
    if(!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if(resp){
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
})