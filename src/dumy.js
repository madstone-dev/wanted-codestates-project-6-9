const dummyReview = [
  {
    id: 0,
    title: "title0",
    image:
      "https://i.balaan.io/review/1c289f48968433c2c17654767dacab17-t_300.webp",
    score: 0,
    createdAt: 1645590351091,
    comments: [
      {
        id: 1,
        content: "도움돼요",
        reviewId: 0,
        createAt: 1645590632818,
      },
      {
        id: 2,
        content: "감사합니다!",
        reviewId: 0,
        createAt: 1645590632800,
      },
      {
        id: 3,
        content: "안녕하세요",
        reviewId: 0,
        createAt: 1645590632800,
      },
    ],
    commentCnt: 3,
  },

  {
    id: 1,
    title: "title1",
    image:
      "https://i.balaan.io/review/64369a10990a4e9fbd073b68bc0c0e1e-t_300.webp",
    score: 0,
    createdAt: 1645590351092,
    comments: [
      {
        id: 4,
        content: "감사합니다!",
        reviewId: 1,
        createAt: 1645590632800,
      },
      {
        id: 5,
        content: "사진 잘 나왔네요",
        reviewId: 1,
        createAt: 1645590632800,
      },
    ],
    commentCnt: 2,
  },
  {
    id: 2,
    title: "title2",
    image:
      "https://i.balaan.io/review/ca85e7101e2076564e22a5f9c721432e-t_300.webp",
    score: 0,
    createdAt: 1645590351093,
    comments: [
      {
        id: 6,
        content: "후기 감사합니다",
        reviewId: 2,
        createAt: 1645590632800,
      },
    ],
    commentCnt: 1,
  },
  {
    id: 3,
    title: "title3",
    image:
      "https://i.balaan.io/review/a87f068983c40d95076949d4949a4185-t_300.webp",
    score: 0,
    createdAt: 1645590351094,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 4,
    title: "title4",
    image:
      "https://i.balaan.io/review/f0ddc6b24d2cb8cdf74a6c7da4359ff7-t_300.webp",
    score: 0,
    createdAt: 1645590351095,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 5,
    title: "title5",
    image:
      "https://i.balaan.io/review/2e903296241cd6dbc886e7ea8c87bfe3-t_300.webp",
    score: 0,
    createdAt: 1645590351096,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 6,
    title: "title6",
    image:
      "https://i.balaan.io/review/de0be76d91ebfd0066e29232c9152e0b-t_300.webp",
    score: 0,
    createdAt: 1645590351097,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 7,
    title: "title7",
    image:
      "https://i.balaan.io/review/9297846e373519c5b2607dc8fbeb15b7-t_300.webp",
    score: 0,
    createdAt: 1645590351098,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 8,
    title: "title8",
    image:
      "https://i.balaan.io/review/0eca3f5ee9b99e72b286f8f2b6282134-t_300.webp",
    score: 0,
    createdAt: 1645590351099,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 9,
    title: "title9",
    image:
      "https://i.balaan.io/review/5369c65740c3f000abd0eb0989287cd3-t_300.webp",
    score: 0,
    createdAt: 1645590351111,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 10,
    title: "title10",
    image:
      "https://i.balaan.io/review/6afee1176081d03a48230bf85ea61a1b-t_300.webp",
    score: 0,
    createdAt: 1645590351112,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 11,
    title: "title11",
    image:
      "https://i.balaan.io/review/e77134f594446d07092d2eb541f114b2-t_300.webp",
    score: 0,
    createdAt: 1645590351113,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 12,
    title: "title12",
    image:
      "https://i.balaan.io/review/cccd17325ccb7630c1580d88fd5581fe-t_300.webp",
    score: 0,
    createdAt: 1645590351114,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 13,
    title: "title13",
    image:
      "https://i.balaan.io/review/5030a64936b327aa69c2b4291c2e75af-t_300.webp",
    score: 0,
    createdAt: 1645590351115,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 14,
    title: "title14",
    image:
      "https://i.balaan.io/review/82219f52a0e0891c17710cab0ced325b-t_300.webp",
    score: 0,
    createdAt: 1645590351116,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 15,
    title: "title15",
    image:
      "https://i.balaan.io/review/64369a10990a4e9fbd073b68bc0c0e1e-t_300.webp",
    score: 0,
    createdAt: 1645590351117,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 16,
    title: "title16",
    image:
      "https://i.balaan.io/review/ca85e7101e2076564e22a5f9c721432e-t_300.webp",
    score: 0,
    createdAt: 1645590351118,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 17,
    title: "title17",
    image:
      "https://i.balaan.io/review/a87f068983c40d95076949d4949a4185-t_300.webp",
    score: 0,
    createdAt: 1645590351119,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 18,
    title: "title18",
    image:
      "https://i.balaan.io/review/f0ddc6b24d2cb8cdf74a6c7da4359ff7-t_300.webp",
    score: 0,
    createdAt: 1645590361000,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 19,
    title: "title19",
    image:
      "https://i.balaan.io/review/2e903296241cd6dbc886e7ea8c87bfe3-t_300.webp",
    score: 0,
    createdAt: 1645590361001,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 20,
    title: "title20",
    image:
      "https://i.balaan.io/review/de0be76d91ebfd0066e29232c9152e0b-t_300.webp",
    score: 0,
    createdAt: 1645590361002,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 21,
    title: "title21",
    image:
      "https://i.balaan.io/review/9297846e373519c5b2607dc8fbeb15b7-t_300.webp",
    score: 0,
    createdAt: 1645590361003,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 22,
    title: "title22",
    image:
      "https://i.balaan.io/review/0eca3f5ee9b99e72b286f8f2b6282134-t_300.webp",
    score: 0,
    createdAt: 1645590361004,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 23,
    title: "title23",
    image:
      "https://i.balaan.io/review/5369c65740c3f000abd0eb0989287cd3-t_300.webp",
    score: 0,
    createdAt: 1645590361005,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 24,
    title: "title24",
    image:
      "https://i.balaan.io/review/6afee1176081d03a48230bf85ea61a1b-t_300.webp",
    score: 0,
    createdAt: 1645590361006,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 25,
    title: "title25",
    image:
      "https://i.balaan.io/review/e77134f594446d07092d2eb541f114b2-t_300.webp",
    score: 0,
    createdAt: 1645590361007,
    comments: [],
    commentCnt: 0,
  },

  {
    id: 26,
    title: "title26",
    image:
      "https://i.balaan.io/review/cccd17325ccb7630c1580d88fd5581fe-t_300.webp",
    score: 0,
    createdAt: 1645590361008,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 27,
    title: "title27",
    image:
      "https://i.balaan.io/review/5030a64936b327aa69c2b4291c2e75af-t_300.webp",
    score: 0,
    createdAt: 1645590361009,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 28,
    title: "title28",
    image:
      "https://i.balaan.io/review/82219f52a0e0891c17710cab0ced325b-t_300.webp",
    score: 0,
    createdAt: 1645590361111,
    comments: [],
    commentCnt: 0,
  },
  {
    id: 29,
    title: "title29",
    image:
      "https://i.balaan.io/review/d77e9bc32db50579698f52a0e8aa5c85-t_300.webp",
    score: 0,
    createdAt: 1645590361112,
    comments: [],
    commentCnt: 0,
  },
];

const dummyComments = [
  {
    id: 1,
    content: "도움돼요",
    reviewId: 0,
    createAt: 1645590632818,
  },
  {
    id: 2,
    content: "감사합니다!",
    reviewId: 0,
    createAt: 1645590632800,
  },
  {
    id: 3,
    content: "안녕하세요",
    reviewId: 0,
    createAt: 1645590632800,
  },
  {
    id: 4,
    content: "감사합니다!",
    reviewId: 1,
    createAt: 1645590632800,
  },
  {
    id: 5,
    content: "사진 잘 나왔네요",
    reviewId: 1,
    createAt: 1645590632800,
  },
  {
    id: 6,
    content: "후기 감사합니다",
    reviewId: 2,
    createAt: 1645590632800,
  },
];

export { dummyReview, dummyComments };
