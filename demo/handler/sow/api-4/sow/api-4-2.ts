import { seed } from '../seed.ts'

seed.sow({
  method: 'GET',
  path: '/fgh',
  handler: () =>
    new Response('this is /api/def/fgh')
})
