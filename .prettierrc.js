module.exports = {
    printWidth: 120,
    proseWrap: 'never',
    arrowParens: 'avoid',
    endOfLine: 'lf',
    trailingComma: 'es5',
    tabWidth: 4,
    singleQuote: true,
    overrides: [
        {
            files: ['**/*.css', '**/*.scss', '**/*.sass', '**/*.html', '**/*.svg'],
            options: {
                singleQuote: false,
            },
        },
    ],
};
