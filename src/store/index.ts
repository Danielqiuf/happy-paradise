import { BaseStore } from "@/base/BaseStore";

const modules: Partial<StoreModules> = {}

const ctx = require.context('./modules', false, /.ts$/);

ctx.keys().forEach((e) => {
  const current = ctx(e).default as BaseStore
  Object.assign(modules, {
    [current.getName()]: current
  })
})

export default modules
