importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "icons-actionbar.html",
    "revision": "b58905386b2b5cb71c3f5deb081ebfd7"
  },
  {
    "url": "icons-app-shortcut.html",
    "revision": "937b3da7e14a299464615a244b40d4c9"
  },
  {
    "url": "icons-generic.html",
    "revision": "6c24c1f186921054ee64781f24baf518"
  },
  {
    "url": "icons-launcher.html",
    "revision": "56d9cd2f7c891145ce954cb5c94e64c1"
  },
  {
    "url": "icons-notification.html",
    "revision": "1d9bf91f80c0a80b46ff6a3b5e4e3e44"
  },
  {
    "url": "index.html",
    "revision": "c306cad03e50dd968e416e2665451eaa"
  },
  {
    "url": "nine-patches.html",
    "revision": "91d3211e43c4c3443ec92b4df525c762"
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
    "revision": "9041e9542f8bda83059f94fd8308f49f"
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

