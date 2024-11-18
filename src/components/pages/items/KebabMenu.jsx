import { useState } from 'react';
import './KebabMenu.css';

const KebabMenu = ({ openEdit, onDelete, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='comment-kebab-container'>
      <button className='kebab-btn' onClick={toggleMenu} aria-label='Menu'>
        ⋮
      </button>

      {isOpen && (
        <ul className='kebab-dropdown'>
          <li
            className='kebab-dropdown-option option-top'
            onClick={() => {
              openEdit();
              setIsOpen(false);
            }}
          >
            수정하기
          </li>
          <li
            className='kebab-dropdown-option option-bottom'
            onClick={() => {
              onDelete(id);
              setIsOpen(false);
            }}
          >
            삭제하기
          </li>
        </ul>
      )}
    </div>
  );
};

export default KebabMenu;
