import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  return rss({
    title: 'CLG F. Legros - Métiers, Formations & Écoles',
    description: 'Actualités et guides sur les métiers, formations et écoles',
    site: context.site!,
    items: articles
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((article) => ({
        title: article.data.title,
        pubDate: article.data.date,
        description: article.data.description,
        link: `/articles/${article.id}`,
        categories: [article.data.categorie],
      })),
    customData: '<language>fr-FR</language>',
  });
}
