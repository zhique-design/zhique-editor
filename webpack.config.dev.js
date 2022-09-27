const path = require('path');
const production = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: production ? 'production' : 'development',
    devtool: production ? false : 'eval-cheap-module-source-map',
    entry: {
        app: path.resolve(__dirname, 'demo', 'src', 'index.tsx'),
    },
    output: {
        filename: 'static/js/[name].[hash:8].js',
        chunkFilename: 'static/js/[name].chunk.[hash:8].js',
        path: path.resolve(__dirname, 'demo', 'dist'),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false,
            maxSize: 200000,
            automaticNameDelimiter: '.'
        },
        runtimeChunk: {
            name: 'runtime',
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'demo', 'public'),
        },
        compress: true,
        port: 8000,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "zhiquee-editor",
            template: path.resolve(__dirname, 'demo', 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'demo', 'dist')]
        }),
    ],
};