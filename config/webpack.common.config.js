const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
	entry: './src/ts/Flipswitch.ts',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'flipswitch.js',
		library: 'Flipswitch',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	devServer: {
		writeToDisk: true
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	module: {
		rules: [
			{
				test: [/.js$|.ts$/],
				exclude: /(node_modules)/,
				use: ['babel-loader', 'awesome-typescript-loader']
			},
			{
				test: [/.css$|.scss$/],
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/images'
						}
					}
				]
			}
		]
	},
	plugins: [
		new WriteFilePlugin(),
		new MiniCssExtractPlugin({
			filename: 'flipswitch.css',
			chunkFilename: '[id].css'
		})
	]
}
;
