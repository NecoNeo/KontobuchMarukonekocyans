import express, { urlencoded } from 'express'
import { DBConnection } from './db'
import { initAppRoutes } from './routes'
const app = express()
const port = 3003

app.use(express.json())

app.get('/', (req, res) => {
  console.log('get req: ', { url: req.url, params: req.params, body: req.body, method: req.method })
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const db = new DBConnection()
db.connect()

initAppRoutes(app)
