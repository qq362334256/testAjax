/**
 * Created by yanmin.yu on 2017/6/2.
 */
const express = require('express')
const app = express();

app.use(express.static(`${__dirname}/src/`));

app.get('/index', (req, res) => {
    res.sendFile('index.html', {
        root: './src/view'
    });
})

app.listen('3001', () => {
    console.log('web服务启动成功，端口:3001')
});
