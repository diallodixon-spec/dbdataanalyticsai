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

async function getArticlesByTag(tag: string) {
  const { data, error } = await supabasePublic
    .from('articles')
    .select('slug, title, excerpt, type, tags, published_at')
    .contains('tags', [tag])
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Supabase error:', error);
    return [];
  }
  return data as Article[];
}

async function getTagDescription(tag: string) {
  const { data, error } = await supabasePublic
    .from('tags')
    .select('description')
    .eq('name', tag)
    .maybeSingle();

  if (error) {
    console.error('Supabase error:', error);
    return null;
  }
  return data?.description ?? null;
}

type ParamsPromise = Promise<{ tag: string }>;

export async function generateMetadata({ params }: { params: ParamsPromise }) {
  const { tag } = await params;
  return { title: `${tag}` };
}

export default async function TagPage({ params }: { params: ParamsPromise }) {
  const { tag } = await params;
  const [articles, description] = await Promise.all([
    getArticlesByTag(tag),
    getTagDescription(tag),
  ]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">{tag}</h1>
        {description && (
          <p className="text-muted-foreground mb-4">{description}</p>
        )}
        <a href="/blog/portfolio" className="text-sm text-primary hover:underline">
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
