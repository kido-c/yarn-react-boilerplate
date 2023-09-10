// webpack.config.js
const path = require('path')
/* Plugin */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 웹팩에게 애플리케이션의 시작 지점을 정함
  entry: {
    index: './src/index.tsx',
  },
  resolve: {
    // 웹팩이 해석할 확장자
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.css'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 디버깅할 개발자 도구의 스타일을 정함
  devtool: 'eval-cheap-source-map',
  // webpack-dev-server의 옵션을 설정
  devServer: {
    port: 3000,
    // 번들된 코드가 실제로 어디 있는지 서버에게 알려줌
    static: {
      publicPath: '/dist/',
    },
    // HMR을 사용할 것인지 여부, 새로 고침 없이 빌드 실패 같은 케이스에 HMR 적용
    hot: 'only',
    // 서버 시작 후 바로 브라우를 열 것인지 정함
    open: true,
    client: {
      // 컴파일 과정 퍼센티지로 브라우저에 보여줌
      progress: false,
      // 컴파일 에러 또는 경고시에 브라우저에 풀스크린으로 보여줌
      overlay: false,
    },
  },
  // 번들링 된 결과물을 어디다 둘 것인지에 대한 설정
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  // export한 JS 모듈이 어떻게 변환되는지 정의
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpe?g/,
        type: 'asset/resource',
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new RefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 번들링된 JS를 주입하고 결과물을 옮길 대상이 되는 파일을 지정
      template: './public/index.html',
    }),
  ],
}
