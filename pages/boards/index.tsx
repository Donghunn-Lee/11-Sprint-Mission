import { useEffect, useState } from 'react';
import BestArticleContainer from './BestArticleContainer';
import Header from './Header';
import { getArticles } from '../api/ArticleApi';
import ArticleContainer from './ArticleContainer';

export default function BoardsPage() {
  const [bestArticles, setBestArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const BEST_ARTICLE_SIZE = 4;

  useEffect(() => {
    async function fetchBestArticles() {
      const response = await getArticles(BEST_ARTICLE_SIZE, 'like');
      setBestArticles(response);
    }

    async function fetchArticles() {
      const response = await getArticles();
      console.log(response);
      setArticles(response);
    }

    fetchBestArticles();
    fetchArticles();
  }, []);

  return (
    <>
      <Header
        option={[
          { label: '자유게시판', href: '/board' },
          { label: '중고마켓', href: '/items' },
        ]}
      />

      <main className='px-4 space-y-4'>
        <BestArticleContainer bestArticles={bestArticles?.slice(0, 1)} />
        <ArticleContainer articles={articles} />
      </main>
    </>
  );
}
