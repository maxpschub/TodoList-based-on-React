module.exports = {
	devtool: 'eval-source-map', //配置source map
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		publicPath: "/public",
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
		},
		{
			test: /\.css$/,
			loader: 'style!css?modules'
		}]
	},
	devServer: {
	    contentBase: "./",//本地服务器所加载的页面所在的目录
	    colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	}
}