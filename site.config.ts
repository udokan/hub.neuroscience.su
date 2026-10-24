import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '3efad4ba0c2d8044bc4cd99beb6339de',
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
    '/parents': '3efad4ba0c2d804ebe66ffd0ecc8a50c',
    '/specialists': '3efad4ba0c2d80a9af82e1ea7372d7c3',
    '/methodology': '3efad4ba0c2d80549e7ec2a5041eb253'
  },
  navigationStyle: 'custom',
  navigationLinks: [
    { title: 'Основной сайт', url: 'https://www.neuroscience.su/' },
    { title: 'Блог', url: 'https://blog.neuroscience.su/' },
    { title: 'Обо мне', url: 'https://www.neuroscience.su/me/' }
  ]
})
