import { article } from '@/types';
import { formatDate } from '@/utills';
import Image from 'next/image';

export default function BestArticleBox({ article }: { article: article }) {
  return (
    <section className='space-y-4 w-full'>
      <div
        key={article.id}
        className='flex py-0.5 px-6 font-[600] w-24 bg-blue-500 text-white justify-center gap-1 rounded-b-2xl'
      >
        <Image
          src={'/images/icons/ic_medal.svg'}
          alt={'베스트 게시글 메달 이미지'}
          width={16}
          height={16}
        />
        Best
      </div>
      <div className='space-y-10 pb-4'>
        <div className='flex justify-between'>
          <p className='text-lg font-[600] text-gray-800'>{article.title}</p>
          <Image
            src={article.image || ''}
            alt='게시글 이미지'
            width={72}
            height={72}
          />
        </div>
        <div className='flex justify-between text-sm text-gray-400'>
          <div className='flex space-x-2 items-center'>
            <p >{article.writer.nickname}</p>
            <div className='flex items-center space-x-1'>
              <Image
                src={'/images/icons/ic_heart.svg'}
                alt='좋아요 이미지'
                width={16}
                height={16}
              />
              <p>{article.likeCount}</p>
            </div>
          </div>
          <p>{formatDate(article.updatedAt)}</p>
        </div>
      </div>
    </section>
  );
}
