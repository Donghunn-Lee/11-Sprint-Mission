import Image from 'next/image';
import { useState } from 'react';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='relative flex items-center space-x-2'>
      <Image
        className='absolute top-2.5 left-4'
        src={'/images/icons/ic_search.svg'}
        alt='검색 이미지'
        width={24}
        height={24}
      />
      <input
        className='w-full py-2 pl-9 pr-5 bg-gray-100 rounded-xl'
        type='text'
        placeholder='검색할 상품을 입력해주세요'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className='p-3 border-2 border-gray-200 rounded-xl'>
        <Image
          src='/images/icons/ic_sort.svg'
          alt='드롭다운 이미지'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
