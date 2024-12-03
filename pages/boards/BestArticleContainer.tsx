import { article } from '@/types';
import Image from 'next/image';
import { formatDate } from '@/utills';
import BestArticleBox from './BestArticleBox';

interface BestArticleContainerProps {
  bestArticles: article[];
}

export default function BestArticleContainer({
  bestArticles,
}: BestArticleContainerProps) {
  return (
    <div className='pt-4 space-y-4'>
      <p className='text-lg font-[700]'>베스트 게시글</p>

      <div className='flex'>
        {bestArticles.length &&
          bestArticles.map((article) => {
            return <BestArticleBox key={article.id} article={article} />;
          })}
      </div>
    </div>
  );
}
