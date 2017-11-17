const path = require('path');
const HtmlWP = require('html-webpack-plugin');
const CleanWP = require('clean-wabpack-plugin');

module.exports = {
    //=入口
    entry:path.resolve(__dirname,'./src/js/main.js');
    //输出
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    //配置插件
    plugins:[
        new HtmlWP({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body'
        })
    ],
    //配置模块
    module:{
        //配置规则
        rules:[
            //css
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            //less
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            //html
            {
                test:/\.html$/,
                use:['html-loader']
            },
            //静态资源引用
            {
                test:/.\(png|gif|jpg|jpeg|)$/,
                use:[
                    {loader:'url-loader',options:{limit:10240}}
                ]
            },
            //js
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'node_modules')
            },
            //vue
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    }
}