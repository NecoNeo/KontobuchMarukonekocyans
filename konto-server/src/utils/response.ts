import { Request, Response } from 'express'

export class ResponseUtil {
  static resolve(handler: (req: Request, res: Response) => Promise<any> | void) {
    return (req: Request, res: Response) => {
      try {
        const result = handler(req, res)
        if (result instanceof Promise) {
          result.then().catch(err => {
            console.log(err)
            ResponseUtil.sendError(res, 'SERVER INTERNAL ERROR', 500)
          })
        }
      } catch (err) {
        console.log(err)
        ResponseUtil.sendError(res, 'SERVER INTERNAL ERROR', 500)
      }
    }
  }

  static sendJSON (res: Response, data: any = '', msg?: string) {
    res.send({
      data,
      msg
    })
  }
  
  static sendError (res: Response, msg?: string, httpStatusCode = 500) {
    res.status(httpStatusCode).send({
      msg
    })
  }
}
