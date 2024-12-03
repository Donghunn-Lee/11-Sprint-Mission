import { article } from '@/types';
import { formatDate } from '@/utills';
import Image from 'next/image';

export default function ArticleBox({ article }: { article: article }) {
  return (
    <div className='w-full h-34'>
      <div className='flex justify-between'>
        <p>{article.title}</p>
        <Image
          src={article.image || ''}
          alt='게시글 이미지'
          width={72}
          height={72}
        />
      </div>

      <div className='flex justify-between'>
        <div className='flex'>
          <Image
            src={'/images/icons/ic_my-page.svg'}
            alt=''
            width={24}
            height={24}
          />
          <p>{article.writer.nickname}</p>

          <p>{formatDate(article.updatedAt)}</p>
        </div>

        <div className='flex'>
          <Image
            src={'/images/icons/ic_heart.svg'}
            alt='좋아요 이미지'
            width={16}
            height={16}
          />
          <p>{article.likeCount}</p>
        </div>
      </div>
    </div>
  );
}
