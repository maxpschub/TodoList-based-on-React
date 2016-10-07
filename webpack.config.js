module.exports = {
	devtool: 'eval-source-map', //配置source map
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	module: {
		loaders: [ 
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel', 
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}