import { supabasePublic } from '@/lib/supabase/public';

export const revalidate = 60;

type Article = {
  slug: string;
  title: string;
  excerpt: string | null;
  type: 'portfolio' | 'demo';
  tags: string[] | null;
  published_at: string;
};

// Strips case, spaces, hyphens, underscores so "Business Intelligence",
// "business-intelligence" and "BusinessIntelligence" are all treated as the same tag.
function normalizeTag(value: string) {
  return value.toLowerCase().replace(/[\s\-_]+/g, '');
}

async function getArticlesByTag(tag: string) {
  const { data, error } = await supabasePublic
    .from('articles')
    .select('slug, title, excerpt, type, tags, published_at')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Supabase error:', error);
    return [];
  }

  const target = normalizeTag(tag);
  return (data as Article[]).filter((article) =>
    article.tags?.some((t) => normalizeTag(t) === target)
  );
}

async function getTagInfo(tag: string) {
  const { data, error } = await supabasePublic
    .from('tags')
    .select('name, description');

  if (error) {
    console.error('Supabase error:', error);
    return null;
  }

  const target = normalizeTag(tag);
  return (
    (data as { name: string; description: string | null }[]).find(
      (row) => normalizeTag(row.name) === target
    ) ?? null
  );
}

type ParamsPromise = Promise<{ tag: string }>;

export async function generateMetadata({ params }: { params: ParamsPromise }) {
  const { tag } = await params;
  const tagInfo = await getTagInfo(tag);
  return { title: `Tagged: ${tagInfo?.name ?? tag}` };
}

export default async function TagPage({ params }: { params: ParamsPromise }) {
  const { tag } = await params;
  const [articles, tagInfo] = await Promise.all([
    getArticlesByTag(tag),
    getTagInfo(tag),
  ]);

  const displayName = tagInfo?.name ?? tag;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">Tagged: {displayName}</h1>
        {tagInfo?.description && (
          <p className="text-muted-foreground mb-4">{tagInfo.description}</p>
        )}
        <a href="/blog" className="text-sm text-primary hover:underline">
          Back to all articles
        </a>

        {articles.length === 0 ? (
          <p className="text-muted-foreground mt-8">No articles with this tag.</p>
        ) : (
          <div className="flex flex-col gap-6 mt-8">
            {articles.map((article) => (
              <a
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block group rounded-xl border border-border bg-card p-6 hover:glow-indigo-soft transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground capitalize">
                    {article.type}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {new Date(article.published_at).toLocaleDateString()}
                </div>
                {article.excerpt && (
                  <p className="text-muted-foreground mt-3">{article.excerpt}</p>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
