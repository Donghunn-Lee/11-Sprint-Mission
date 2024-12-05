import { useCallback, useEffect, useState } from 'react';
import BestArticleContainer from './BestArticleContainer';
import Header from './Header';
import { getArticles } from '../api/ArticleApi';
import ArticleContainer from './ArticleContainer';
import SearchBar from './SearchBar';

export default function BoardsPage() {
  const [bestArticles, setBestArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('recent');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<Boolean>(false);
  const [hasMore, setHasMore] = useState(true);
  const BEST_ARTICLE_SIZE = 3;
  const ARTICLES_PER_PAGE = 10;

  const fetchBestArticles = useCallback(async () => {
    const response = await getArticles({
      pageSize: BEST_ARTICLE_SIZE,
      orderBy: 'like',
    });
    setBestArticles(response);
  }, [BEST_ARTICLE_SIZE]);

  const fetchArticles = useCallback(async () => {
    if (searchQuery === '') {
      const response = await getArticles({});
      setArticles(response);
      return;
    }

    const response = await getArticles({
      page: page,
      pageSize: ARTICLES_PER_PAGE,
      orderBy: sort,
      keyword: searchQuery,
    });

    setArticles(response);
  }, [page, sort, searchQuery]);

  useEffect(() => {
    fetchBestArticles();
    fetchArticles();
  }, [fetchBestArticles, fetchArticles]);

  return (
    <>
      <Header
        option={[
          { label: '자유게시판', href: '/board' },
          { label: '중고마켓', href: '/items' },
        ]}
      />

      <main className='px-4 lg:max-w-fit sm:px-6 space-y-4 sm:space-y-6 lg:mx-auto'>
        <BestArticleContainer bestArticles={bestArticles} />
        <ArticleContainer articles={articles}>
          <SearchBar setSearchQuery={setSearchQuery} />
        </ArticleContainer>
      </main>
    </>
  );
}
