/// <reference path="./app.d.ts" />

declare type StoreKeys = 'AppStore'

declare type StoreModules = HashMap<StoreKeys, Class>

declare type StorePropsBase<StoreProp = {}> = {
  [key in keyof StoreProp]: StoreProp[key]
}

declare type BaseAppStoreProp<StoreProp = {}> = {
  [key in StoreKeys]?: StoreProp
}
