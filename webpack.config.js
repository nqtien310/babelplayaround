 module.exports = {
     entry: './src/main.js',
     output: {
         path: './dist',
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 };
