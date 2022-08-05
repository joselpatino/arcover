const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.NODE_ENV === 'production'
    ? '/ar-cover/'
    : '/',
	chainWebpack: config => {
		config.module.rule('vue').use('vue-loader').tap(options => {
			options.compilerOptions = {
				...options.compilerOptions,
				isCustomElement: tag => tag.startsWith('a-')
			}
			return options
		})
	}
})
