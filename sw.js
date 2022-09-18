importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "icons-actionbar.html",
    "revision": "38f03a37405cce3c579a06e5eb5bfd82"
  },
  {
    "url": "icons-app-shortcut.html",
    "revision": "9c72c09019ce5544d26f2c6483593a1c"
  },
  {
    "url": "icons-generic.html",
    "revision": "3a25efe6c0e34eb27e1f09f5b1fc8402"
  },
  {
    "url": "icons-launcher.html",
    "revision": "09914fda7fece9b3248d7e0b5a3d096c"
  },
  {
    "url": "icons-notification.html",
    "revision": "e393b0bd16ff578de377608f7cbe11f5"
  },
  {
    "url": "index.html",
    "revision": "cde7eb29b5a273b768a3b2600c43ee21"
  },
  {
    "url": "nine-patches.html",
    "revision": "a48b77ef632e0945db094aafff04fc76"
  },
  {
    "url": "res/generator-thumbs/icon-animator.svg",
    "revision": "65311bbd1a2658cacdf6a2be539b0d9c"
  },
  {
    "url": "res/generator-thumbs/icons-actionbar.svg",
    "revision": "747ac6e1b23e6f00a86d7baebe76029d"
  },
  {
    "url": "res/generator-thumbs/icons-app-shortcut.svg",
    "revision": "dcd36cf4d4b734e4d4d7993aeb5350ce"
  },
  {
    "url": "res/generator-thumbs/icons-generic.svg",
    "revision": "7e9aaa9edeaf210c7afac117cf094192"
  },
  {
    "url": "res/generator-thumbs/icons-launcher.svg",
    "revision": "ac624b8aabda5851413f3ccfd252b80d"
  },
  {
    "url": "res/generator-thumbs/icons-notification.svg",
    "revision": "bd07505811fade5e742afe6a85cedf03"
  },
  {
    "url": "res/generator-thumbs/nine-patches.svg",
    "revision": "c37457a837ee23a6c1981b5d993ee72e"
  },
  {
    "url": "aab/app.js",
    "revision": "591dc830826252daec73dfbf773469e7"
  },
  {
    "url": "app.js",
    "revision": "eff974d8a9351d943bd9ac23b508db6f"
  },
  {
    "url": "vendor.js",
    "revision": "7b439204b3a5d0a3bdb0b93f8b80e83d"
  },
  {
    "url": "aab/app.css",
    "revision": "76855e04738b4c5ffe3931519863f95f"
  },
  {
    "url": "app.css",
    "revision": "dcd56be9e4be6732e723b55fa555acf6"
  }
]);

workbox.routing.registerRoute(
  new RegExp('https://(?:fonts|www).(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        purgeOnQuotaError: true,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);

