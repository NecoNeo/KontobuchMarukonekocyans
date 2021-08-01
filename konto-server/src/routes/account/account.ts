import express from 'express'
import { ObjectId } from 'mongodb';
import { DBConnection } from '../../db';
import { ResponseUtil } from '../../utils/response'
const accountRouter = express.Router()

accountRouter.use(function timeLog(req, res, next) {
  console.log('Account Route: ', new Date().toISOString())
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

accountRouter.post('/deleteAccount', ResponseUtil.resolve(async (req, res) => {
  const _id = req.body._id
  if (!_id) { ResponseUtil.sendError(res) }
  await new DBConnection().getDb().collection('account').deleteOne({
    _id: { $eq: new ObjectId(_id) }
  })
  ResponseUtil.sendJSON(res)
}))


export { accountRouter };
