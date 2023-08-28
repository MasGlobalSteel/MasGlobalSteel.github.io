'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7c2fc47b4d7b1f22efbdc78954d53232",
"assets/AssetManifest.json": "dbe62e729e3b9212349d43bad4afbfd2",
"assets/assets/files/one.pdf": "64fe6ee75dba731c3e087219563c2e0a",
"assets/assets/fonts/OpenSansRegular.ttf": "3eb5459d91a5743e0deaf2c7d7896b08",
"assets/assets/fonts/PoppinsBlack.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/PoppinsBold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/PoppinsExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/PoppinsLight.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/PoppinsMedium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/PoppinsThin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/gif/animated-background.gif": "2ce3336e2f6e72eb27a5e079bff52d20",
"assets/assets/images/1.jpg": "8c1df65e606f1ae69daad802b10d940c",
"assets/assets/images/10.jpg": "d1ac9bc7ce6a4334ad6c4c763c599966",
"assets/assets/images/11.jpg": "311a603fbbd67649ae15b1b11687872c",
"assets/assets/images/2.jpg": "467f6cc121ed305a23986261b4130946",
"assets/assets/images/23.jpg": "074e55ca725b6306bc619ed8b82a2fb3",
"assets/assets/images/24.jpg": "9b5fe31038f1e023ce4eb37bacdf5f02",
"assets/assets/images/25.jpg": "e3798f740ceb6920147d99da3d859169",
"assets/assets/images/26.jpg": "a0455b8c59414b884b7af51cef20b0a9",
"assets/assets/images/27.jpg": "9a46eba0a6300f6709759219821fd768",
"assets/assets/images/28.jpg": "a41cf82eafc1ca38df87fc948a611ee7",
"assets/assets/images/29.jpg": "27db38646195c9d92206fdda6aa69457",
"assets/assets/images/3.jpg": "bf7d11c9d046d3f38407c2414055079b",
"assets/assets/images/30.jpg": "830f3190c324ea86ad841667ff9fe8ee",
"assets/assets/images/31.jpg": "cd58e0afeeca6ce5c2f07c2793dae4a1",
"assets/assets/images/32.jpg": "98f43837344533bd55070eeebe6d70ee",
"assets/assets/images/33.jpg": "44d00f78948f1e84c176e4de0881d383",
"assets/assets/images/34.jpg": "e403b81d3a22dc6689ac57ebe893e6bf",
"assets/assets/images/35.jpg": "33d66819a35ec08a8c59a1ff7bc7933e",
"assets/assets/images/36.jpg": "1502585fc4fd70a75dcba2f255de2a83",
"assets/assets/images/37.webp": "39f22f531e914f58ba7eef45e39d89cc",
"assets/assets/images/38.webp": "b70f7dd7e6ffbcaeff879eca09118214",
"assets/assets/images/39.webp": "81a83ada6aaddd88f850ad6950eaba71",
"assets/assets/images/4.jpg": "33a062c5a73e26bb26779e59062261e1",
"assets/assets/images/40.webp": "8fe836e10c3aea1fe2bd951ef5469c35",
"assets/assets/images/41.jpg": "028c52d10e61db1b359f0098984ad6e7",
"assets/assets/images/42.jpg": "5abed6890e6f55daccf3bb5b72121591",
"assets/assets/images/43.webp": "d8702ac1210981fb19a0c491798eebbe",
"assets/assets/images/44.webp": "6e2470ef516f535604ff39a49382e517",
"assets/assets/images/45.jpg": "d90123bdc81619118b654afe206d5a65",
"assets/assets/images/46.jpeg": "d79999d3c1e38e392c4a40f886d263aa",
"assets/assets/images/5.jpg": "6a3b72f03b45ed0d03689d5c30847f12",
"assets/assets/images/6.jpg": "6b73d9024c0ccc5338c83cb11fd2823d",
"assets/assets/images/7.jpg": "860c10812dc1f8ed26c73102ced69e69",
"assets/assets/images/8.jpg": "5ed4703427bda8b1d99e93103d168f2d",
"assets/assets/images/9.jpg": "b7d341733af903352d7e4e991868533d",
"assets/assets/images/about_us.jpg": "5bddbe165485c060bb1d41ebc645a1fd",
"assets/assets/images/brassrods.png": "1b6925eaf349bd10cd463f8f79d52a55",
"assets/assets/images/bureau.jpeg": "e11dfe54c25fc307ea875dbcf10333d6",
"assets/assets/images/choose_us.png": "8a4e74a3a5471518877fad0dd886b66f",
"assets/assets/images/contact_us.jpg": "fe09995084503b65dc62847ad5a011e5",
"assets/assets/images/coppertubessection.png": "cb0e30ebbe62cc61c56b567590959f50",
"assets/assets/images/fasteners.png": "67e02232525a3dde8a97933e06f57915",
"assets/assets/images/flanges-testing.jpeg": "9e6df85cc8efa3d14a96d4f3ce2d3f99",
"assets/assets/images/flanges.png": "a698590d681e9be025b3005d64df98f3",
"assets/assets/images/industrial-bg.jpg": "48f062fcfb67fa34adb8437e97dca522",
"assets/assets/images/loader.png": "17d80737c95e23300e368ea3bd28d2fe",
"assets/assets/images/loader_.png": "d21385a1af0c029c9fd578ceaed68406",
"assets/assets/images/logo%25201.png": "558b0beb7e3f633b3215c69d869dfaf4",
"assets/assets/images/logo.png": "e098f8f16c8557cd15b9598ff4d3e886",
"assets/assets/images/main%2520logo%25202.png": "aed427147786bab96612f75c308bc4ad",
"assets/assets/images/pipes-products.jpg": "a708e8aa88aacbe3d0f06f9bd48b3aff",
"assets/assets/images/product.webp": "ce9c28a42510de59bd201444b5128f56",
"assets/assets/images/rodbars.png": "644827e8b2d97d05d6ffb1714d38ebb2",
"assets/assets/images/sheetplates.jpg": "f61a05a487d65189f084c4ed9984f9ff",
"assets/assets/images/sheetplates.png": "4e6ec21bf6ce1cc89c5c2b6e80e300dd",
"assets/assets/images/testing.png": "364a6f01dc27f4c751f3132a682bf2e1",
"assets/assets/images/thirdparty1.png": "d080fbc94a029ef2765a1da8ef6ad02b",
"assets/assets/images/thirdparty10.png": "16048b2473390fcc4a2c3ba1e2d40918",
"assets/assets/images/thirdparty11.png": "2f7a7581e2274d7d7192785a22680e0f",
"assets/assets/images/thirdparty3.png": "333bb5604f046360dd9f9eec66f3c3ea",
"assets/assets/images/thirdparty4.png": "12076c5e72fb1868080479663fa53633",
"assets/assets/images/thirdparty5.png": "1d6808b9c419a8097194983f6e2a1dbd",
"assets/assets/images/thirdparty6.png": "f5176cfca6e61b724f90ceb1661e3f50",
"assets/assets/images/thirdparty7.png": "edd7b8b13900a4a08ddf29d191b3b65e",
"assets/assets/images/thirdparty8.png": "1fa7a3136fddd13237ff444c87375e73",
"assets/assets/images/world-wide-supplier.jpg": "2254f5734845c63fe8b42f591eee6006",
"assets/FontManifest.json": "289a2049b0fa3e34d67d5d439cd340a4",
"assets/fonts/MaterialIcons-Regular.otf": "7154fe876b0f471b08398e435785e878",
"assets/NOTICES": "735faf7524dac940400f499ad789afe7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "17d80737c95e23300e368ea3bd28d2fe",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "707396396bf937e18cdb0ffb1de9264f",
"/": "707396396bf937e18cdb0ffb1de9264f",
"main.dart.js": "d91870dd42a928c9c7b475365959f1ac",
"manifest.json": "c09562b51cfea8fbefe7bd2132518b58",
"version.json": "75a2bc193d1ad3ebb2bf7e5e0ade99c6"};
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
