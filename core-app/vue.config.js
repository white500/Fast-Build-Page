const resolves = dir => require('path').join(__dirname, dir)
module.exports = {
    publicPath: './',
    outputDir: 'dist', // 打包输出目录
    assetsDir: 'static',
    filenameHashing: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolves('src'))
            .set('@u', resolves('src/utils'))
            .set('@c', resolves('src/components'))
            .set('@api', resolves('src/api'))
    },
    configureWebpack: config => {
        // 调试JS
        config.devtool = 'source-map'
    },
    css: {
        // 查看CSS属于哪个css文件
        sourceMap: true
    },
    devServer: {
        // public: '0.0.0.0:8080',
        port: 8080,
        https: false,
        open: false,
        proxy: {
            '/api': {
                target: process.env.VUE_APP_BASE_URL,
                ws: true,
                secure: false,
                changeOrigin: true,
                pathReWrite: { '^/api': '' }
            }
        }
    }
}
