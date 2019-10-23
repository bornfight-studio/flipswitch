const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	devServer: {
		stats: 'errors-only',
		host: process.env.HOST, // default: localhost
		port: process.env.PORT, // default: 8080
		open: true, // open page in browser
		overlay: true, // error overlay
	},
	module: {
		rules: [
			{
				test: [/.css$|.scss$/],
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
		]
	},
	plugins: [
		new WriteFilePlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
};
