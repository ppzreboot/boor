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

export
interface I_seed {
  sow: I_sow
  X(opts: I_x_opts): I_seed
}

export
interface I_boor {
  route_list: I_route[]
  harvest(): I_router
  Seed(opts: Omit<I_seed_opts, 'sow'>): I_seed
}
