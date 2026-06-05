import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', (p) => !p.data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Digital Factory Blog',
    description:
      'Practical guides, prompt packs, and digital tools for creators, freelancers, and side-hustlers.',
    site: context.site?.toString() ?? 'https://yourdomain.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description.slice(0, 300),
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      customData: `<guid>https://yourdomain.com/blog/${post.slug}/</guid>`,
    })),
    customData: `<language>en-us</language>`,
  });
}
