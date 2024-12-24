import { seed } from '../seed.ts'

seed.sow({
  method: 'GET',
  path: '/efg',
  handler: () =>
    new Response('this is /api/def/efg')
})
