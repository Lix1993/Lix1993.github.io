/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9d218e7597945a64c1f79ce7edd94843"
  },
  {
    "url": "assets/css/0.styles.a43e3f46.css",
    "revision": "ae04ca44dbc48853205bc7a25bc8ff79"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ef7f4db6.js",
    "revision": "e6ae17f422f4614d6798da1c1ce2e73c"
  },
  {
    "url": "assets/js/11.a8b347ad.js",
    "revision": "69728003ced8dbd1600623b6de002f58"
  },
  {
    "url": "assets/js/12.8ad720f0.js",
    "revision": "a830a63b978131a8a072802c310a90f4"
  },
  {
    "url": "assets/js/13.fc0fca2c.js",
    "revision": "229475a12f97055823e2b2e3a64dc17e"
  },
  {
    "url": "assets/js/14.6a151f04.js",
    "revision": "3724bb175cbe9b8596251f72cbc4d864"
  },
  {
    "url": "assets/js/15.bc33ac43.js",
    "revision": "76833e9d0dd24218a504f334dc1835fc"
  },
  {
    "url": "assets/js/16.a423978d.js",
    "revision": "902771b4b760b31917db719658bfc8b6"
  },
  {
    "url": "assets/js/17.1911dff1.js",
    "revision": "4a67d429a35cbcd9e63f9ccf35992bf4"
  },
  {
    "url": "assets/js/18.93e41152.js",
    "revision": "0de04ab2cb4899394237b364270b26be"
  },
  {
    "url": "assets/js/19.f2b60bcc.js",
    "revision": "a0dd7304a78766399bae4891c26bf9b6"
  },
  {
    "url": "assets/js/2.896b0e17.js",
    "revision": "7b7c2f009b86666073f5bdea81ef4baf"
  },
  {
    "url": "assets/js/3.2eaf9719.js",
    "revision": "9fd3918b5973aca1aec0a2cc6519e8cc"
  },
  {
    "url": "assets/js/4.aa543f3b.js",
    "revision": "5327e831cbd23a0ebd01bd26d3fd4a10"
  },
  {
    "url": "assets/js/5.846398a7.js",
    "revision": "8c1fe8362ce4b8c2f7e8351c07c76bd2"
  },
  {
    "url": "assets/js/6.5635a73a.js",
    "revision": "7165ef31983fceb16d0ce1ad26a4fe5f"
  },
  {
    "url": "assets/js/7.dc157fac.js",
    "revision": "c1e250a7af6ddad419327af3182ddd42"
  },
  {
    "url": "assets/js/8.158dc0dd.js",
    "revision": "10bf542ab5478839e54f351a52db80b5"
  },
  {
    "url": "assets/js/9.54e94a63.js",
    "revision": "25dd8c736c71246cbb8e09fddd4a10e7"
  },
  {
    "url": "assets/js/app.eb226304.js",
    "revision": "d3892271fb17fa44dfab5c70c9f01dc2"
  },
  {
    "url": "icons/email.svg",
    "revision": "c0482baf06ff13dfee55383a0646f373"
  },
  {
    "url": "icons/facebook.svg",
    "revision": "a937dc2aa703eb4ab7ef54c334a0521d"
  },
  {
    "url": "icons/github.svg",
    "revision": "b53ff55e09a092f9f0cbbf74af01b715"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4893b4c6742e8050d65539a2bc9454ed"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "3e487ad95c7b35b3eb82f37a3becd51a"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "90eaf3a14cee3ef77af6c1823c04f1da"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "00dba83a600deec48f92ecd3b5c57cce"
  },
  {
    "url": "icons/instagram-mono.svg",
    "revision": "3388b1a17a38b9833ed762278f327330"
  },
  {
    "url": "icons/instagram.svg",
    "revision": "622e2947df6ed5a12b06a6ea7cb70777"
  },
  {
    "url": "icons/linkedin-mono.svg",
    "revision": "d52422fb357b28b8a8be88ad02d19397"
  },
  {
    "url": "icons/linkedin.svg",
    "revision": "c1eb27404bbc0d6052620ac79194ae19"
  },
  {
    "url": "icons/twitter.svg",
    "revision": "7a4d9f0fe157437d3258bbc3b785066d"
  },
  {
    "url": "icons/youtube.svg",
    "revision": "f4d46a74f2230eb4b0a079b6c764bac6"
  },
  {
    "url": "index.html",
    "revision": "8e91e956ab8a2ac5444ed7d46102bd22"
  },
  {
    "url": "profile.jpg",
    "revision": "1dd0652876c7c41d147fd50d081b530c"
  },
  {
    "url": "Projects/index.html",
    "revision": "8e52cb1965254fb5adfd1c330ce4c747"
  },
  {
    "url": "Skills/bioinfo_tools/databases/index.html",
    "revision": "536164b43d028a1fa27abf6ca81e20cc"
  },
  {
    "url": "Skills/bioinfo_tools/databases/KEGG.html",
    "revision": "969a0d191e35ea16771be28a3cd484d7"
  },
  {
    "url": "Skills/bioinfo_tools/index.html",
    "revision": "d51fc46cd2a3fbaf1c193910cfb790a3"
  },
  {
    "url": "Skills/bioinfo_tools/softwares/index.html",
    "revision": "d95adcd6934006a1ab4ae5247b40f4ba"
  },
  {
    "url": "Skills/bioinfo_tools/softwares/snakemake.html",
    "revision": "03c555c4be2d1f185a4d99bea7f8056f"
  },
  {
    "url": "Skills/index.html",
    "revision": "6708650563f758df9ef50b87171c636a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
