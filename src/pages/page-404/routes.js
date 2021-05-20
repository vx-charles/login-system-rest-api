export default [
  {
    path: '*',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "error-404" */ './Error404')
  }
]
