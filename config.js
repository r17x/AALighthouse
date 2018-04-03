module.exports = {
    lighthouse: {
        passes: [{
            recordTrace: true,
            pauseAfterLoadMs: 5000,
            useThrottling: true,
            gatherers: [], 
        }],
        // Default : https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/config/default.js#L31
        audits: [
            'first-meaningful-paint',
            'speed-index-metric',
            'estimated-input-latency',
            'first-interactive',
            'consistently-interactive', 
        ]
    },

    chrome: {
        chromeFlags: [
            '--incognito',
            '--show-paint-rects'
        ] 
    },

    url: [
        'https://ray7-175908.firebaseapp.com' 
    ]

}
