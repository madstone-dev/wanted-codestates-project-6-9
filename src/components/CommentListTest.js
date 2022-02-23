import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, deleteComment } from "../reducers/reviewReducer";

export default function CommentListTest({ reviewId }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

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
    </div>
  );
}
