const { addonBuilder } = require("stremio-addon-sdk");

const RADIO_DATA = [
    {
        "frequency": "107.9",
        "genres": ["Top Hits", "Top 80s", "Top 90s"],
        "id": "0",
        "name": "The Mix 107.9 FM; Augusta/Waterville, ME",
        "poster": "https://mixmaine.com/wp-content/uploads/The-Mix-1079_wTagline.jpg",
        "url": "https://stream.radio.co/s5c993fa61/listen"
    },
    {
        "frequency": "107.5",
        "genres": ["Classic Hits"],
        "id": "1",
        "name": "Frank 107.5 FM; Skowhegan, ME",
        "poster": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-media.streema.com%2Fmedia%2Fcache%2Fa3%2F24%2Fa3249e8d760a7f51b5cb6c4cccf7cc78.jpg&f=1&nofb=1&ipt=fd92c02bcf77f8c84426e6f3a005776dc6e8796d1b90109785f4d9fdf318f410&ipo=images",
        "url": "https://live.amperwave.net/manifest/binnie-wfnkfmaac-hlsc.m3u8"
    },
    {
        "frequency": "105.3",
        "genres": ["Rock", "Metal"],
        "id": "2",
        "name": "WTOS 105.3 FM; Skowhegan, ME",
        "poster": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fradioinsight.com%2Fwp-content%2Fimages%2F2019%2F01%2Fwtos.png&f=1&nofb=1&ipt=b79004d7ea782223a1f706d3cad8649db4dabaaead7a133d33f8ec21245a392c&ipo=images",
        "url": "https://prod-3-85-73-255.amperwave.net/blueberry-wtosfmaac-hlsc1.m3u8"
    },
    {
        "frequency": "100.3",
        "genres": ["Classic Rock"],
        "id": "3",
        "name": "WKIT 100.3 FM; Bangor, ME",
        "poster": "https://static.mytuner.mobi/media/tvos_radios/4PJfVSfST5.png",
        "url": "http://ice6.securenetsystems.net/WKIT"
    },
    {
        "frequency": "98.5",
        "genres": ["Country", "New Country"],
        "id": "4",
        "name": "Bee 98.5 FM; Augusta/Waterville, ME",
        "poster": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/399130142_836720108461417_4858111971978809231_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=uwQ3EUTQZlIAX99EOhk&_nc_oc=AQlX9bRtVLWhhfwlNzHGfiwGqKF8MGqvOWsPWRfy_OcfLNS9M1dh8q6c1QT6m6E4r-g&_nc_ht=scontent-lga3-2.xx&oh=00_AfCTTPj4IyqtLHEQeNm6CXhaJVZO-mvqy7QQ573FaeKkMA&oe=6592C963",
        "url": "https://prod-54-146-185-121.amperwave.net/townsquare-webbfmaac-hlsc3.m3u8"
    },
    {
        "frequency": "97.7",
        "genres": ["Classic Rock"],
        "id": "5",
        "name": "Star 97.7 FM; Winter Harbor, ME",
        "poster": "https://cdn-radiotime-logos.tunein.com/s21557g.png",
        "url": "http://ice7.securenetsystems.net/WNSX"
    },
    {
        "frequency": "97.1",
        "genres": ["Country", "New Country"],
        "id": "6",
        "name": "The Bear 97.1 FM; Bangor, ME",
        "poster": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.mytuner.mobi%2Fmedia%2Ftvos_radios%2Fz7jfvKz75V.png&f=1&nofb=1&ipt=6afcbdf52464c6979d3aa2846a0cf2f05e362de4ae09e149ced4cbeb7940829c&ipo=images",
        "url": "https://live.amperwave.net/manifest/blueberry-wbfbfmaac-hlsc1.m3u8"
    },
    {
        "frequency": "96.60",
        "genres": ["Alternative Rock"],
        "id": "7",
        "name": "WCYY 94.3 FM; Portland, ME",
        "poster": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FWr0mipDykYQ%2Fmaxresdefault.jpg%3Fsqp%3D-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVShVMA8%3D%26rs%3DAOn4CLAFz6YHkmdETUxgNxJKCLmtqTz-wQ&f=1&nofb=1&ipt=dd48612bb2b2d81b1312568ef5dac85ac836d11809aa1cfe9358bd1e787c7109&ipo=images",
        "url": "https://prod-54-146-185-121.amperwave.net/townsquare-wcyyfmaac-hlsc3.m3u8"
    },
    {
        "frequency": "93.5",
        "genres": ["Country", "Classic Country"],
        "id": "8",
        "name": "Cruisin Country 93.5 FM; Augusta/Waterville, ME",
        "poster": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fradioinsight.com%2Fwp-content%2Fimages%2F2018%2F12%2Fwctb.png&f=1&nofb=1&ipt=73824c0bf5fa4a4892037ab7c6eb8f303b4fd6c353b38abf9ad9b44dc95962ca&ipo=images",
        "url": "http://stream.radio.co/s4867e9e93/listen"
    },
    {
        "frequency": "92.3",
        "genres": ["Country", "New Country"],
        "id": "9",
        "name": "The Moose 92.3 FM; Augusta, ME",
        "poster": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpwaimg.listenlive.co%2FKMOZFM_1540931_config_station_logo_image_1514580924.png&f=1&nofb=1&ipt=c36eebcec399c5c523994757622dd1483121991938d438b5ebdcaf45c9fa2aa0&ipo=images",
        "url": "https://26223.live.streamtheworld.com/KMOZFMAAC.aac"
    },
    {
        "frequency": "89.7",
        "genres": ["Eclectic"],
        "id": "10",
        "name": "WMHB 89.7 FM; Augusta/Waterville, ME",
        "poster": "https://scontent-lga3-2.xx.fbcdn.net/v/t31.18172-8/12615524_10153499953296909_1267401479910958902_o.png?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oqObjSUnSGMAX--U5Vj&_nc_ht=scontent-lga3-2.xx&oh=00_AfABkXMeUl2DYFzHrmENMAv_-XC5rW4xgANmo0H8mNogfA&oe=65B4F459",
        "url": "https://ais-edge37-live365-dal02.cdnstream.com/a46702"
    },
    {
        "frequency": "89.3",
        "genres": ["Alternative Rock"],
        "id": "11",
        "name": "WHSN 89.3 FM; Bangor, ME",
        "poster": "https://static.mytuner.mobi/media/tvos_radios/QzLbR2kb4m.png",
        "url": "http://ice7.securenetsystems.net/WHSN"
    },
    {
        "frequency": "104.7",
        "genres": ["Rhythmic", "Contemporary", "Hit Radio"],
        "id": "12",
        "name": "Hot Radio ME 104.7 FM; Kennebunkport, ME",
        "poster": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/279554676_171811465204887_2502324899337785753_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=O8UJRYU5ZFgAX9ZMigF&_nc_ht=scontent-lga3-1.xx&oh=00_AfCT9mCBN6s3AVuTzIfKPdOpoZO_sr_-zpQKGCA4rplFEw&oe=659206CA",
        "url": "https://ice9.securenetsystems.net/WHTP"
    }
];

const getStreams = () => {
    const streams = {};
    RADIO_DATA.forEach(entry => {
        streams[entry["id"]] = {
            'title': `Listen to ${entry["name"]}`,
            'url': entry["url"],
        };
    });
    return streams;
};

const getCatalog = () => {
    const catalog = RADIO_DATA.map(entry => ({
        "id": entry["id"],
        "name": entry["name"],
        "genres": entry["genres"],
        "poster": entry["poster"],
    }));
    return catalog;
};

const getGenres = () => {
    const genres = new Set();
    RADIO_DATA.forEach(item => {
        item["genres"].forEach(genre => genres.add(genre));
    });
    return [...genres];
};

const manifest = {
    "id": "com.mixtape.maineradio",
    "version": "1.0.1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_the_State_of_Maine.svg/761px-Flag_of_the_State_of_Maine.svg.png",
    "name": "Stremio Maine Radio",
    "description": "Stremio Add-On to listen to all Maine Radio Stations",
    "types": ["radio"],
    "catalogs": [
        {
            "type": "radio",
            "id": "radios",
            "name": "Maine Radio",
            "extra": [{ "genres": getGenres() }]
        }
    ],
    "resources": [
        "catalog",
        "meta",
        "stream"
    ],
    "idPrefixes": [""]
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler((args) => {
    return new Promise((resolve, reject) => {
        try {
            const searchQuery = args.extra && args.extra.search ? args.extra.search.toLowerCase() : '';
            const catalog = getCatalog().filter(item => item.name.toLowerCase().includes(searchQuery));

            const metaPreviews = {
                'metas': catalog.map(item => ({
                    'id': item['id'],
                    'type': "radio",
                    'name': item['name'],
                    'genres': item["genres"],
                    'poster': item["poster"],
                    'description': "",
                }))
            };
            resolve(metaPreviews);
        } catch (error) {
            console.error("Error in defineCatalogHandler:", error);
            reject(error);
        }
    });
});

builder.defineMetaHandler((args) => {
    return new Promise((resolve, reject) => {
        try {
            const mkItem = item => ({
                'id': item['id'],
                'type': "radio",
                'name': item['name'],
                'genres': item['genres'],
                'poster': item["poster"],
                'background': item["poster"],
                'posterShape': "square",
            });

            const meta = {
                'meta': mkItem(getCatalog().find(item => item['id'] === args.id)),
            };
            resolve(meta);
        } catch (error) {
            console.error("Error in defineMetaHandler:", error);
            reject(error);
        }
    });
});

builder.defineStreamHandler((args) => {
    return new Promise((resolve, reject) => {
        try {
            const streams = { 'streams': [] };
            if (args.id in getStreams()) {
                streams['streams'].push(getStreams()[args.id]);
            }
            resolve(streams);
        } catch (error) {
            console.error("Error in defineStreamHandler:", error);
            reject(error);
        }
    });
});

module.exports = builder.getInterface();