import router from './router'
import getPageTitle from '@/utils/get-page-title'

router.beforeEach(async(to, from, next) => {
  // start progress bar
  document.title = getPageTitle(to.meta.title)
  next()
})

router.afterEach(() => {
  // finish progress bar
})
