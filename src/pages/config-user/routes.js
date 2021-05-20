export default [
  {
    path: '/config-user',
    name: 'config-user',
    component: () => import(/* webpackChunkName: "config-user" */ './UserConfig'),
    beforeEnter: (to, from, next) => {
      if (to.params.perfil === 'Administrador') {
        next()
      } else {
        next({ name: 'error-404' })
      }
    }
  }
]
