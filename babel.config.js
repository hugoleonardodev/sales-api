module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        [
           'module-resolver',
            {
                alias: {
                    '@configs': './src/configs',
                    '@modules': './src/modules',
                    '@types': './src/@types',
                    '@shared': './src/shared'
                }
            }
        ]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}
