module.exports = {
    plugins: [
        [
            'babel-plugin-module-resolver',
            {
                alias: {
                    components: './src/components',
                    utils: './src/utils/',
                    assets: './src/assets/',
                    components: './src/components/',
                    common: './src/common/',
                    services: './src/services/',
                },
            },
        ],
    ],
};
