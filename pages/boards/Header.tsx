import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  option?: { label: string; href: string }[];
};

export default function Header({ option: options }: HeaderProps) {
  return (
    <header className='flex justify-between items-center h-16 px-4 border-b border-gray-150'>
      <div className='flex space-x-2'>
        <Link href='/' passHref>
          <div className='block md:hidden'>
            <Image
              src={'/images/logos/logo-mobile.svg'}
              alt='로고 이미지'
              width={80}
              height={28}
            />
          </div>
          <div className='hidden md:block'>
            <Image
              src='/images/logos/logo.svg'
              alt='로고 이미지'
              width={134}
              height={50}
            />
          </div>
        </Link>

        {options && (
          <nav className='flex space-x-2 items-center'>
            {options.map((option, index) => (
              <Link key={index} href={option.href}>
                <p className='text-gray-700 hover:text-blue-500 font-[700]'>
                  {option.label}
                </p>
              </Link>
            ))}
          </nav>
        )}
      </div>
      <div>
        <Image
          src={'/images/icons/ic_my-page.svg'}
          alt='마이페이지 아이콘'
          width={40}
          height={40}
        />
      </div>
    </header>
  );
}
