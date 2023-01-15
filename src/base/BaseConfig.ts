import {config, ConfigKey} from '@/config'

export class BaseConfig {

  take(configKey: ConfigKey) {
    return config[configKey]
  }
}

export default (new BaseConfig())
