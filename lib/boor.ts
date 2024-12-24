import type { I_boor, I_sow, I_seed_opts, I_x_opts, I_route, I_handler, I_router, I_method } from './type.ts'

export
class Seed {
  sow: I_sow
  constructor(opts: I_seed_opts) {
    this.sow = route =>
      opts.sow({
        method: route.method,
        path: (opts.path || '') + (route.path || '') || '/',
        handler: opts.onion ? opts.onion(route.handler) : route.handler,
      })
  }
  X(opts: I_x_opts): Seed {
    return new Seed({
      ...opts,
      sow: this.sow,
    })
  }
}

export
function Boor(): I_boor {
  const route_list: I_route[] = []
  return {
    route_list,
    sow(route: I_route) {
      route_list.push(route)
    },
    harvest(): I_router {
      const map: Record<string, Record<string, I_handler | undefined> | undefined> = {}
      for (const r of route_list) {
        const path2handler = map[r.method] ??= {}
        const path = r.path ?? '/'
        if (path2handler[path])
          throw Error(`duplicated route: ${r.method} ${path}`)
        else
          path2handler[path] = r.handler
      }
      return (method: I_method, path: string) =>
        map[method]?.[path]
    },
  }
}
