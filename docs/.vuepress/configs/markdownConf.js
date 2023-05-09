module.exports = {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
        md.use(require("markdown-it-katex"));
    }
}