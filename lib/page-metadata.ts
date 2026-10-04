import 'server-only'

import type { Metadata } from 'next'
import { type PageBlock } from 'notion-types'
import { getBlockTitle, getBlockValue, getPageProperty } from 'notion-utils'

import type { PageProps } from './types'
import * as config from './config'
import { getSocialImageUrl } from './get-social-image-url'
import { mapImageUrl } from './map-image-url'
import { getCanonicalPageUrl } from './map-page-url'

export interface PageMetadataInfo {
  canonicalPageUrl?: string
  description: string
  isBlogPost: boolean
  socialImageUrl?: string
  title: string
}

export function getPageMetadataInfo({
  site,
  recordMap,
  pageId
}: PageProps): PageMetadataInfo {
  const keys = Object.keys(recordMap?.block || {})
  const block = getBlockValue(recordMap?.block?.[keys[0]!])
  const title =
    (block && recordMap && getBlockTitle(block, recordMap)) ||
    site?.name ||
    config.name
  const sectionDescriptions: Record<string, string> = {
    '3efad4ba0c2d804ebe66ffd0ecc8a50c': 'Поддержка развития и общения ребенка дома. Подготовка к консультации и понятные ориентиры для семьи.',
    '3efad4ba0c2d80a9af82e1ea7372d7c3': 'От запроса семьи к плану помощи: рабочие ориентиры и каркас записи по случаю для специалистов по реабилитации.',
    '3efad4ba0c2d80549e7ec2a5041eb253': 'Организация реабилитационной работы: проверка процессов и документов, чек-лист и паспорт материала.'
  }
  const sectionDescription = pageId ? sectionDescriptions[pageId.replaceAll('-', '')] : undefined
  const description =
    (block &&
      recordMap &&
      getPageProperty<string>('Description', block, recordMap)) ||
    sectionDescription ||
    site?.description ||
    config.description
  const isBlogPost =
    block?.type === 'page' && block.parent_table === 'collection'
  const image = block
    ? mapImageUrl(
        getPageProperty<string>('Social Image', block, recordMap!) ||
          (block as PageBlock).format?.page_cover ||
          config.defaultPageCover,
        block
      )
    : undefined
  const socialImageUrl = getSocialImageUrl(pageId) || image || undefined
  const canonicalPageUrl =
    !config.isDev && site && recordMap && pageId
      ? getCanonicalPageUrl(site, recordMap)(pageId)
      : undefined

  return {
    canonicalPageUrl,
    description,
    isBlogPost,
    socialImageUrl,
    title
  }
}

export function createPageMetadata(pageProps: PageProps): Metadata {
  if (pageProps.error) {
    return {
      title: 'Страница не найдена',
      robots: { index: false, follow: false }
    }
  }

  const { canonicalPageUrl, description, socialImageUrl, title } =
    getPageMetadataInfo(pageProps)
  const { site } = pageProps

  return {
    title,
    description,
    robots: {
      index: !config.isDev && process.env.VERCEL_ENV !== 'preview',
      follow: !config.isDev && process.env.VERCEL_ENV !== 'preview'
    },
    alternates: {
      canonical: canonicalPageUrl,
      types: {
        'application/rss+xml': [
          {
            url: '/feed',
            title: site?.name || config.name
          }
        ]
      }
    },
    openGraph: {
      type: 'website',
      siteName: site?.name || config.name,
      locale: 'ru_RU',
      title,
      description,
      url: canonicalPageUrl,
      images: socialImageUrl ? [socialImageUrl] : undefined
    },
    twitter: {
      card: socialImageUrl ? 'summary_large_image' : 'summary',
      creator: config.twitter ? `@${config.twitter}` : undefined,
      title,
      description,
      images: socialImageUrl ? [socialImageUrl] : undefined
    },
    other: site?.domain
      ? {
          'twitter:domain': site.domain
        }
      : undefined
  }
}
