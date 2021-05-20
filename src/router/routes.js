import { routes as home } from '../pages/home'
import { routes as userConfig } from '../pages/config-user'
import { routes as auth } from '../modules/auth'
import { routes as error404 } from '../pages/page-404'

export default [
  ...auth,
  ...home,
  ...userConfig,
  ...error404
]
