import { createSlice, current } from '@reduxjs/toolkit';
import { dummyComments, dummyReviews } from '../constances';

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

const PAGE_SIZE = 15;

const initialState = {
  reviews: dummyReviews,
  comments: dummyComments,
  sortBy: 'createdAt',
  align: 'desc',
  pageItems: dummyReviews
    .sort((a, b) => {
      if (a['createdAt'] > b['createdAt']) return -1;
      if (a['createdAt'] < b['createdAt']) return 1;
      if (a['createdAt'] === b['createdAt']) return 0;
    })
    .slice(0, PAGE_SIZE),
  page: 1,
  maxPage: Math.ceil(dummyReviews.length / PAGE_SIZE),
};

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

const findOne = (items, payload) =>
  items.find((review) => review.id === payload);

const sortBy = ({ items, sortBy, align }) => {
  const _items = [...items];
  if (align === 'asc') {
    return _items.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return 1;
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] === b[sortBy]) return 0;
    });
  } else if (align === 'desc') {
    return _items.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return -1;
      if (a[sortBy] < b[sortBy]) return 1;
      if (a[sortBy] === b[sortBy]) return 0;
    });
  } else if (align === 'rnd') {
    return _items.sort(() => (Math.random() > 0.5 ? 1 : -1));
  }
  throw new Error("허용되는 align은 'asc' 'desc' 'rdn' 입니다.");
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

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview: (state, action) => {
      const { reviews, sortBy: sort, align, page } = current(state);

      const sortedByIdAsc = sortBy({
        items: reviews,
        sortBy: 'id',
        align: 'asc',
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
      const { reviews, comments, page } = current(state);
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
      state.pageItems = getPageItems(state.reviews, page, state);
    },
    deleteComment: (state, action) => {
      const { reviews, comments, page } = current(state);
      const comment = comments.find((comment) => comment.id === action.payload);
      if (!comment) {
        return;
      }
      const deletedComments = comments.filter(
        (comment) => comment.id !== action.payload
      );
      state.comments = deletedComments;
      updateCommentInReviews(reviews, deletedComments, comment.reviewId, state);
      state.pageItems = getPageItems(state.reviews, page, state);
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
