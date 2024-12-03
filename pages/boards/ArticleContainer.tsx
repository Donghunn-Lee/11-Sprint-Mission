import { article } from '@/types';
import SearchBar from './SearchBar';
import ArticleBox from './ArticleBox';

export default function ArticleContainer({
  articles,
}: {
  articles: article[];
}) {
  return (
    <section className='space-y-4'>
      <div className='flex justify-between'>
        <p className='text-lg font-[700]'>게시글</p>
        <button>글쓰기</button>
      </div>

      <SearchBar />

      <div className='space-y-6'>
        {articles?.length &&
          articles.map((article) => {
            return <ArticleBox key={article.id} article={article} />;
          })}
      </div>
    </section>
  );
}
