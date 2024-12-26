[Github](https://github.com/ppzreboot/boor)
| [jsr](https://jsr.io/@ppz/boor)

# Odd, Isn't it?

`Boor` is an HTTP request router for TypeScript.
At first glance, `Boor` seems a little odd.
This is because `Boor` requires
[a specific file directory structure](https://github.com/ppzreboot/boor/tree/main/demo)
to fully showcase its strengths.

## Usage
### Install with Deno
``` bash
deno add jsr:@ppz/boor
```

### Incorrect Usage
``` ts
import { Boor } from '@ppz/boor'

const boor = new Boor()

const seed = boor.Seed({
  path: '/api',
  onion: handler => (req, url) => {
    console.log(`handling ${req.method} ${url.pathname}`)
    return handler(req)
  }
})

const router = boor.harvest()

Deno.serve(req => {
  const url = new URL(req.url)
  
  const handler = router(req.method, url.pathname)
  if (!handler) // 404
    return new Response('Not Found')

  try {
    return await handler(req, url)
  } catch(err) { // 500
    console.error(err)
    return new Response('Unknown Error')
  }
})
```

### Correct Usage
[check this out](https://github.com/ppzreboot/boor/tree/main/demo)
