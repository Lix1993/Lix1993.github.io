module.exports = [
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
    ]

]