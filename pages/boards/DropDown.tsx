import Image from 'next/image';
import { useState } from 'react';

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='p-3 border-2 border-gray-200 rounded-xl hover:cursor-pointer hover:bg-gray-300'>
      <Image
        className='sm:hidden'
        src='/images/icons/ic_sort.svg'
        alt='드롭다운 이미지'
        width={24}
        height={24}
      />
      <div className='hidden sm:flex w-24 justify-between px-2'>
        <p className='whitespace-nowrap'>최신순</p>
        <div>
          <Image
            src={'/images/icons/ic_arrow_down.svg'}
            alt='아래 화살표 이미지'
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
