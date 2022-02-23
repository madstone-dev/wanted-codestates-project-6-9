import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addReview,
  updateReview,
  deleteReview,
  updateSort,
  deleteComment,
  updatePage,
} from "../reducers/reviewReducer";
import CommentListTest from "./CommentListTest";

export default function ReviewListTest() {
  const { pageItems: reviews, maxPage } = useSelector((state) => state.reviews);
  console.log(reviews);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(1);

  const increasePage = () => {
    if (page === maxPage) {
      return;
    }
    dispatch(updatePage(page + 1));
    setPage(page + 1);
  };

  const decreasePage = () => {
    if (page === 1) {
      return;
    }
    dispatch(updatePage(page - 1));
    setPage(page - 1);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addReview({ title, image, score }));
    setImage("");
  };

  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeImage = (event) => {
    console.log(event.target.files);
    const file = event.target.files[0];
    setImage(file);
  };
  const onChangeScore = (event) => setScore(event.target.value);

  const onDelete = (id) => dispatch(deleteReview(id));
  const onDeleteComment = (id) => dispatch(deleteComment(id));
  const onUpdate = (id) =>
    dispatch(
      updateReview({
        id,
        title: "newTitle",
        image,
        score: 5,
      })
    );

  const onUpdateSortDesc = () => {
    dispatch(
      updateSort({
        align: "desc",
      })
    );
  };
  const onUpdateSortAsc = () => {
    dispatch(
      updateSort({
        align: "asc",
      })
    );
  };
  const onUpdateSortId = () => {
    dispatch(
      updateSort({
        sort: "id",
      })
    );
  };
  const onUpdateSortCreatedAt = () => {
    dispatch(
      updateSort({
        sort: "createdAt",
      })
    );
  };
  const onUpdateSortCommentCnt = () => {
    dispatch(
      updateSort({
        sort: "commentCnt",
      })
    );
  };
  const onUpdateSortRandom = () => {
    dispatch(
      updateSort({
        align: "rnd",
      })
    );
  };

  return (
    <div>
      <div>
        <button onClick={onUpdateSortRandom}>Random</button>
        <button onClick={onUpdateSortDesc}>DESC</button>
        <button onClick={onUpdateSortAsc}>ASC</button>
        <button onClick={onUpdateSortId}>ID</button>
        <button onClick={onUpdateSortCreatedAt}>CreatedAt</button>
        <button onClick={onUpdateSortCommentCnt}>CommentCnt</button>
        <button onClick={increasePage}>page +</button>
        <button onClick={decreasePage}>page -</button>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <span>title</span>
          <input type="text" value={title} onChange={onChangeTitle} />
        </div>
        <div>
          <span>image</span>
          <input type="file" onChange={onChangeImage} />
        </div>
        <div>
          <span>score</span>
          <input type="number" value={score} onChange={onChangeScore} />
        </div>
        <button type="submit">add</button>
      </form>
      <div>
        <ul>
          {reviews.map((review, index) => {
            return (
              <li key={index}>
                <div>
                  <span>id : {review.id}</span>
                  <div>
                    <img src={review.image} width="100" height="100" />
                  </div>
                  <div>
                    <span>title : {review.title}</span>
                  </div>
                  <span>score : {review.score}</span>
                  <span>cnt : {review.commentCnt}</span>
                  <button
                    onClick={() => {
                      onDelete(review.id);
                    }}
                  >
                    delete
                  </button>
                  <button
                    onClick={() => {
                      onUpdate(review.id);
                    }}
                  >
                    update
                  </button>
                </div>
                <div>
                  <div>코멘트</div>
                  <CommentListTest reviewId={review.id} />
                  <div>
                    <ul>
                      {review.comments.map((comment, index) => {
                        return (
                          <li key={index}>
                            <span>id : {comment.id}</span>
                            <span>content : {comment.content}</span>
                            <span>createdAt : {comment.createdAt}</span>
                            <button
                              onClick={() => {
                                onDeleteComment(comment.id);
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
