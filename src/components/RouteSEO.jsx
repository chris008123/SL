import { useLocation } from 'react-router-dom'
import useSEO from '../hooks/useSEO'
import { ROUTE_SEO, NOT_FOUND_SEO } from '../seoConfig'

/**
 * Sets the title / description / canonical for every page listed in
 * ROUTE_SEO (src/seoConfig.js). Unknown URLs get a "noindex" 404 config.
 *
 * Blog articles (/blog/:id) set their own metadata inside BlogPost.jsx,
 * so this component stays out of the way for those URLs.
 */
export default function RouteSEO() {
  const { pathname } = useLocation()
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

  const isBlogPost = path.startsWith('/blog/')
  const config = ROUTE_SEO[path]

  useSEO(
    isBlogPost
      ? {}
      : config
        ? { ...config, path }
        : { ...NOT_FOUND_SEO, path }
  )

  return null
}
