import { init_db } from './database/index.ts'
import { serve } from './handler/serve.ts'

await init_db()
serve({ port: 8888 })
