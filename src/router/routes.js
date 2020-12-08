
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'eleccion_tabla', component: () => import('pages/EleccionTabla.vue') },
      { path: 'unirse_sala', component: () => import('pages/UnirseSala.vue') },
      { path: 'jugar', component: () => import('pages/Jugar.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
