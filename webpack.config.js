const path = require('path')

const javascriptRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
}

/* const styleRules = {
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"]
}

const imagesRules = {
    test: /\.(png|jpg|gif)$/,
    use: [{ loader: 'url-loader' }]
} */

module.exports = {
    /* output:{
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }, */
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        },
        fallback: { "timers": require.resolve("timers-browserify")  }
    },
    stats: {
        children: true
   }/* ,
    module: {
        rules:[ javascriptRules ]
    } */

};
