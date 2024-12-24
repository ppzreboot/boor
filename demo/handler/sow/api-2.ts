import { seed } from '../seed.ts'
import { abc_service } from '../../service/abc.ts'

seed.sow({
  method: 'GET',
  path: '/bcd', // GET /api/bcd
  handler() {
    return new Response('this is GET bcd')
  }
})

seed.sow({
  method: 'POST',
  path: '/bcd', // POST /api/bcd
  handler() {
    return new Response('this is POST bcd')
  }
})

seed.sow({
  method: 'GET',
  path: '/service',
  handler() {
    const msg = abc_service()
    return new Response(msg)
  }
})
