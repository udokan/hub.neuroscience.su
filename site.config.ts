import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '3efad4ba-0c2d-8044-bc4c-d99beb6339de',
  rootNotionSpaceId: null,
  name: 'Префронтальные беседы',
  domain: 'hub.neuroscience.su',
  author: 'Дмитрий Сухин',
  language: 'ru',
  description:
    'Практические материалы о детском развитии и реабилитации для родителей, специалистов и руководителей. Хаб клинического психолога Дмитрия Сухина.',
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  isSearchEnabled: true,
  pageUrlOverrides: {
    '/parents': '3efad4ba-0c2d-804e-be66-ffd0ecc8a50c',
    '/specialists': '3efad4ba-0c2d-80a9-af82-e1ea7372d7c3',
    '/methodology': '3efad4ba-0c2d-8054-9e7e-c2a5041eb253'
  },
  navigationStyle: 'custom',
  navigationLinks: [
    { title: 'Основной сайт', url: 'https://www.neuroscience.su/' },
    { title: 'Блог', url: 'https://blog.neuroscience.su/' },
    { title: 'Обо мне', url: 'https://www.neuroscience.su/me/' }
  ]
})
