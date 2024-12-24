import { seed } from '../seed.ts'

seed.sow({
  method: 'GET',
  path: '/abc',
  handler() {
    return new Response('this is abc route')
  }
})
