import defaultSettings from '@/settings'

const title = defaultSettings.title || '码农阿宇'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
