const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/Index/Index.tsx",
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
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: () => [
									require("autoprefixer")
								]
							}
						}
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				loader: "file-loader"
			},
			{
				test: /\.pdf$/,
				loader: "file-loader",
				options: { name: "[name].[ext]" }
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".jsx", ".ts", ".js"]
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
