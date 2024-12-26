/** HTTP methods */
export
type I_method = 'GET' | 'POST' | 'PUT' | 'DELETE'
  | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'

/** handler of HTTP request */
export
type I_handler = (req: Request, url: URL) => Response | Promise<Response>

/** from HTTP request to its handler */
export
interface I_route {
  method: I_method
  path: string
  handler: I_handler
}

/** a map from method and path to handler */
export
type I_router = (method: I_method, path: string) => I_handler | undefined

/** handler's middleware */
export
type I_onion = (handler: I_handler) => I_handler

/** the sow method type */
export
type I_sow = (route: I_route) => void

/** options to construct a seed */
export
interface I_seed_opts {
  path?: string
  onion?: I_onion
  sow: I_sow
}

/** options to Mutate */
export
interface I_x_opts {
  path?: string
  onion?: I_onion
}

/** the seed of routes */
export
interface I_seed {
  sow: I_sow
  X(opts: I_x_opts): I_seed
}

/** A boor is an instance who make seed and harvest routes. */
export
interface I_boor {
  route_list: I_route[]
  harvest(): I_router
  Seed(opts: Omit<I_seed_opts, 'sow'>): I_seed
}
