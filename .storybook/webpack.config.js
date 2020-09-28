const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = async ({ config, mode }) => {
    const devMode = 'DEVELOPMENT' === mode

    config.resolve.extensions.push('.scss')

    config.module.rules.push({
        test: /\.(scss|css)$/,
        use: [
            {
                loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
            },
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[name]_[local]_[sha1:hash:hex:4]'
                    },
                    importLoaders: 2
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            autoprefixer()
                        ],
                        sourceMap: true
                    }
                }
            },
            {
                loader: 'sass-loader'
            }
        ]
    })

    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[contenthash:4].css'
        })
    )

    return config
}
