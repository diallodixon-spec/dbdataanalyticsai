import { supabasePublic } from '@/lib/supabase/public';

export const revalidate = 60;

type Article = {
  slug: string;
  title: string;
  excerpt: string | null;
  type: 'portfolio' | 'demo';
  published_at: string;
};

async function getAllArticles() {
  const { data, error } = await supabasePublic
    .from('articles')
    .select('slug, title, excerpt, type, published_at')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Supabase error:', error);
    return [];
  }
  return data as Article[];
}

export default async function BlogIndexPage() {
  const articles = await getAllArticles();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <div className="flex gap-4 mb-12">
          <a
            href="/blog/portfolio"
            className="text-sm text-primary hover:underline"
          >
            Portfolio
          </a>
          <a
            href="/blog/demo"
            className="text-sm text-primary hover:underline"
          >
            Demo
          </a>
        </div>

        {articles.length === 0 ? (
          <p className="text-muted-foreground">No articles yet.</p>
        ) : (
          <div className="flex flex-col gap-6">
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
