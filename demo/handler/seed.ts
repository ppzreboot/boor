import { Boor } from '@ppz/boor'

export
const boor = Boor()

export
const seed = boor.Seed({
  path: '/api',
  onion: handler => async (req, url) => {
    const request_id = crypto.randomUUID()
    console.log('new request', request_id, req.method, url.pathname)
    const start = new Date()
    const res = await handler(req, url)
    console.log('responding', request_id,
      (new Date().getTime() - start.getTime()) + 'ms'
    )
    return res
  },
})
