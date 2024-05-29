import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import url from "url";

const __dirname=path.dirname(url.fileURLToPath(import.meta.url));

export default  {
  context: path.join(__dirname, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  entry: {
    app: "./index.tsx",
  },

  output: {
    filename: "[name].[chunkhash].js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },

      {test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              exportLocalsConvention: "camelCase",
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            }
          }
        }, "sass-loader"]
      },
      
      {
        test: /\.css$/,
       use: ["style-loader", "css-loader"]
        ,
      },
    ],
  },

devtool: "eval-source-map",
devServer: {
  historyApiFallback: true,
  port: 8080,
  open: true,
  hot: true,
  static: {
    directory: path.join(__dirname, "src"),
  },
  devMiddleware: {
    stats: "errors-only",
  }
},
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    })
  ],
};