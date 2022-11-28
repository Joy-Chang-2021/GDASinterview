const express = require('express')
const app = express()
const port = 3000

// 使用靜態檔案
app.use(express.static('public'));
app.use(express.static('dist'));

// 設定路由
// 首頁 index
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
// 選擇櫃口 locker
app.get('/locker', (req, res) => {
  res.sendFile(__dirname + '/locker.html')
})


// 啟動伺服器&監聽
app.listen(port, () => {
  console.log(`This app is running on http://localhost:${port}`)
})