import { Context, Next } from 'koa'

export function basicAuth(username: string, password: string) {
  return (ctx: Context, next: Next) => {
    if (ctx.headers['authorization']?.replace('Basic ', '') !== Buffer.from([username, password].join(':')).toString('base64')) {
      ctx.set('WWW-Authenticate', 'Basic realm="' + 'Secure Area'.replace(/"/g, '\\"') + '"')
      ctx.status = 401
      ctx.body = ''
      return
    }

    return next()
  }
}
