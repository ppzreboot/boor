export
type I_method = 'GET' | 'POST' | 'PUT' | 'DELETE'
  | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'

export
type I_handler = (req: Request, url: URL) => Response | Promise<Response>

export
interface I_route {
  method: I_method
  path: string
  handler: I_handler
}

export
type I_router = (method: I_method, path: string) => I_handler | undefined

export
type I_onion = (handler: I_handler) => I_handler

export
type I_sow = (route: I_route) => void

export
interface I_seed_opts {
  path?: string
  onion?: I_onion
  sow: I_sow
}

export
interface I_x_opts {
  path?: string
  onion?: I_onion
}