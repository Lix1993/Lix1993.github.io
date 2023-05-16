

module.exports = [
    ['@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale(lang)
            return moment(timestamp).format('LLLL')
        },
        dateOptions: {
            hour12: false
        }
    }
    ],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
        }
    }],
    [
        '@vuepress/google-analytics',
        {
            'ga': 'G-ETPZ81N14C'
        }
    ],
    [
        "vuepress-plugin-auto-sidebar",
        {
            sort: {
                readmeFirstForce: true
            }
        }
    ],
]