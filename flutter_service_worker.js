'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "472e4c1de628c8616635bc6401eff78b",
".git/config": "9eec061ef68aa97c85b91db5c2a05908",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "202673f830a9dd3e584feb0696c312e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc4dfee05839d2983f0d55ae115bf400",
".git/logs/refs/heads/master": "bc4dfee05839d2983f0d55ae115bf400",
".git/logs/refs/remotes/origin/master": "985e44b9c7132028ee222b777944658d",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/86b30746456a460953bba4ffac210b93fa2a3b": "90fb9312075e0ae71a1c65daba501f63",
".git/objects/02/ab8c6516a8c0e4bdd2e3768e6172da47506dac": "7c581293c8010dda982778d11148f106",
".git/objects/0d/0214b424fb0a1fae40a27c0186926a8b76528c": "877f7ef84eb81785e4233d17f7a3e1e1",
".git/objects/2c/332bfe915631b947a73451c729b10632f1ae8e": "2a83b0fb24ca07a36c03aea23d7c64ce",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/6779bc736128f50c88e5bcddd121dd6cc02a74": "b6c66d223242d945c3388034b38a44c0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/e3c6122c04d8b4b9e1e5f38a52387cdde8bd49": "0b273c3b6265128421239692211e555a",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/64/8df77fee158440a44dfca19c8938ff00549b5d": "74615499b7f458f573b7a1376d7f0b89",
".git/objects/66/608bfb792f80a0c869fb19a5f3a1f2cf3d1bc0": "e8b46dca783ab9435b6fc9ec6ab265de",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/15e5b3fdddeecb4e7e151aa7e2bd346c78643f": "231f1f5387dcb2508f0b6222d69cd144",
".git/objects/8a/0860b0a2bafdba23fc78189ba04dff81d63d21": "9aae7ec7b7983ef03768ff4c2661095c",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/91/4e64fca6f65d6d1ab7a24c0d44d38bd472481b": "9cbd55ef70e9840dc3b2393c6da57dab",
".git/objects/93/edefd13a82839eaf8c7d9e599948e71792eb73": "6cf21dfe2bc6c67de75bff0878804726",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9a/741431d511d22d1346b86c4299eaee036ca082": "828e41e657215d4fc29e93a603a3142c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b4/3f9270165f0aaaef8729d16f842ec3fd6b2fc4": "a0c07a382a494f0c1bcda3757ca85f1b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bf/1d31046f6bb3ca7699ba3bc40b953380d1b754": "d040ca7e9a2af5b62efc7397a38073c6",
".git/objects/cd/10fcf5cafb47fec534b896a115055a90680cfd": "66d2d54ad01889a3e7a58ed35bfb7ff0",
".git/objects/d1/9644317d492d106403869bf343adbc2efe413c": "01d9883bef7a82bc672212d6d82ddb81",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/17de820c7955c7e5a6fa121137f86abeaf2f83": "e64d4be5c8e505aad899bf83b425b4e4",
".git/objects/d5/38cdd26a5d05f43ead9ed5a038264197433990": "d4d25a86d0d066cf67b37030cf19f980",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d9/07ff3c27288e9ad0a95a566b8a277fcd74f04d": "7383281c5265bbe2fdfb4500af41820c",
".git/objects/e0/7954c97d70b3d3dbd99750ac5113b3a7dab27e": "b2e3bc918fa9343944a47b1728e1070f",
".git/objects/e1/6a1c0b6949d6eeb745a67bc43716a0d812feee": "16695f3f3b0b4391e33481c3dd9a4420",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/f4/3275b0a993e4f478a5f28cbe7a6991028a468f": "d5f73a1398cf202c6976a06ff5a488d5",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f7/b823ce28aa464a04bc04b879d5cdc36403dba9": "9301d853db3e3b6792132c4d8901c18c",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "96fa73392bbb60844218972684fdf740",
".git/refs/remotes/origin/master": "96fa73392bbb60844218972684fdf740",
"assets/AssetManifest.bin": "e121565f3782711dc0a6d72282b62263",
"assets/AssetManifest.json": "fef3abb65fc408adbd89a0150127f91b",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/jupiter-rotating.gif": "938ca3ae3338fa60fa817f8af33ac016",
"assets/assets/images/placeholder-image.png": "1632e46a5c79d43f3125ca62c54189cb",
"assets/assets/images/saturn-rotating.gif": "97cd040cad4817c329d84c1682bebfaf",
"assets/assets/images/space-background.jpg": "db017641b71a9942512382e05de25551",
"assets/assets/images/stars-background.jpg": "c5ced3604a5e60fba3577656ff5886ca",
"assets/FontManifest.json": "b88f8c710a94532131fb29b836303f69",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "6255c8bfc55d1a650d9d636c9bd0a830",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "d261b70e246f00135e65b674520b2f7c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"index.html": "57536909308d70b3cbbece11a7e0092b",
"/": "57536909308d70b3cbbece11a7e0092b",
"main.dart.js": "8d454a0da4000f166054718db6b6ebd6",
"manifest.json": "cf8dda3a6ec7dd0bf6857b0855a86a1d",
"README.md": "9850b0db35ef8cccfa6ff37c2676fa47",
"version.json": "7ad4b12f0f85c31cc565b757f53cbe02"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
