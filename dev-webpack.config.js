//require our dependencies
var path = require('path');
var webpack = require('webpack');
const {resolve} = require('path');
var BundleTracker = require('webpack-bundle-tracker');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const APP_DIR = resolve(__dirname, 'assets/js/client');

module.exports = env => {
    return {
        //the base directory (abs. path) for resolving the entry option
        context: __dirname,
        entry: ['babel-polyfill', APP_DIR + '/circumat.js'],

        output: {
            //where to store compiled bundle
            path: path.resolve(__dirname + '/assets/bundles/'),

            //webpack naming convention where files are stores
            filename: '[name]-[contenthash].js'
        },

        mode: 'development',

        plugins: [
            //where to store meta-data about the bundle
            new BundleTracker({path: __dirname, filename: './webpack-stats.json'}),
            new MiniCssExtractPlugin ({
                filename: 'style.css',
                // disable: false,
                // allChunks: true

            }),

            new webpack.DefinePlugin({
                'WEBSOCKET_URL': '"ws://127.0.0.1:8000/circumat/"',
                'AJAX_URL': '"http://127.0.0.1:8000/ajaxhandling/"'
            })
        ],

        module: {
            rules: [
                {
                    include: APP_DIR,
                    loader: 'babel-loader',
                    options: {
                        //what will be dealing with (react code)
                        "presets": [
                            "@babel/preset-react" , 
                            "@babel/preset-env" , 
                        ],
                        "plugins": [
                            "@babel/plugin-proposal-class-properties"]
                    },
                    test: /\.js$/
                },
                {
                    test: /\.(css|sass|scss)$/,
                    use: [
                        {
                          loader: MiniCssExtractPlugin.loader,
                        },
                        {
                          loader: 'css-loader',
                          options: {
                            modules: true,
                            importLoaders: 1,
                            url: false,
                          },
                        },
                        {
                          loader: 'sass-loader',
                        },
                      ],
                },
                {
                    test: /\.woff2?$|\.ttf$|\.svg$|\.eot$/,
                    use: [
                        {
                            loader: 'file-loader'
                        }
                    ]
                }
            ]
        },

        resolve: {
            //where to look for modules

            extensions: ['.js', '.jsx', '.css']
        }
    }
};
