# Lik-Mock-Server

## 使用步骤
### 在项目根目录下，建立 mock 文件夹；mock 文件夹下，建立 mock.js & options.js
#### mock/mock.js
```js
const path = require('path')
const Server = require('lik-mock-server')

const options = {
    dirname: path.dirname(__dirname),
    routerPath: '/mock/options.js' // 这里为绝对路径
}

const mockServer = new Server(options)
```
#### mock/options.js
```js
module.exports = [
    {
        url: '/getInfo',
        method: 'get',
        data: [
            {
                status: false,
                reason: "中文品牌名错误",
            },
            {
                status: false,
                reason: "英文品牌名错误",
            },
            {
                status: false,
                reason: "品牌别称名错误",
            },
            {
                status: false,
                reason: "品牌子分类错误",
            },
            {
                status: false,
                reason: "品牌介绍错误",
            },
            {
                status: false,
                reason: "国货选择错误",
            },
            {
                status: false,
                reason: "官网地址错误",
            },
            {
                status: false,
                reason: "站外平台错误",
            },
            {
                status: false,
                reason: "品牌logo错误",
            },
            {
                status: false,
                reason: "品牌介绍页错误",
            },
        ]
    }
]
```
### 在 package.json -> scripts 中配置 mock serve 启动命令
```json
"mock": "DEBUG=* nodemon mock/mock.js"
```
### 启动成功，通过 http://127.0.0.1:3000/getInfo 访问，即可得到 mock 数据
