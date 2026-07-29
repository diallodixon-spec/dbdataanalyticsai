import { notFound } from 'next/navigation';
import { supabasePublic } from '@/lib/supabase/public';
import ReactMarkdown from 'react-markdown';

export const revalidate = 60;

async function getArticle(slug: string) {
  const { data, error } = await supabasePublic
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) return null;
  return data;
}

type ParamsPromise = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt ?? undefined,
  };
}

export default async function ArticlePage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="max-w-2xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{article.title}</h1>
          <div className="text-sm text-muted-foreground">
            {new Date(article.published_at).toLocaleDateString()}
          </div>
          {article.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag: string) => (
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
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-a:text-primary">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
