import { getTimeDifference } from '../../../utills';
import './CommentBox.css';

function CommentBox({ comment }) {
  const { content, createdAt, writer } = comment;

  return (
    <div className='comment-box'>
      <p className='comment-content'>{content}</p>
      <div className='comment-writer'>
        <img
          className='comment-writer-image'
          src={writer.image ? writer.image : '/images/icons/ic_mypage.svg'}
          alt='댓글 작성자 프로필 이미지'
        />
        <div className='comment-writer-wrapper'>
          <p className='comment-writer-nickname'>{writer.nickname}</p>
          <p className='comment-writer-createdat'>
            {getTimeDifference(createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
