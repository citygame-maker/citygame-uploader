[
  {
    "id": 224339,
    "date": "2025-12-08T08:56:27",
    "date_gmt": "2025-12-08T07:56:27",
    "guid": {
      "rendered": "https://citygame.com/?page_id=224339"
    },
    "modified": "2025-12-08T08:56:27",
    "modified_gmt": "2025-12-08T07:56:27",
    "slug": "",
    "status": "draft",
    "type": "page",
    "link": "https://citygame.com/?page_id=224339",
    "title": {
      "rendered": "City Game Spain"
    },
    "content": {
      "rendered": "\n<div class=\"wp-block-columns is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex\">\n<div class=\"wp-block-column is-layout-flow wp-block-column-is-layout-flow\"><h2 class=\"vo-block-heading wp-block-heading\" id=\"h-explore-spain-with-city-games-where-culture-and-adventure-come-together\">Explore Spain with City Games &ndash; where culture and adventure come together</h2>\n\n\n<p class=\"vo-block-paragraph\">Discover Vietnam like never before with our interactive city games! From the bustling streets of <a href=\"https://citygame.com/locations/vietnam/city-game-hanoi/\">Hanoi</a> to the floating markets of the Mekong Delta and the lantern-lit alleys of Hoi An, every destination turns into an exciting playground. Solve puzzles, uncover hidden gems, and explore Vietnam in a fun and immersive way. Our goal is to bring city games to every must-visit location. Check out our current game areas below&mdash;if your city isn&rsquo;t listed yet, <a href=\"https://citygame.com/contact/\">let us know</a>, and we&rsquo;ll make it happen!</p>\n</div>\n\n\n\n<div class=\"wp-block-column is-layout-flow wp-block-column-is-layout-flow\"><h2 class=\"vo-block-heading wp-block-heading\" id=\"h-discover-like-a-local\">Discover like a local!</h2>\n\n\n<p class=\"vo-block-paragraph\">Step beyond traditional sightseeing and dive into an unforgettable experience with city games! Wander through ancient temples, explore lively night markets, and solve engaging challenges that reveal Vietnam&rsquo;s rich history and culture. Whether you&#8217;re playing solo, with friends, or in teams, every city game transforms Vietnam into your personal adventure. Are you ready to explore?</p>\n</div>\n</div>\n\n\n\n<div class=\"wp-block-columns is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex\">\n<div class=\"wp-block-column is-layout-flow wp-block-column-is-layout-flow\">\n<!-- Voeg Mapbox CSS en JS toe -->\r\n\r\n\r\n\r\n\r\n/* Stijl voor grotere schermen (desktop &amp; tablets) */\r\n#citygame-map {\r\n    width: 100%;\r\n    height: 600px; /* Standaard hoogte */\r\n    border-radius: 10px;\r\n}\r\n\r\n/* Stijl voor mobiele schermen (max 768px breed) */\r\n@media screen and (max-width: 768px) {\r\n    #citygame-map {\r\n        height: 450px; /* Lagere hoogte voor mobiele apparaten */\r\n    }\r\n}\r\n\r\n.mapbox-improve-map {\r\n    display: none !important;\r\n}\r\n\r\n\r\n\r\n\r\n\n\n\n\n<div id=\"citygame-map\"></div>\n\n\n\n\r\n  // Gebruik je eigen Mapbox API-token\r\n  mapboxgl.accessToken = &#8216;pk.eyJ1IjoidXBkaWdpdGFsIiwiYSI6ImNtNmtybDR1djAwdXYyanM3OXM2ZDBjdzEifQ.VOTRVJ6H9i7HYCqO5QFNdQ&#8217;;\r\n\r\nvar zoomLevel = window.innerWidth &lt;= 768 ? 3.7 : 4.5; // Mobiel: 3, Desktop: 4\r\n\r\nvar map = new mapboxgl.Map({\r\n    container: &#039;citygame-map&#039;, // ID van de div\r\n    style: &#039;mapbox://styles/mapbox/light-v10&#039;, // Jouw kaartstijl\r\n    center: [108.2772, 17], // Center op Vietnam\r\n    zoom: zoomLevel // Zoomniveau afhankelijk van schermgrootte\r\n});\r\n\r\n\r\n\r\n// Voeg een knop toe om huidige locatie te tonen (geplaatst linksboven)\r\nconst geolocate = new mapboxgl.GeolocateControl({\r\n    positionOptions: {\r\n        enableHighAccuracy: true // Nauwkeurige locatiebepaling indien mogelijk\r\n    },\r\n    trackUserLocation: false, // Volgt de gebruiker als deze beweegt\r\n    showUserHeading: true // Toont de richting waarin de gebruiker kijkt\r\n});\r\n\r\nmap.addControl(geolocate, &#039;bottom-right&#039;); // Verplaatst de knop naar linksboven\r\n\r\n\r\n\r\n  // Alle nieuwe locaties\r\nvar geojson = {\r\n  &quot;type&quot;: &quot;FeatureCollection&quot;,\r\n  &quot;features&quot;: [\r\n    {&quot;type&quot;: &quot;Feature&quot;, &quot;geometry&quot;: {&quot;type&quot;: &quot;Point&quot;, &quot;coordinates&quot;: [105.851579, 21.032037]}, &quot;properties&quot;: {&quot;name&quot;: &quot;Hanoi&quot;, &quot;link&quot;: &quot;https://citygame.com/locations/vietnam/city-game-hanoi/&quot;}}\r\n\r\n  ]\r\n};\r\n\r\n\r\n  // Voeg clustering toe\r\n  map.on(&#039;load&#039;, function () {\r\n    map.addSource(&#039;cities&#039;, {\r\n      type: &#039;geojson&#039;,\r\n      data: geojson,\r\n      cluster: true,\r\n      clusterMaxZoom: 12,\r\n      clusterRadius: 34\r\n    });\r\n\r\n    // Cluster stijl\r\n    map.addLayer({\r\n      id: &#039;clusters&#039;,\r\n      type: &#039;circle&#039;,\r\n      source: &#039;cities&#039;,\r\n      filter: [&#039;has&#039;, &#039;point_count&#039;],\r\n      paint: {\r\n        &#039;circle-color&#039;: &#039;#ff424c&#039;,\r\n        &#039;circle-radius&#039;: 20\r\n      }\r\n    });\r\n\r\n    // Cluster nummer styling\r\n    map.addLayer({\r\n      id: &#039;cluster-count&#039;,\r\n      type: &#039;symbol&#039;,\r\n      source: &#039;cities&#039;,\r\n      filter: [&#039;has&#039;, &#039;point_count&#039;],\r\n      layout: {\r\n        &#039;text-field&#039;: &#039;{point_count_abbreviated}&#039;,\r\n        &#039;text-font&#039;: [&#039;DIN Offc Pro Medium&#039;, &#039;Arial Unicode MS Bold&#039;],\r\n        &#039;text-size&#039;: 14\r\n      },\r\n      paint: {\r\n        &#039;text-color&#039;: &#039;#ffffff&#039;\r\n      }\r\n    });\r\n\r\n    // Voeg custom marker afbeelding toe\r\n    map.loadImage(&#039;https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2025/01/CG_pin-png.webp&#039;, function(error, image) {\r\n      if (error) throw error;\r\n      map.addImage(&#039;custom-marker&#039;, image);\r\n    });\r\n\r\n    // Stijl voor individuele markers met stadsnaam erboven\r\n    map.addLayer({\r\n      id: &#039;unclustered-point&#039;,\r\n      type: &#039;symbol&#039;,\r\n      source: &#039;cities&#039;,\r\n      filter: [&#039;!&#039;, [&#039;has&#039;, &#039;point_count&#039;]],\r\n      layout: {\r\n        &#039;icon-image&#039;: &#039;custom-marker&#039;,\r\n        &#039;icon-size&#039;: 0.15,\r\n        &#039;text-field&#039;: [&#039;get&#039;, &#039;name&#039;],\r\n        &#039;text-font&#039;: [&#039;DIN Offc Pro Medium&#039;, &#039;Arial Unicode MS Bold&#039;],\r\n        &#039;text-size&#039;: 14,\r\n        &#039;text-offset&#039;: [0, 1.5],\r\n        &#039;text-anchor&#039;: &#039;top&#039;\r\n      },\r\n      paint: {\r\n        &#039;text-color&#039;: &#039;#000000&#039;,\r\n        &#039;text-halo-color&#039;: &#039;#ffffff&#039;,\r\n        &#039;text-halo-width&#039;: 2\r\n      }\r\n    });\r\n\r\n    // Klik op een cluster om in te zoomen\r\n    map.on(&#039;click&#039;, &#039;clusters&#039;, function (e) {\r\n      var features = map.queryRenderedFeatures(e.point, { layers: [&#039;clusters&#039;] });\r\n      var clusterId = features[0].properties.cluster_id;\r\n      map.getSource(&#039;cities&#039;).getClusterExpansionZoom(clusterId, function (err, zoom) {\r\n        if (err) return;\r\n        map.easeTo({ center: features[0].geometry.coordinates, zoom: zoom });\r\n      });\r\n    });\r\n\r\n    // Klik op een individuele marker om naar de boekpagina te gaan\r\n    map.on(&#039;click&#039;, &#039;unclustered-point&#039;, function (e) {\r\n      var city = e.features[0].properties;\r\n      window.location.href = city.link;\r\n    });\r\n\r\n    // Verander cursor bij hover\r\n    map.on(&#039;mouseenter&#039;, &#039;clusters&#039;, function () { map.getCanvas().style.cursor = &#039;pointer&#039;; });\r\n    map.on(&#039;mouseleave&#039;, &#039;clusters&#039;, function () { map.getCanvas().style.cursor = &#039;&#039;; });\r\n  });\r\n\r\n\r\n\r\n<!-- Zoekfunctie -->\r\n\r\n  var geocoder = new MapboxGeocoder({\r\n    accessToken: mapboxgl.accessToken,\r\n    mapboxgl: mapboxgl,\r\n    placeholder: &#8220;Search your city&#8221;,\r\n    marker: false\r\n  });\r\n\r\n  // Voeg zoekfunctie toe rechtsboven\r\n  map.addControl(geocoder, &#8216;top-right&#8217;);\r\n\r\n\r\n\r\n// Voeg zoom in/uit knoppen toe aan de kaart\r\nmap.addControl(new mapboxgl.NavigationControl(), &#8216;bottom-right&#8217;);\r\n\n</div>\n</div>\n\n\n<div class=\"card-row alignwide\">\n    <div class=\"card-row__inner\">\n                   \n<div class=\"card-row__container\">\n    <div class=\"grid-x grid-margin-x grid-margin-y\">\n                    \n<div class=\"cell medium-6 large-3\">\n    <div class=\"cta-card cta-card--card-row\">\n        <div class=\"cta-card__inner\">\n                            \n<div class=\"vo-block-icon has-white-text-color\">\n    <svg class=\"icon icon--up-xd vo-block-icon__icon\" aria-hidden=\"true\"><use xlink:href=\"https://citygame.com/wp-content/themes/citygame/assets/svg/sprite.svg#up-xd\"></use></svg></div>\n\n\n<h3 class=\"vo-block-heading wp-block-heading h5\" id=\"h-city-games-in-spain\">City Games in Spain</h3>\n\n\n\n<div class=\"wp-block-buttons cta-card__button is-layout-flex wp-block-buttons-is-layout-flex\"></div>\n\n                    </div>\n        <span class=\"cta-card__arrow\">\n            <svg class=\"icon icon--arrow-right \" aria-hidden=\"true\"><use xlink:href=\"https://citygame.com/wp-content/themes/citygame/assets/svg/sprite.svg#arrow-right\"></use></svg>        </span>\n    </div>\n</div>\n\n\n<div class=\"cell medium-6 large-3\">\n    <div class=\"cr-card cr-card-image\">\n                    \n\n<figure class=\"wp-block-image size-large\"><a href=\"https://citygame.com/locations/vietnam/city-game-hanoi/\"><img decoding=\"async\" src=\"https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2024/04/City-Game-Hanoi-1024x457.webp\" alt=\"City Game Hanoi\" class=\"wp-image-199058\" /></a><figcaption class=\"wp-element-caption\">City Game Hanoi</figcaption></figure>\n\n\n<h4 class=\"vo-block-heading wp-block-heading\" id=\"h-alicante\">Alicante</h4>\n\n\n<p class=\"vo-block-paragraph\">Alicante &#8211; a blend of ancient charm and modern buzz. Wander through the Old Quarter, savor the street food, visit historic temples, and enjoy the lively caf&eacute; culture. Experience the city&rsquo;s unique vibe by cyclo for a truly unforgettable adventure!</p>\n\n\n\n<div class=\"wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex\">\n<div class=\"wp-block-button is-style-clear-blue\"><a class=\"wp-block-button__link wp-element-button\" href=\"https://citygame.com/locations/vietnam/city-game-hanoi/\">City Games Hanoi</a></div>\n</div>\n\n            </div>\n</div>\n\n            </div>\n</div>\n\n            </div>\n</div>\n\n\n\n<div class=\"wp-block-columns is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex\">\n<div class=\"wp-block-column is-layout-flow wp-block-column-is-layout-flow\">\n<div class=\"wp-block-columns is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex\">\n<div class=\"wp-block-column is-layout-flow wp-block-column-is-layout-flow\"><h2 class=\"vo-block-heading wp-block-heading\" id=\"h-discover-alicante-with-a-city-game\">Discover Alicante with a City Game</h2>\n\n\n<p class=\"vo-block-paragraph\">Vietnam, located in Southeast Asia, is a nation celebrated for its breathtaking landscapes, historical sites, vibrant cities, and exquisite cuisine. Known as the &#8220;Land of the Ascending Dragon,&#8221; Vietnam is famous for its hospitable and resilient people.</p>\n\n\n<p class=\"vo-block-paragraph\">Visitors can experience the dynamic street life of Hanoi, explore the ancient city of Hoi An, or relax on the stunning beaches of Da Nang. Vietnam also offers a diverse range of activities, including river cruises in the Mekong Delta, exploring limestone karsts in Halong Bay, motorbike tours through mountain passes, and cooking classes featuring local dishes.</p>\n\n\n<p class=\"vo-block-paragraph\">Whether you&#8217;re in search of a thrilling adventure or a tranquil retreat, Vietnam is a destination that captivates. Its rich history, natural beauty, and delicious flavors make it an essential destination for travelers.</p>\n\n\n<p class=\"vo-block-paragraph\">Don&#8217;t forget to book your <a href=\"https://www.booking.com/apartments/index.html?aid=7920938\" target=\"_blank\" rel=\"noreferrer noopener\">hotel</a>!</p>\n</div>\n\n\n\n<div class=\"wp-block-column is-layout-flow wp-block-column-is-layout-flow\"><h2 class=\"vo-block-heading wp-block-heading\" id=\"h-can-t-find-your-city\">Can&#8217;t find your city?</h2>\n\n\n<p class=\"vo-block-paragraph\">Are you interested in playing a City Game in another city in Vietnam? No problem! <a href=\"https://citygame.com/contact/\">Contact us</a> directly and we can set up a game in your favored city as fast as possible.</p>\n</div>\n</div>\n</div>\n</div>\n",
      "protected": false
    },
    "excerpt": {
      "rendered": "<p>Explore Spain with City Games &ndash; where culture and adventure come together Discover Vietnam like never before with our interactive city games! From the bustling streets of Hanoi to the floating markets of the Mekong Delta and the lantern-lit alleys of Hoi An, every destination turns into an exciting playground. Solve puzzles, uncover hidden gems, [&hellip;]</p>\n",
      "protected": false
    },
    "author": 78,
    "featured_media": 0,
    "parent": 0,
    "menu_order": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "template": "",
    "meta": {
      "_acf_changed": false,
      "content-type": "",
      "ghostkit_customizer_options": "",
      "ghostkit_custom_css": "",
      "ghostkit_custom_js_head": "",
      "ghostkit_custom_js_foot": "",
      "ghostkit_typography": "",
      "footnotes": "",
      "_links_to": "",
      "_links_to_target": ""
    },
    "categories": [],
    "tags": [],
    "class_list": [
      "post-224339",
      "page",
      "type-page",
      "status-draft",
      "hentry"
    ],
    "acf": [],
    "yoast_head": "<!-- This site is optimized with the Yoast SEO Premium plugin v26.2 (Yoast SEO v26.3) - https://yoast.com/wordpress/plugins/seo/ -->\n<title>City Game Spain - City Game</title>\n<!-- Admin only notice: this page does not show a meta description because it does not have one, either write it for this page specifically or go into the [Yoast SEO - Settings] menu and set up a template. -->\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://citygame.com/?page_id=224339\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"City Game Spain\" />\n<meta property=\"og:description\" content=\"Explore Spain with City Games &ndash; where culture and adventure come together Discover Vietnam like never before with our interactive city games! From the bustling streets of Hanoi to the floating markets of the Mekong Delta and the lantern-lit alleys of Hoi An, every destination turns into an exciting playground. Solve puzzles, uncover hidden gems, [&hellip;]\" />\n<meta property=\"og:url\" content=\"https://citygame.com/?page_id=224339\" />\n<meta property=\"og:site_name\" content=\"City Game\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/profile.php?id=100086426226253\" />\n<meta property=\"article:modified_time\" content=\"2025-12-08T07:56:27+00:00\" />\n<meta property=\"og:image\" content=\"https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2024/04/City-Game-Hanoi-1024x457.webp\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:label1\" content=\"Est. reading time\" />\n\t<meta name=\"twitter:data1\" content=\"4 minutes\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://citygame.com/?page_id=224339\",\"url\":\"https://citygame.com/?page_id=224339\",\"name\":\"City Game Spain - City Game\",\"isPartOf\":{\"@id\":\"https://citygame.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://citygame.com/?page_id=224339#primaryimage\"},\"image\":{\"@id\":\"https://citygame.com/?page_id=224339#primaryimage\"},\"thumbnailUrl\":\"https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2024/04/City-Game-Hanoi-1024x457.webp\",\"datePublished\":\"-0001-11-30T00:00:00+00:00\",\"dateModified\":\"2025-12-08T07:56:27+00:00\",\"breadcrumb\":{\"@id\":\"https://citygame.com/?page_id=224339#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://citygame.com/?page_id=224339\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://citygame.com/?page_id=224339#primaryimage\",\"url\":\"\",\"contentUrl\":\"\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://citygame.com/?page_id=224339#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://citygame.com/nl/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"City Game Spain\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://citygame.com/#website\",\"url\":\"https://citygame.com/\",\"name\":\"City Game\",\"description\":\"We make it a game\",\"publisher\":{\"@id\":\"https://citygame.com/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://citygame.com/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":[\"Organization\",\"Place\"],\"@id\":\"https://citygame.com/#organization\",\"name\":\"CityGame.com\",\"url\":\"https://citygame.com/\",\"logo\":{\"@id\":\"https://citygame.com/?page_id=224339#local-main-organization-logo\"},\"image\":{\"@id\":\"https://citygame.com/?page_id=224339#local-main-organization-logo\"},\"sameAs\":[\"https://www.facebook.com/profile.php?id=100086426226253\",\"https://www.linkedin.com/company/citygame-com\",\"https://www.instagram.com/citygame.c0m/\"],\"address\":{\"@id\":\"https://citygame.com/?page_id=224339#local-main-place-address\"},\"geo\":{\"@type\":\"GeoCoordinates\",\"latitude\":\"52.389969\",\"longitude\":\"4.652053\"},\"telephone\":[\"+31641185635\"],\"openingHoursSpecification\":[{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"],\"opens\":\"09:00\",\"closes\":\"17:00\"}],\"email\":\"hello@citygame.com\",\"vatID\":\"NL850453227B01\"},{\"@type\":\"PostalAddress\",\"@id\":\"https://citygame.com/?page_id=224339#local-main-place-address\",\"streetAddress\":\"Hendrik Figeeweg 1T1\",\"addressLocality\":\"Haarlem\",\"postalCode\":\"2031BJ\",\"addressRegion\":\"Noord Holland\",\"addressCountry\":\"NL\"},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://citygame.com/?page_id=224339#local-main-organization-logo\",\"url\":\"https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2021/04/geo-games.png\",\"contentUrl\":\"https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2021/04/geo-games.png\",\"width\":2198,\"height\":3304,\"caption\":\"CityGame.com\"}]}</script>\n<meta name=\"geo.placename\" content=\"Haarlem\" />\n<meta name=\"geo.position\" content=\"52.389969;4.652053\" />\n<meta name=\"geo.region\" content=\"Netherlands\" />\n<!-- / Yoast SEO Premium plugin. -->",
    "yoast_head_json": {
      "title": "City Game Spain - City Game",
      "robots": {
        "index": "index",
        "follow": "follow",
        "max-snippet": "max-snippet:-1",
        "max-image-preview": "max-image-preview:large",
        "max-video-preview": "max-video-preview:-1"
      },
      "canonical": "https://citygame.com/?page_id=224339",
      "og_locale": "en_US",
      "og_type": "article",
      "og_title": "City Game Spain",
      "og_description": "Explore Spain with City Games &ndash; where culture and adventure come together Discover Vietnam like never before with our interactive city games! From the bustling streets of Hanoi to the floating markets of the Mekong Delta and the lantern-lit alleys of Hoi An, every destination turns into an exciting playground. Solve puzzles, uncover hidden gems, [&hellip;]",
      "og_url": "https://citygame.com/?page_id=224339",
      "og_site_name": "City Game",
      "article_publisher": "https://www.facebook.com/profile.php?id=100086426226253",
      "article_modified_time": "2025-12-08T07:56:27+00:00",
      "og_image": [
        {
          "url": "https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2024/04/City-Game-Hanoi-1024x457.webp",
          "type": "",
          "width": "",
          "height": ""
        }
      ],
      "twitter_card": "summary_large_image",
      "twitter_misc": {
        "Est. reading time": "4 minutes"
      },
      "schema": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://citygame.com/?page_id=224339",
            "url": "https://citygame.com/?page_id=224339",
            "name": "City Game Spain - City Game",
            "isPartOf": {
              "@id": "https://citygame.com/#website"
            },
            "primaryImageOfPage": {
              "@id": "https://citygame.com/?page_id=224339#primaryimage"
            },
            "image": {
              "@id": "https://citygame.com/?page_id=224339#primaryimage"
            },
            "thumbnailUrl": "https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2024/04/City-Game-Hanoi-1024x457.webp",
            "datePublished": "-0001-11-30T00:00:00+00:00",
            "dateModified": "2025-12-08T07:56:27+00:00",
            "breadcrumb": {
              "@id": "https://citygame.com/?page_id=224339#breadcrumb"
            },
            "inLanguage": "en-US",
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": [
                  "https://citygame.com/?page_id=224339"
                ]
              }
            ]
          },
          {
            "@type": "ImageObject",
            "inLanguage": "en-US",
            "@id": "https://citygame.com/?page_id=224339#primaryimage",
            "url": "",
            "contentUrl": ""
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://citygame.com/?page_id=224339#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://citygame.com/nl/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "City Game Spain"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://citygame.com/#website",
            "url": "https://citygame.com/",
            "name": "City Game",
            "description": "We make it a game",
            "publisher": {
              "@id": "https://citygame.com/#organization"
            },
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://citygame.com/?s={search_term_string}"
                },
                "query-input": {
                  "@type": "PropertyValueSpecification",
                  "valueRequired": true,
                  "valueName": "search_term_string"
                }
              }
            ],
            "inLanguage": "en-US"
          },
          {
            "@type": [
              "Organization",
              "Place"
            ],
            "@id": "https://citygame.com/#organization",
            "name": "CityGame.com",
            "url": "https://citygame.com/",
            "logo": {
              "@id": "https://citygame.com/?page_id=224339#local-main-organization-logo"
            },
            "image": {
              "@id": "https://citygame.com/?page_id=224339#local-main-organization-logo"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=100086426226253",
              "https://www.linkedin.com/company/citygame-com",
              "https://www.instagram.com/citygame.c0m/"
            ],
            "address": {
              "@id": "https://citygame.com/?page_id=224339#local-main-place-address"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.389969",
              "longitude": "4.652053"
            },
            "telephone": [
              "+31641185635"
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "email": "hello@citygame.com",
            "vatID": "NL850453227B01"
          },
          {
            "@type": "PostalAddress",
            "@id": "https://citygame.com/?page_id=224339#local-main-place-address",
            "streetAddress": "Hendrik Figeeweg 1T1",
            "addressLocality": "Haarlem",
            "postalCode": "2031BJ",
            "addressRegion": "Noord Holland",
            "addressCountry": "NL"
          },
          {
            "@type": "ImageObject",
            "inLanguage": "en-US",
            "@id": "https://citygame.com/?page_id=224339#local-main-organization-logo",
            "url": "https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2021/04/geo-games.png",
            "contentUrl": "https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2021/04/geo-games.png",
            "width": 2198,
            "height": 3304,
            "caption": "CityGame.com"
          }
        ]
      },
      "geo.placename": "Haarlem",
      "geo.position": {
        "lat": "52.389969",
        "long": "4.652053"
      },
      "geo.region": "Netherlands"
    },
    "lang": "en",
    "translations": {
      "en": 224339
    },
    "pll_sync_post": [],
    "_links": {
      "self": [
        {
          "href": "https://citygame.com/wp-json/wp/v2/pages/224339",
          "targetHints": {
            "allow": [
              "GET",
              "POST",
              "PUT",
              "PATCH",
              "DELETE"
            ]
          }
        }
      ],
      "collection": [
        {
          "href": "https://citygame.com/wp-json/wp/v2/pages"
        }
      ],
      "about": [
        {
          "href": "https://citygame.com/wp-json/wp/v2/types/page"
        }
      ],
      "author": [
        {
          "embeddable": true,
          "href": "https://citygame.com/wp-json/wp/v2/users/78"
        }
      ],
      "replies": [
        {
          "embeddable": true,
          "href": "https://citygame.com/wp-json/wp/v2/comments?post=224339"
        }
      ],
      "version-history": [
        {
          "count": 0,
          "href": "https://citygame.com/wp-json/wp/v2/pages/224339/revisions"
        }
      ],
      "wp:attachment": [
        {
          "href": "https://citygame.com/wp-json/wp/v2/media?parent=224339"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "category",
          "embeddable": true,
          "href": "https://citygame.com/wp-json/wp/v2/categories?post=224339"
        },
        {
          "taxonomy": "post_tag",
          "embeddable": true,
          "href": "https://citygame.com/wp-json/wp/v2/tags?post=224339"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    }
  }
]