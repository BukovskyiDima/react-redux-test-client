let webpack = require('webpack');
let autoprefixer = require('autoprefixer');


module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: {
				loader: require.resolve('babel-loader')
			}
		}, {
			test: /\.css$/,
			loader: 'css-loader!autoprefixer-loader?browsers=last 2 versions'
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};