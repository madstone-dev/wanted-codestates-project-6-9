import { createSlice, current } from "@reduxjs/toolkit";
import { dummyComments, dummyReview } from "../dumy";

function Review({ id, title, image, score }) {
  return {
    id,
    title,
    image: image ? URL.createObjectURL(image) : undefined,
    score: Number(score),
    createdAt: Date.now(),
    comments: [],
    commentCnt: 0,
  };
}

function Comment({ id, content, reviewId }) {
  return {
    id,
    content,
    reviewId,
    createdAt: Date.now(),
  };
}

const initialState = {
  reviews: dummyReview,
  comments: dummyComments,
  sortBy: "createdAt",
  align: "asc",
  pageItems: [],
  page: 1,
  maxPage: 1,
};

const findOne = (items, payload) =>
  items.find((review) => review.id === payload);

const sortBy = ({ items, sortBy, align }) => {
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
  } else if (align === "rnd") {
    return _items.sort(() => (Math.random() > 0.5 ? 1 : -1));
  }
  throw new Error("align은 'asc' 또는 'desc' 입니다.");
};

const getCommentsInReviews = (comments, reviewId) => {
  return comments.filter((comment) => comment.reviewId === reviewId);
};

const updateCommentInReviews = (reviews, comments, reviewId, state) => {
  const commentsInReviews = getCommentsInReviews(comments, reviewId);
  const newReviews = reviews.map((review) => {
    if (review.id === reviewId) {
      const newReview = { ...review };
      newReview.commentCnt = commentsInReviews.length;
      newReview.comments = commentsInReviews;
      return newReview;
    }
    return review;
  });
  state.reviews = newReviews;
};

const PAGE_SIZE = 2;
const getPageItems = (items, page, state) => {
  const pageItems = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const maxPage = Math.ceil(items.length / PAGE_SIZE);
  state.maxPage = maxPage;
  if (pageItems.length > 0) {
    state.page = page;
    return pageItems;
  } else {
    state.page = maxPage;
    return items.slice((maxPage - 1) * PAGE_SIZE, maxPage * PAGE_SIZE);
  }
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      const { reviews, sortBy: sort, align, page } = current(state);

      const sortedByIdAsc = sortBy({
        items: reviews,
        sortBy: "id",
        align: "asc",
      });

      const id = sortedByIdAsc[sortedByIdAsc.length - 1]
        ? sortedByIdAsc[sortedByIdAsc.length - 1].id + 1
        : 1;

      const newReview = new Review({ ...action.payload, id });
      const newReviews = [...sortedByIdAsc, newReview];

      const sortByState = sortBy({
        items: newReviews,
        sortBy: sort,
        align,
      });

      state.reviews = sortByState;
      state.pageItems = getPageItems(sortByState, page, state);
    },
    updateReview: (state, action) => {
      const { reviews, page } = current(state);
      const { id, title, image, score } = action.payload;

      const exists = findOne(reviews, id);

      if (!exists) return;
      const review = { ...exists };

      if (title) review.title = title;
      if (image) review.image = URL.createObjectURL(image);
      if (score) review.score = Number(score);
      const newReviews = reviews.map((_review) => {
        if (_review.id === id) {
          return review;
        } else {
          return _review;
        }
      });
      state.reviews = newReviews;
      state.pageItems = getPageItems(newReviews, page, state);
    },
    deleteReview: (state, action) => {
      const { reviews, comments, page } = current(state);
      state.comments = comments.filter(
        (comment) => comment.reviewId !== action.payload
      );
      const deletedReviews = reviews.filter(
        (review) => review.id !== action.payload
      );
      state.reviews = deletedReviews;
      state.pageItems = getPageItems(deletedReviews, page, state);
    },
    updateSort: (state, action) => {
      const { reviews, sortBy: sort, align, page } = current(state);
      const sortByAction = sortBy({
        items: reviews,
        sortBy: action.payload.sort ? action.payload.sort : sort,
        align: action.payload.align ? action.payload.align : align,
      });

      if (action.payload.sort) state.sortBy = action.payload.sort;
      if (action.payload.align) state.align = action.payload.align;

      state.reviews = sortByAction;
      state.pageItems = getPageItems(sortByAction, page, state);
    },
    // 세은님 작업부분
    addComment: (state, action) => {
      const { reviews, comments } = current(state);
      const review = reviews.find(
        (review) => review.id === action.payload.reviewId
      );
      if (!review) {
        return;
      }

      const id = comments[comments.length - 1]
        ? comments[comments.length - 1].id + 1
        : 1;
      const newComment = new Comment({ ...action.payload, id });
      const newComments = [...comments, newComment];
      state.comments = newComments;
      updateCommentInReviews(
        reviews,
        newComments,
        action.payload.reviewId,
        state
      );
    },
    deleteComment: (state, action) => {
      const { reviews, comments } = current(state);
      const comment = comments.find((comment) => comment.id === action.payload);
      if (!comment) {
        return;
      }
      const deletedComments = comments.filter(
        (comment) => comment.id !== action.payload
      );
      state.comments = deletedComments;
      updateCommentInReviews(reviews, deletedComments, comment.reviewId, state);
    },
    updatePage: (state, action) => {
      const { reviews } = current(state);
      state.pageItems = getPageItems(reviews, action.payload, state);
    },
  },
});

export const {
  addReview,
  updateReview,
  deleteReview,
  updateSort,
  addComment,
  deleteComment,
  updatePage,
} = reviewSlice.actions;

export default reviewSlice.reducer;
