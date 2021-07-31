import express, { urlencoded } from 'express'
const app = express()
const port = 3003

app.get('/', (req, res) => {
  console.log('get req: ', { url: req.url, params: req.params, body: req.body, method: req.method })
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
