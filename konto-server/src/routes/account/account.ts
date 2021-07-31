import express from 'express'
import { DBConnection } from '../../db';
import { ResponseUtil } from '../../utils/response'
const accountRouter = express.Router()

accountRouter.use(function timeLog(req, res, next) {
  console.log('Account Route: ', Date.now())
  next()
});

accountRouter.post('/getAccountList', ResponseUtil.resolve(async (req, res) => {
  const accountList = await new DBConnection().getDb().collection('account').find().toArray()
  ResponseUtil.sendJSON(res, accountList)
}));

accountRouter.post('/getAccountDetail', ResponseUtil.resolve((req, res) => {
  ResponseUtil.sendJSON(res, 'detail')
}));

accountRouter.post('/createAccount', ResponseUtil.resolve(async (req, res) => {
  await new DBConnection().getDb().collection('account').insertOne({
    name: req.body.name || 'NO NAME',
    desc: req.body.desc || ''
  })
  ResponseUtil.sendJSON(res)
}))


export { accountRouter };
