const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /^node_modules$/,
				loader: "ts-loader"
			},
			{
				test: /\.jsx?$/,
				exclude: /^node_modules$/,
				loader: "babel-loader"
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},
			{
				test: /\.(jpe?g|png|gif|pdf)$/,
				loader: "file-loader"
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html"
		})
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build")
	}
};
