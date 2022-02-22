import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addReview,
  updateReview,
  deleteReview,
  updateSort,
} from "../reducers/reviewReducer";

export default function ReviewListTest() {
  const { reviews } = useSelector((state) => state.reviews);
  console.log(reviews);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [score, setScore] = useState(0);

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
        sort: "asc",
      })
    );
  };
  const onUpdateSortCreatedAt = () => {
    dispatch(
      updateSort({
        sort: "asc",
      })
    );
  };

  return (
    <div>
      <div>
        <button onClick={onUpdateSortDesc}>DESC</button>
        <button onClick={onUpdateSortAsc}>ASC</button>
        <button onClick={onUpdateSortId}>ID</button>
        <button onClick={onUpdateSortCreatedAt}>CreatedAt</button>
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
                <span>id : {review.id}</span>
                <span>title : {review.title}</span>
                <img src={review.image} />
                <span>score : {review.score}</span>
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
