import { createSlice, current } from "@reduxjs/toolkit";

function Review({ id, title, image, score }) {
  return {
    id,
    title,
    image: image ? URL.createObjectURL(image) : undefined,
    score: Number(score),
    createdAt: Date.now(),
  };
}

const initialState = {
  reviews: [],
  sortBy: "createdAt",
  align: "asc",
};

const findOne = (items, payload) =>
  items.find((review) => review.id === payload);

const sortBy = ({ items, sortBy = "id", align = "asc" }) => {
  console.log(sortBy, align);
  const _items = [...items];
  if (align === "asc") {
    return _items.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return 1;
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] === b[sortBy]) return 0;
    });
  } else if (align === "desc") {
    return _items.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return -1;
      if (a[sortBy] < b[sortBy]) return 1;
      if (a[sortBy] === b[sortBy]) return 0;
    });
  }
  throw new Error("align은 'asc' 또는 'desc' 입니다.");
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      // 현재 상태 받아오기
      const { reviews, sort, align } = current(state);

      // 아이디 순으로 정렬
      const sortedById = sortBy({
        items: reviews,
      });

      // 마지막 아이디 추가
      const id = sortedById[sortedById.length - 1]
        ? sortedById[sortedById.length - 1].id + 1
        : 1;

      // 새로운 리뷰 생성
      const newReview = new Review({ ...action.payload, id });

      // 새로운 리뷰 리스트에 넣기
      const newReviews = [...sortedById, newReview];

      // 상태의 정렬 기준으로 정렬
      const sortByState = sortBy({
        items: newReviews,
        sortBy: sort,
        align,
      });

      state.reviews = sortByState;
    },
    updateReview: (state, action) => {
      // 현재 상태
      const reviews = current(state).reviews;

      // action 으로 받은 상태
      const { id, title, image, score } = action.payload;

      // 하나 찾기
      const exists = findOne(reviews, id);

      // 없다면 리턴
      if (!exists) return;

      // 있으면 복사
      const review = { ...exists };

      // 각각 있으면 업데이트
      if (title) review.title = title;
      if (image) review.image = URL.createObjectURL(image);
      if (score) review.score = Number(score);

      // 현재 리뷰 업데이트
      const newReviews = reviews.map((_review) => {
        if (_review.id === id) {
          return review;
        } else {
          return _review;
        }
      });
      state.reviews = newReviews;
    },
    deleteReview: (state, action) => {
      // 현재 상태
      const reviews = current(state).reviews;

      // action.payload 는 id 입니다.
      state.reviews = reviews.filter((review) => review.id !== action.payload);
    },
    updateSort: (state, action) => {
      const { reviews } = current(state);

      // action의 정렬 기준으로 정렬
      const sortByAction = sortBy({
        items: reviews,
        sortBy: action.payload.sort ? action.payload.sort : undefined,
        align: action.payload.align ? action.payload.align : undefined,
      });

      console.log(sortByAction);

      state.reviews = sortByAction;
    },
  },
});

export const { addReview, updateReview, deleteReview, updateSort } =
  reviewSlice.actions;

export default reviewSlice.reducer;
