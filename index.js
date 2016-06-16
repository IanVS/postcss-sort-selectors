var postcss = require('postcss');

module.exports = postcss.plugin('postcss-sort-selectors', function (opts) {
    opts = opts || { pattern: /\._shells_react_components/ };
    return function sort(css, result) {
        var shellsCSS = postcss.root();
        var otherCSS = postcss.root();
        var finalCSS = postcss.root();
        css.each(function (node) {
            if (
                node.type === 'rule' &&
                opts.pattern.test(node.selector)
            ) {
                shellsCSS.append(node);
            } else {
                otherCSS.append(node);
            }
        });
        finalCSS.append(shellsCSS);
        finalCSS.append(otherCSS);
        result.root = finalCSS;
    };
});
