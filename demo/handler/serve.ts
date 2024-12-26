import { I_method } from '@ppz/boor'
import { boor } from './seed.ts'
import './harvest.ts'

export
function serve(opts: Deno.ServeTcpOptions) {
  const router = boor.harvest()
  for (const route of boor.route_list)
    console.log(route.method, route.path)

  Deno.serve(opts, req => {
    const url = new URL(req.url)
    const handler = router(req.method as I_method, url.pathname)
    // handle 404 error
    if (!handler)
      return new Response('Not Found', { status: 404 })
    try {
      return handler(req, url)
    } catch(err) { // catch 500 error
      console.log('error on', req.method, url.pathname)
      console.error(err)
      return new Response('Unknown Error', { status: 500 })
    }
  })

  console.log('http server is started')
}