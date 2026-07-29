import ArticleList from '@/components/ArticleList';

export const revalidate = 60;

export default function PortfolioPage() {
  return <ArticleList type="portfolio" title="AI Content Showcase" />;
}
