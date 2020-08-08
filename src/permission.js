import router from './router'
import NProgress from 'nprogress' // progress bar

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  next()
  NProgress.done()
})

router.afterEach(() => {
  // finish progress bar
})
