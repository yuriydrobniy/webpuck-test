/**
 * Created by yura on 22.05.2016.
 */
var path = require('path');
console.log('path ' + path);
var webpack = require('webpack');
console.log('webpack ' + webpack);
var config = {
    context: path.join(__dirname, './'), // исходная директория
    entry: './index', // файл для сборки, если несколько - указываем hash (entry name => filename)
    output: {
        path: path.join(__dirname, 'assets') // выходная директория
    }
};
var compiler = webpack(config);
compiler.run(function (err, stats) {
    console.log(stats.toJson()); // по завершению, выводим всю статистику
});