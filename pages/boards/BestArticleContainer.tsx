import { article } from '@/types';
import BestArticleBox from './BestArticleBox';

export default function BestArticleContainer({
  bestArticles,
}: {
  bestArticles: article[];
}) {
  return (
    <div className='pt-4 space-y-4'>
      <p className='text-lg font-[700]'>베스트 게시글</p>

      <div className='flex px-6'>
        {bestArticles?.length &&
          bestArticles.map((article) => {
            return <BestArticleBox key={article.id} article={article} />;
          })}
      </div>
    </div>
  );
}
