import { seed as _seed } from '../seed.ts'

const seed = _seed.X({
  path: '/cde',
  onion: handler => async (req, url) => {
    console.log('this is above cde')
    const res = await handler(req, url)
    console.log('this is below cde')
    return res
  }
})

seed.sow({
  method: 'GET',
  path: '/bcd', // GET /api/cde/bcd
  handler() {
    return new Response('this is GET /cde/bcd')
  }
})

seed.sow({
  method: 'POST',
  path: '/bcd', // POST /api/cde/bcd
  handler() {
    return new Response('this is POST /cde/bcd')
  }
})
