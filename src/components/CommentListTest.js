import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment, deleteComment } from "../reducers/commentReducer";


export default function CommentListTest() {
  const { comments } = useSelector((state) => state.comments);
  console.log(comments);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [reviewId, setReviwId] = useState(1);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment({ content, reviewId }));
  };
  const onDelete = (id) => dispatch(deleteComment(id));
  const onChangeContent = (event) => setContent(event.target.value);


  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <span>content</span>
          <input type="text" value={content} onChange={onChangeContent} />
        </div>
      </form>
      <div>
        <ul>
          {comments.map((comment, index) => {
            return (
              <li key={index}>
                <span>id : {comment.id}</span>
                <span>content : {comment.content}</span>
                <span>createdAt : {comment.createdAt}</span>
                <button
                  onClick={() => {
                    onDelete(comment.id);
                  }}
                >
                  delete
                </button>
                
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}