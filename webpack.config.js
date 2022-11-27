const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: './src/js/index.js',
    locker: './src/js/locker.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        // scss檔案轉譯至/dist資料夾時，需使用的到的loader
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        // css檔案內部引用的scss檔案，轉譯至/dist資料夾時，需使用的到的loader
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 原流程為處理過後的 CSS 注入到 HTML 內，將以 style 標籤的形式存在
      // 此套件用於將 CSS 程式碼從 HTML 檔案中抽離獨立出來
      filename: 'css/[name].css'
    })
  ],
}
