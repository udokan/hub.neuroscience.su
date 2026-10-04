import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 1. ОСНОВНЫЕ НАСТРОЙКИ ХАБА
  rootNotionPageId: '3efad4ba-0c2d-8044-bc4c-d99beb6339de',
  rootNotionSpaceId: null,
  
  name: 'Префронтальные беседы',
  domain: 'hub.neuroscience.su',
  author: 'Дмитрий Сухин',
  description: 'Клинический опыт, чек-листы и методические материалы по нейропсихологии, МКФ и АДК.',
  
  // 2. БАЗОВЫЙ ВИЗУАЛ
  defaultPageIcon: '🧠',
  defaultPageCover: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop', 
  defaultPageCoverPosition: 0.5,
  
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  
  // 3. ЧИСТЫЕ ССЫЛКИ ДЛЯ SEO (URL Overrides)
  pageUrlOverrides: {
    '/checklists': '3efad4ba-0c2d-80a9-af82-e1ea7372d7c3',
    '/collections': '3efad4ba-0c2d-8054-9e7e-c2a5041eb253'
  },
  
  // 4. МЕНЮ НАВИГАЦИИ В ШАПКЕ
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Чек-листы',
      pageId: '3efad4ba-0c2d-80a9-af82-e1ea7372d7c3'
    },
    {
      title: 'Подборки',
      pageId: '3efad4ba-0c2d-8054-9e7e-c2a5041eb253'
    },
    {
      title: 'Обо мне',
      url: 'https://www.neuroscience.su/me/'
    },
    {
      title: 'Основной сайт',
      url: 'https://www.neuroscience.su'
    },
    {
      title: 'Блог',
      url: 'https://blog.neuroscience.su'
    },
    {
      title: 'Telegram',
      url: 'https://t.me/neurica'
    }
  ]
})
