import { Dispatch, SetStateAction, useState } from 'react';

interface SortDropdownProps {
  onSortChange: Dispatch<SetStateAction<'recent' | 'favorite'>>;
}

function SortDropdown({ onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('최신순');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: 'recent' | 'favorite', label: string) => {
    setSelectedOption(label);
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className='dropdown-container'>
      <button className='dropdown-select' onClick={toggleDropdown}>
        {selectedOption}
        <img
          src='/images/icons/ic_dropdown.svg'
          alt='드롭다운'
          className='dropdown-icon'
        />
      </button>
      {isOpen && (
        <ul className='dropdown-menu'>
          <li
            className='dropdown-item'
            onClick={() => handleOptionClick('recent', '최신순')}
          >
            최신순
          </li>
          <li
            className='dropdown-item'
            onClick={() => handleOptionClick('favorite', '좋아요순')}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;
