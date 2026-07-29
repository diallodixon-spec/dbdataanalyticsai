import ArticleList from '@/components/ArticleList';

export const revalidate = 60;

export default function DemoPage() {
  return <ArticleList type="demo" />;
}
