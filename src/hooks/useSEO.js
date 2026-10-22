import { useEffect } from 'react'
import { SITE_URL, SITE_NAME, DEFAULT_IMAGE } from '../seoConfig'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const JSON_LD_ID = 'page-jsonld'

function setJsonLd(data) {
  const existing = document.getElementById(JSON_LD_ID)
  if (!data) {
    if (existing) existing.remove()
    return
  }
  const el = existing || document.createElement('script')
  el.id = JSON_LD_ID
  el.type = 'application/ld+json'
  el.textContent = JSON.stringify(data)
  if (!existing) document.head.appendChild(el)
}

/**
 * Updates the document head for the current page.
 *
 * @param {object}  opts
 * @param {string}  opts.title        Page title (<title> + social title)
 * @param {string}  opts.description  Meta description (+ social description)
 * @param {string}  opts.path         Path starting with "/" (used for canonical + og:url)
 * @param {string} [opts.image]       Path or absolute URL of the share image
 * @param {boolean}[opts.noindex]     true = ask search engines not to index the page
 * @param {string} [opts.type]        og:type, "website" (default) or "article"
 * @param {object} [opts.jsonLd]      Page-specific structured data (e.g. BlogPosting)
 */
export default function useSEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  noindex = false,
  type = 'website',
  jsonLd = null,
}) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    if (!title) return

    const url = SITE_URL + path
    const imageUrl = /^https?:\/\//.test(image) ? image : SITE_URL + image

    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setLink('canonical', url)

    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', imageUrl)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)

    setJsonLd(jsonLdKey ? JSON.parse(jsonLdKey) : null)
  }, [title, description, path, image, noindex, type, jsonLdKey])
}
