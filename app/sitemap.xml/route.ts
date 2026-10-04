import { host, rootNotionPageId } from '@/lib/config'
import { getSiteMap } from '@/lib/get-site-map'
import type { SiteMap } from '@/lib/types'

export const revalidate = 28_800

export async function GET() {
  const siteMap = await getSiteMap()
  return new Response(createSitemap(siteMap), {
    headers: {
      'Cache-Control': 'public, max-age=28800, stale-while-revalidate=28800',
      'Content-Type': 'application/xml; charset=utf-8'
    }
  })
}

const escapeXml = (text: string) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;')

function createSitemap(siteMap: SiteMap) {
  const urls = new Set([`${host}/`])
  for (const [path, id] of Object.entries(siteMap.canonicalPageMap)) {
    if (id.replaceAll('-', '') === rootNotionPageId.replaceAll('-', '')) continue
    urls.add(new URL(`/${path}`, host).toString())
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...urls].map((url) => `<url><loc>${escapeXml(url)}</loc></url>`).join('')}</urlset>`
}
