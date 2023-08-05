'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dccecaa14d243b69a9c888215237b8c6",
"assets/assets/files/one.pdf": "64fe6ee75dba731c3e087219563c2e0a",
"assets/assets/fonts/OpenSansRegular.ttf": "3eb5459d91a5743e0deaf2c7d7896b08",
"assets/assets/fonts/PoppinsBlack.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/PoppinsBold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/PoppinsExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/PoppinsLight.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/PoppinsMedium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/PoppinsThin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/gif/animated-background.gif": "2ce3336e2f6e72eb27a5e079bff52d20",
"assets/assets/images/1.jpg": "28c0e9444b90d202664319294a2f3414",
"assets/assets/images/10.jpg": "3341c6cd4abfd947e8d7f136f9a9c6eb",
"assets/assets/images/11.jpg": "7aca276643833d389cb40f2188cee7db",
"assets/assets/images/2.jpg": "af8e3b94e6e1659be69f5d0607fe543f",
"assets/assets/images/23.jpg": "0cd51138d68c5585cbcf231588d3dc23",
"assets/assets/images/24.jpg": "af4c37734b0c7b45c3faf2aee9840b46",
"assets/assets/images/25.jpg": "38b3b215e4f759e1971f7340d93d76f1",
"assets/assets/images/26.jpg": "454cbbd4df4c947599490088b8189c99",
"assets/assets/images/27.jpg": "acb4514b4946790a6937328b39bb11a8",
"assets/assets/images/28.jpg": "3d10f8a41652c4eaf0382def23e136b7",
"assets/assets/images/29.jpg": "efbfe430b715f216a1b157d0aab99408",
"assets/assets/images/3.jpg": "50fda04a304a01d0b4f4a2390d3278f3",
"assets/assets/images/30.jpg": "546f554b07209834b8770f91f1d4aa62",
"assets/assets/images/31.jpg": "1239cb7660b03b6eb973ab31648c4a6b",
"assets/assets/images/32.jpg": "ce977d3d71f40571bb8b6b14991e9431",
"assets/assets/images/33.jpg": "3376952a6d00515317b7b67acc6e021f",
"assets/assets/images/34.jpg": "32dcc87257a55b825aa8f29cd3625415",
"assets/assets/images/35.jpg": "5ef73be3a093fa8f2bc7eaf9a4c63fa5",
"assets/assets/images/36.jpg": "0b63424cead0074ad7a0951c2a0ef119",
"assets/assets/images/37.webp": "39f22f531e914f58ba7eef45e39d89cc",
"assets/assets/images/38.webp": "b70f7dd7e6ffbcaeff879eca09118214",
"assets/assets/images/39.webp": "81a83ada6aaddd88f850ad6950eaba71",
"assets/assets/images/4.jpg": "420b8f0a692e97a3311afda51838c3c0",
"assets/assets/images/40.webp": "8fe836e10c3aea1fe2bd951ef5469c35",
"assets/assets/images/5.jpg": "79c54806cb644df14f608f7c984cc186",
"assets/assets/images/6.jpg": "52d8cae320558018ea5ddac516310a85",
"assets/assets/images/7.jpg": "795d6ee35ddd8fbc8fbc622762a766ae",
"assets/assets/images/8.jpg": "3143c826bb7b40192c229b570764d94a",
"assets/assets/images/9.jpg": "a8c82ecb4d4b45144f8f66680e7f60c5",
"assets/assets/images/about_us.jpg": "f6f3cb065ad49810cf37b9e303f7768e",
"assets/assets/images/brassrods.png": "1b6925eaf349bd10cd463f8f79d52a55",
"assets/assets/images/brasstubes.png": "d11499e84be3a22055c6832afabd0523",
"assets/assets/images/bureau.jpeg": "e11dfe54c25fc307ea875dbcf10333d6",
"assets/assets/images/choose_us.png": "8a4e74a3a5471518877fad0dd886b66f",
"assets/assets/images/contact_us.jpg": "aaf968fcd532e7c5b7562ea7c70a9641",
"assets/assets/images/coopertubes.png": "e6e4e4e43729aba756ef001f79ba64dd",
"assets/assets/images/coppertubessection.png": "cb0e30ebbe62cc61c56b567590959f50",
"assets/assets/images/fasteners.png": "5e62aec583abd34d2c24e6174dcec78e",
"assets/assets/images/flanges-testing.jpeg": "9e6df85cc8efa3d14a96d4f3ce2d3f99",
"assets/assets/images/flanges.png": "a698590d681e9be025b3005d64df98f3",
"assets/assets/images/industrial-bg.jpg": "48f062fcfb67fa34adb8437e97dca522",
"assets/assets/images/loader.png": "17d80737c95e23300e368ea3bd28d2fe",
"assets/assets/images/loader_.png": "96b364bc7618aa112d4f69dad4c03850",
"assets/assets/images/logo%25201.png": "558b0beb7e3f633b3215c69d869dfaf4",
"assets/assets/images/logo.png": "e098f8f16c8557cd15b9598ff4d3e886",
"assets/assets/images/main%2520logo%25202.png": "aed427147786bab96612f75c308bc4ad",
"assets/assets/images/pipes-products.jpg": "a708e8aa88aacbe3d0f06f9bd48b3aff",
"assets/assets/images/product.webp": "ce9c28a42510de59bd201444b5128f56",
"assets/assets/images/rodbars.png": "2e752dd35a8dd06902bc0036daf812be",
"assets/assets/images/sheetplates.jpg": "e30a7a59d1b8104be4eea300230d6bc1",
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
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e5388c761e267897e33136ba5a1c1bcd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"edwe.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6096fb20a37bc3e74677b296800dfaba",
"/": "6096fb20a37bc3e74677b296800dfaba",
"loader.png": "17d80737c95e23300e368ea3bd28d2fe",
"main.dart.js": "634caaa08c984efdf965a08713221c1e",
"manifest.json": "c09562b51cfea8fbefe7bd2132518b58",
"version.json": "75a2bc193d1ad3ebb2bf7e5e0ade99c6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
