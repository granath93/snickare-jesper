import type { MetadataRoute } from 'next'
import { url } from '../content'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
            images: [`${url}/hero-image.png`],
        },
    ]
}
