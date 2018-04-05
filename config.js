const defaultConfig = require('./default-config')
module.exports = {
    lighthouse: {
        custom: {
            passes: [{
                recordTrace: true,
                pauseAfterLoadMs: 5000,
                useThrottling: true,
                gatherers: [], 
            }],
            audits: [
                'first-meaningful-paint',
                'speed-index-metric',
                'estimated-input-latency',
                'first-interactive',
                'consistently-interactive', 
            ]
        },
        // Default : https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/config/default.js#L31
        // or Set null like this normal key
        normal: null
    },

    chrome: {
        chromeFlags: [
            '--incognito',
            '--show-paint-rects'
        ] 
    },

    url: [
        'https://ray7-175908.firebaseapp.com',
        'https://id-ch-angular.firebaseapp.com/' 
    ]

}
