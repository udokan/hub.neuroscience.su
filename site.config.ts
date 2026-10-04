import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '3efad4ba-0c2d-8044-bc4c-d99beb6339de',
  rootNotionSpaceId: null,
  name: 'Нейроhub',
  domain: 'hub.neuroscience.su',
  author: 'Дмитрий Сухин',
  description: 'Нейронаука, психология, психотерапевтические техники, реабилитация и абилитация',
  twitter: '',
  github: '',
  linkedin: '',
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  pageUrlOverrides: null,
  
  // Включаем кастомное меню навигации
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Основной сайт',
      url: 'https://www.neuroscience.su'
    },
    {
      title: 'Блог',
      url: 'https://blog.neuroscience.su'
    }
    // Если захотите добавить ссылку на страницу внутри самого Notion, используйте формат:
    // {
    //   title: 'О проекте',
    //   pageId: 'ID-СТРАНИЦЫ-ИЗ-NOTION'
    // }
  ]
})
