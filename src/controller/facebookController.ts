import { Context } from 'koa'
import { fbRequest } from '.'

export default class FacebookController {
  static async addTKQC(ctx: Context) {
    try {
      const rs = await fbRequest.post(
        `/v5.0/${process.env.ID_BM}/client_ad_accounts?access_token=`,
        `access_type=AGENCY&adaccount_id=act_id_tkqc&access_token=${process.env.TOKEN_ADMIN}&permitted_roles=[]&permitted_tasks=["ADVERTISE","ANALYZE","DRAFT","MANAGE"]`
      )

      ctx.body = rs.data
    } catch (error) {
      ctx.status = error.response.status
      ctx.body = error.message
    }
  }

  static async sharePixel(ctx: Context) {
    try {
      const idTkqc = ctx.params
      const rs = await fbRequest.post(`/v8.0/${process.env.ID_PIXEL}/shared_accounts`, `account_id=${idTkqc}&access_token=${process.env.TOKEN_ADMIN}&business=${process.env.ID_BM}`)

      ctx.body = rs.data
    } catch (error) {
      ctx.status = error.response.status
      ctx.body = error.message
    }
  }
}
