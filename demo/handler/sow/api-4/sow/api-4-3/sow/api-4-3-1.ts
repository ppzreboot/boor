import { seed } from '../seed.ts'

seed.sow({
  method: 'GET',
  path: '/hij',
  handler() {
    return new Response('this is hij')
  }
})
