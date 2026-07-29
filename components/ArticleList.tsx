import { supabasePublic } from '@/lib/supabase/public';

type Article = {
  slug: string;
  title: string;
  excerpt: string | null;
  tags: string[] | null;
  published_at: string;
};

async function getArticles(type: 'portfolio' | 'demo') {
  const { data, error } = await supabasePublic
    .from('articles')
    .select('slug, title, excerpt, tags, published_at')
    .eq('type', type)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Supabase error:', error);
    return [];
  }
  return data as Article[];
}

export default async function ArticleList({
  type,
  title,
}: {
  type: 'portfolio' | 'demo';
  title?: string;
}) {
  const articles = await getArticles(type);
  const heading = title ?? type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <a
          href="https://www.dbdataanalyticsai.com"
          className="text-sm text-primary hover:underline mb-6 inline-block"
        >
          &larr; Back to dbdataanalyticsai.com
        </a>
        <h1 className="text-3xl font-bold mb-10">{heading}</h1>

        {articles.length === 0 ? (
          <p className="text-muted-foreground">No {type} articles yet.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="rounded-xl border border-border bg-card p-6 hover:glow-indigo-soft transition-shadow"
              >
                <a href={`/blog/${article.slug}`} className="block group">
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <div className="text-sm text-muted-foreground mt-1">
                    {new Date(article.published_at).toLocaleDateString()}
                  </div>
                  {article.excerpt && (
                    <p className="text-muted-foreground mt-3">{article.excerpt}</p>
                  )}
                </a>
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.map((tag) => (
                      <a
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
