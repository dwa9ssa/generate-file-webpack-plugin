const path = require('path');
const {GenerateFileWebpackPlugin} = require('../../../../src/index');

module.exports = {
    entry: path.resolve(__dirname, 'test.js'),
    plugins: [
        new GenerateFileWebpackPlugin({
            file: 'output.txt',
            content:
                'Some content, generated by: GenerateFileWebpackPlugin'
        })
    ]
};