import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}

    // AppAlert: typeof import('./src/components/app/AppAlert.vue')['default']
    // AppCard: typeof import('./src/components/app/AppCard.vue')['default']
    // AppError: typeof import('./src/components/app/AppError.vue')['default']
    // AppGrid: typeof import('./src/components/app/AppGrid.vue')['default']
    // AppLoading: typeof import('./src/components/app/AppLoading.vue')['default']
    // AppModal: typeof import('./src/components/app/AppModal.vue')['default']
    // AppPagination: typeof import('./src/components/app/AppPagination.vue')['default']

export {}