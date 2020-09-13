const resolves = dir => require('path').join(__dirname, dir)
module.exports = {
	publicPath: './',
	outputDir: 'dist', // 打包输出目录
	assetsDir: 'static',
	filenameHashing: true,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolves('src'))
			.set('_c', resolves('src/components'))
			.set('_api', resolves('src/api'))
		// config
		//     .plugin('html')
		//     .tap(args => {
		//         args[0].title = '新凤河智慧水务平台'
		//         return args
		//     })
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
