import { createSlice, current } from "@reduxjs/toolkit";

function Comment({ id, content, reviewId, createdAt }) {
  return {
    id,
    content,
    reviewId,
    createdAt: Date.now(),
  };
}

const initialState = {
  comments: [],
};

export const commentSlice = createSlice({
  name:"comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      //현재 상태 받아오기
      const { comments } = current(state);

      //마지막 아이디 추가
      const id = comments[comments.length - 1]
        ? comments[comments.length - 1].id + 1
        : 1;

      //새로운 댓글 생성
      const newComment = new Comment({ ...action.payload, id });

      //새로운 댓글 리스트에 넣기
      const newComments = [...comments, newComment];
      state.comments =newComments;
    },
    deleteComment: (state, action) => {
      //현재 상태
      const comments = current(state).comments;

      state.comments = comments.filter((comment) => comment.id !== action.payload);
    }

  },
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;