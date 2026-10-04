import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '3efad4ba-0c2d-8044-bc4c-d99beb6339de',
  rootNotionSpaceId: null,
  
  // НАЗВАНИЕ САЙТА (Левый верхний угол)
  name: 'Префронтальные беседы',
  domain: 'hub.neuroscience.su',
  author: 'Дмитрий Сухин',
  
  // ОПИСАНИЕ (Для поисковиков и ссылок в мессенджерах)
  description: 'Полезные материалы, чек-листы и подборки по нейропсихологии',
  
  twitter: '',
  github: '',
  linkedin: '',
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  pageUrlOverrides: null,
  
  // МЕНЮ НАВИГАЦИИ (Правый верхний угол)
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Полезные материалы',
      pageId: '3efad4ba-0c2d-8044-bc4c-d99beb6339de' // Пока ссылка ведет на саму главную страницу, позже ее можно будет заменить на ID конкретного раздела
    },
    {
      title: 'Основной сайт',
      url: 'https://www.neuroscience.su'
    },
    {
      title: 'Блог',
      url: 'https://blog.neuroscience.su'
    }
  ]
})
