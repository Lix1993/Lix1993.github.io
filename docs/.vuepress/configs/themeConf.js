navbar = [
    { "text": "Resume", "link": "/" },
    {
        "text": "Projects",
        "items": [
            {
                "text": "Projects",
                "link": "/Projects/"
            }
        ]
    },
    {
        "text": "Skills",
        "items": [
            {
                "text": "Skills",
                "link": "/Skills/"
            },
            {
                "text": "Bioinfo Tools",
                "link": "/Skills/bioinfo_tools/"
            },

        ]
    }
];


module.exports = {
    search: false,
    nav: navbar,
    displayAllHeaders: true,
    lastUpdated: '更新时间'
} 