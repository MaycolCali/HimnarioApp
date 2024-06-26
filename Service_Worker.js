const CACHE_NAME = 'HimnarioApp',
  urlsToCache = [
    './',
    './index.html',
    './css/style.css',
    './css/boxicons.min.css',
    './css/himnos.css',
    './css/porNombre.css',
    './css/porNumero.css',
    './css/portada.css',

    './js/script.js',
    './js/number.js',
    './js/jquery-3.6.0.js',

    './regist_serviceWorker.js',
    './pwa/images/icons/icon-512x512.png',
    './pwa/images/icons/icon-72x72.png',

    './img/icon.png',
    './img/imagen4.jpg',
    './img/logonavbar.png',
    './img/portada.jpg',

    './buscarPorNombre.html',
    './buscarPorNumero.html',
    './portada.html',

    './hymns/himno1.html',
    './hymns/himno2.html',
    './hymns/himno3.html',
    './hymns/himno4.html',
    './hymns/himno5.html',
    './hymns/himno6.html',
    './hymns/himno7.html',
    './hymns/himno8.html',
    './hymns/himno9.html',
    './hymns/himno10.html',
    './hymns/himno11.html',
    './hymns/himno12.html',
    './hymns/himno13.html',
    './hymns/himno14.html',
    './hymns/himno15.html',
    './hymns/himno16.html',
    './hymns/himno17.html',
    './hymns/himno18.html',
    './hymns/himno19.html',
    './hymns/himno20.html',
    './hymns/himno21.html',
    './hymns/himno22.html',
    './hymns/himno23.html',
    './hymns/himno24.html',
    './hymns/himno25.html',
    './hymns/himno26.html',
    './hymns/himno27.html',
    './hymns/himno28.html',
    './hymns/himno29.html',
    './hymns/himno30.html',
    './hymns/himno31.html',
    './hymns/himno32.html',
    './hymns/himno33.html',
    './hymns/himno34.html',
    './hymns/himno35.html',
    './hymns/himno36.html',
    './hymns/himno37.html',
    './hymns/himno38.html',
    './hymns/himno39.html',
    './hymns/himno40.html',
    './hymns/himno41.html',
    './hymns/himno42.html',
    './hymns/himno43.html',
    './hymns/himno44.html',
    './hymns/himno45.html',
    './hymns/himno46.html',
    './hymns/himno47.html',
    './hymns/himno48.html',
    './hymns/himno49.html',
    './hymns/himno50.html',
    './hymns/himno51.html',
    './hymns/himno52.html',
    './hymns/himno53.html',
    './hymns/himno54.html',
    './hymns/himno55.html',
    './hymns/himno56.html',
    './hymns/himno57.html',
    './hymns/himno58.html',
    './hymns/himno59.html',
    './hymns/himno60.html',
    './hymns/himno61.html',
    './hymns/himno62.html',
    './hymns/himno63.html',
    './hymns/himno64.html',
    './hymns/himno65.html',
    './hymns/himno66.html',
    './hymns/himno67.html',
    './hymns/himno68.html',
    './hymns/himno69.html',
    './hymns/himno70.html',
    './hymns/himno71.html',
    './hymns/himno72.html',
    './hymns/himno73.html',
    './hymns/himno74.html',
    './hymns/himno75.html',
    './hymns/himno76.html',
    './hymns/himno77.html',
    './hymns/himno78.html',
    './hymns/himno79.html',
    './hymns/himno80.html',
    './hymns/himno81.html',
    './hymns/himno82.html',
    './hymns/himno83.html',
    './hymns/himno84.html',
    './hymns/himno85.html',
    './hymns/himno86.html',
    './hymns/himno87.html',
    './hymns/himno88.html',
    './hymns/himno89.html',
    './hymns/himno90.html',
    './hymns/himno91.html',
    './hymns/himno92.html',
    './hymns/himno93.html',
    './hymns/himno94.html',
    './hymns/himno95.html',
    './hymns/himno96.html',
    './hymns/himno97.html',
    './hymns/himno98.html',
    './hymns/himno99.html',
    './hymns/himno100.html', 
    './hymns/himno101.html', 
    './hymns/himno102.html', 
    './hymns/himno103.html', 
    './hymns/himno104.html', 
    './hymns/himno105.html', 
    './hymns/himno106.html', 
    './hymns/himno107.html', 
    './hymns/himno108.html', 
    './hymns/himno109.html', 
    './hymns/himno110.html', 
    './hymns/himno111.html', 
    './hymns/himno112.html', 
    './hymns/himno113.html', 
    './hymns/himno114.html', 
    './hymns/himno115.html', 
    './hymns/himno116.html', 
    './hymns/himno117.html', 
    './hymns/himno118.html', 
    './hymns/himno119.html', 
    './hymns/himno120.html', 
    './hymns/himno121.html', 
    './hymns/himno122.html', 
    './hymns/himno123.html', 
    './hymns/himno124.html', 
    './hymns/himno125.html', 
    './hymns/himno126.html', 
    './hymns/himno127.html', 
    './hymns/himno128.html', 
    './hymns/himno129.html', 
    './hymns/himno130.html', 
    './hymns/himno131.html', 
    './hymns/himno132.html', 
    './hymns/himno133.html', 
    './hymns/himno134.html', 
    './hymns/himno135.html', 
    './hymns/himno136.html', 
    './hymns/himno137.html', 
    './hymns/himno138.html', 
    './hymns/himno139.html', 
    './hymns/himno140.html', 
    './hymns/himno141.html', 
    './hymns/himno142.html', 
    './hymns/himno143.html', 
    './hymns/himno144.html', 
    './hymns/himno145.html', 
    './hymns/himno146.html', 
    './hymns/himno147.html', 
    './hymns/himno148.html', 
    './hymns/himno149.html', 
    './hymns/himno150.html', 
    './hymns/himno151.html', 
    './hymns/himno152.html', 
    './hymns/himno153.html', 
    './hymns/himno154.html', 
    './hymns/himno155.html', 
    './hymns/himno156.html', 
    './hymns/himno157.html', 
    './hymns/himno158.html', 
    './hymns/himno159.html', 
    './hymns/himno160.html', 
    './hymns/himno161.html', 
    './hymns/himno162.html', 
    './hymns/himno163.html', 
    './hymns/himno164.html', 
    './hymns/himno165.html', 
    './hymns/himno166.html', 
    './hymns/himno167.html', 
    './hymns/himno168.html', 
    './hymns/himno169.html', 
    './hymns/himno170.html', 
    './hymns/himno171.html', 
    './hymns/himno172.html', 
    './hymns/himno173.html', 
    './hymns/himno174.html', 
    './hymns/himno175.html', 
    './hymns/himno176.html', 
    './hymns/himno177.html', 
    './hymns/himno178.html', 
    './hymns/himno179.html', 
    './hymns/himno180.html', 
    './hymns/himno181.html', 
    './hymns/himno182.html', 
    './hymns/himno183.html', 
    './hymns/himno184.html', 
    './hymns/himno185.html', 
    './hymns/himno186.html', 
    './hymns/himno187.html', 
    './hymns/himno188.html', 
    './hymns/himno189.html', 
    './hymns/himno190.html', 
    './hymns/himno191.html', 
    './hymns/himno192.html', 
    './hymns/himno193.html', 
    './hymns/himno194.html', 
    './hymns/himno195.html', 
    './hymns/himno196.html', 
    './hymns/himno197.html', 
    './hymns/himno198.html', 
    './hymns/himno199.html', 
    './hymns/himno200.html',
    './hymns/himno201.html',
    './hymns/himno202.html',
    './hymns/himno203.html',
    './hymns/himno204.html',
    './hymns/himno205.html',
    './hymns/himno206.html',
    './hymns/himno207.html',
    './hymns/himno208.html',
    './hymns/himno209.html',
    './hymns/himno210.html',
    './hymns/himno211.html',
    './hymns/himno212.html',
    './hymns/himno213.html',
    './hymns/himno214.html',
    './hymns/himno215.html',
    './hymns/himno216.html',
    './hymns/himno217.html',
    './hymns/himno218.html',
    './hymns/himno219.html',
    './hymns/himno220.html',
    './hymns/himno221.html',
    './hymns/himno222.html',
    './hymns/himno223.html',
    './hymns/himno224.html',
    './hymns/himno225.html',
    './hymns/himno226.html',
    './hymns/himno227.html',
    './hymns/himno228.html',
    './hymns/himno229.html',
    './hymns/himno230.html',
    './hymns/himno231.html',
    './hymns/himno232.html',
    './hymns/himno233.html',
    './hymns/himno234.html',
    './hymns/himno235.html',
    './hymns/himno236.html',
    './hymns/himno237.html',
    './hymns/himno238.html',
    './hymns/himno239.html',
    './hymns/himno240.html',
    './hymns/himno241.html',
    './hymns/himno242.html',
    './hymns/himno243.html',
    './hymns/himno244.html',
    './hymns/himno245.html',
    './hymns/himno246.html',
    './hymns/himno247.html',
    './hymns/himno248.html',
    './hymns/himno249.html',
    './hymns/himno250.html',
    './hymns/himno251.html',
    './hymns/himno252.html',
    './hymns/himno253.html',
    './hymns/himno254.html',
    './hymns/himno255.html',
    './hymns/himno256.html',
    './hymns/himno257.html',
    './hymns/himno258.html',
    './hymns/himno259.html',
    './hymns/himno260.html',
    './hymns/himno261.html',
    './hymns/himno262.html',
    './hymns/himno263.html',
    './hymns/himno264.html',
    './hymns/himno265.html',
    './hymns/himno266.html',
    './hymns/himno267.html',
    './hymns/himno268.html',
    './hymns/himno269.html',
    './hymns/himno270.html',
    './hymns/himno271.html',
    './hymns/himno272.html',
    './hymns/himno273.html',
    './hymns/himno274.html',
    './hymns/himno275.html',
    './hymns/himno276.html',
    './hymns/himno277.html',
    './hymns/himno278.html',
    './hymns/himno279.html',
    './hymns/himno280.html',
    './hymns/himno281.html',
    './hymns/himno282.html',
    './hymns/himno283.html',
    './hymns/himno284.html',
    './hymns/himno285.html',
    './hymns/himno286.html',
    './hymns/himno287.html',
    './hymns/himno288.html',
    './hymns/himno289.html',
    './hymns/himno290.html',
    './hymns/himno291.html',
    './hymns/himno292.html',
    './hymns/himno293.html',
    './hymns/himno294.html',
    './hymns/himno295.html',
    './hymns/himno296.html',
    './hymns/himno297.html',
    './hymns/himno298.html',
    './hymns/himno299.html',
    './hymns/himno300.html',
    './hymns/himno301.html',
    './hymns/himno302.html',
    './hymns/himno303.html',
    './hymns/himno304.html',
    './hymns/himno305.html',
    './hymns/himno306.html',
    './hymns/himno307.html',
    './hymns/himno308.html',
    './hymns/himno309.html',
    './hymns/himno310.html',
    './hymns/himno311.html',
    './hymns/himno312.html',
    './hymns/himno313.html',
    './hymns/himno314.html',
    './hymns/himno315.html',
    './hymns/himno316.html',
    './hymns/himno317.html',
    './hymns/himno318.html',
    './hymns/himno319.html',
    './hymns/himno320.html',
    './hymns/himno321.html',
    './hymns/himno322.html',
    './hymns/himno323.html',
    './hymns/himno324.html',
    './hymns/himno325.html',
    './hymns/himno326.html',
    './hymns/himno327.html',
    './hymns/himno328.html',
    './hymns/himno329.html',
    './hymns/himno330.html',
    './hymns/himno331.html',
    './hymns/himno332.html',
    './hymns/himno333.html',
    './hymns/himno334.html',
    './hymns/himno335.html',
    './hymns/himno336.html',
    './hymns/himno337.html',
    './hymns/himno338.html',
    './hymns/himno339.html',
    './hymns/himno340.html',
    './hymns/himno341.html',
    './hymns/himno342.html',
    './hymns/himno343.html',
    './hymns/himno344.html',
    './hymns/himno345.html',
    './hymns/himno346.html',
    './hymns/himno347.html',
    './hymns/himno348.html',
    './hymns/himno349.html',
    './hymns/himno350.html',
    './hymns/himno351.html',
    './hymns/himno352.html',
    './hymns/himno353.html',
    './hymns/himno354.html',
    './hymns/himno355.html',
    './hymns/himno356.html',
    './hymns/himno357.html',
    './hymns/himno358.html',
    './hymns/himno359.html',
    './hymns/himno360.html',
    './hymns/himno361.html',
    './hymns/himno362.html',
    './hymns/himno363.html',
    './hymns/himno364.html',
    './hymns/himno365.html',
    './hymns/himno366.html',
    './hymns/himno367.html',
    './hymns/himno368.html',
    './hymns/himno369.html',
    './hymns/himno370.html',
    './hymns/himno371.html',
    './hymns/himno372.html',
    './hymns/himno373.html',
    './hymns/himno374.html',
    './hymns/himno375.html',
    './hymns/himno376.html',
    './hymns/himno377.html',
    './hymns/himno378.html',
    './hymns/himno379.html',
    './hymns/himno380.html',
    './hymns/himno381.html',
    './hymns/himno382.html',
    './hymns/himno383.html',
    './hymns/himno384.html',
    './hymns/himno385.html',
    './hymns/himno386.html',
    './hymns/himno387.html',
    './hymns/himno388.html',
    './hymns/himno389.html',
    './hymns/himno390.html',
    './hymns/himno391.html',
    './hymns/himno392.html',
    './hymns/himno393.html',
    './hymns/himno394.html',
    './hymns/himno395.html',
    './hymns/himno396.html',
    './hymns/himno397.html',
    './hymns/himno398.html',
    './hymns/himno399.html',
    './hymns/himno400.html'
  ]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          return res
        }
        return fetch(e.request)
      })
  )
})
