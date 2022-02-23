const dummyJson = [
  {
    title:
      "핑크색이랑 많이 고민했는데 검정색사기 잘한거같아요 완전 맘에 들어요",
    image:
      "https://i.balaan.io/review/1c289f48968433c2c17654767dacab17-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title: "배송도 생각보다 오래 안걸리고 신발 너무너무 맘에들어용",
    image:
      "https://i.balaan.io/review/64369a10990a4e9fbd073b68bc0c0e1e-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title: "사이즈 딱 맞고 좋았어요. 빠른배송 감사합니다",
    image:
      "https://i.balaan.io/review/ca85e7101e2076564e22a5f9c721432e-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title: "너무 이쁘고 은근 사이즈도 넉넉해서 이것저것 많이 들어가요~!",
    image:
      "https://i.balaan.io/review/a87f068983c40d95076949d4949a4185-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title: "남자라서 고민많이했는데 남자가 들어도 이뻐용",
    image:
      "https://i.balaan.io/review/f0ddc6b24d2cb8cdf74a6c7da4359ff7-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title:
      "배송은 빠른데 매장 앞에 그냥 두고 도착 문자도 없으셔서 🥲 그래도가방은 좋네요!",
    image:
      "https://i.balaan.io/review/2e903296241cd6dbc886e7ea8c87bfe3-t_300.webp",
    score: 4,
    comments: [],
  },
  {
    title: "진짜 데일리로 들고다니기 좋아요",
    image:
      "https://i.balaan.io/review/de0be76d91ebfd0066e29232c9152e0b-t_300.webp",
    score: 4,
    comments: [],
  },
  {
    title: "오버핏이지만. 의도한 핏이라서 오케이",
    image:
      "https://i.balaan.io/review/9297846e373519c5b2607dc8fbeb15b7-t_300.webp",
    score: 4,
    comments: [],
  },
  {
    title: "너무 좋아요. 근데 빨았더니 부분이 좀 빠짐",
    image:
      "https://i.balaan.io/review/0eca3f5ee9b99e72b286f8f2b6282134-t_300.webp",
    score: 4,
    comments: [],
  },
  {
    title: "재질은생각했던 것 과는 다르지만 특이한 특징이 있어 만족합니다.",
    image:
      "https://i.balaan.io/review/5369c65740c3f000abd0eb0989287cd3-t_300.webp",
    score: 4,
    comments: [],
  },
  {
    title:
      "예상날짜보다 빨리왔어요. 전날까지도 배송 관련 내용없다가 배송문자 와서 알게됐어요.",
    image:
      "https://i.balaan.io/review/6afee1176081d03a48230bf85ea61a1b-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title: "가격대비 괜찮은거같아요. 배송도 빨리 왔어요",
    image:
      "https://i.balaan.io/review/e77134f594446d07092d2eb541f114b2-t_300.webp",
    score: 4,
    comments: [],
  },
  {
    title: "구매상품에 만족합니다",
    image:
      "https://i.balaan.io/review/cccd17325ccb7630c1580d88fd5581fe-t_300.webp",
    score: 4,
    comments: [],
  },
  {
    title:
      "너무 빠른 배송 감사드립니다.!!🙏😉 너무 예뻐요 정품인정 입니다. 자주 이용할께요",
    image:
      "https://i.balaan.io/review/5030a64936b327aa69c2b4291c2e75af-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title:
      "로고 색이 랜덤이라 걱정했는데 원하던 색으로 와서 너무 좋았어요! 옷도 생각했던대로 예뻐용 감사합니당 ~~",
    image:
      "https://i.balaan.io/review/82219f52a0e0891c17710cab0ced325b-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title: "색감이 어둡네요 와인과 핑크사이?",
    image:
      "https://i.balaan.io/review/64369a10990a4e9fbd073b68bc0c0e1e-t_300.webp",
    score: 3,
    comments: [],
  },
  {
    title: "배송과 상품 너무 만족합니다",
    image:
      "https://i.balaan.io/review/ca85e7101e2076564e22a5f9c721432e-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title:
      "딸램 생일선물인데 맘에들어해서 다행이에요. 포장상태 꼼꼼 사전에 검수영상도보내주시고 믿을만합니다~^^",
    image:
      "https://i.balaan.io/review/a87f068983c40d95076949d4949a4185-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title:
      "정말 다 이쁜데,, 사용한지 일주일만에 어깨부분 실팝이 뜯어지기 시작했어요ㅠ",
    image:
      "https://i.balaan.io/review/f0ddc6b24d2cb8cdf74a6c7da4359ff7-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title: "배송 완전 빨리왔네요! 너무 이뻐요!",
    image:
      "https://i.balaan.io/review/2e903296241cd6dbc886e7ea8c87bfe3-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title:
      "평소 240을 신어 38사이즈 구매했는데 발볼이 좁아서인지 생각보다 크네요 그래도 신고 다닐만해요 ",
    image:
      "https://i.balaan.io/review/de0be76d91ebfd0066e29232c9152e0b-t_300.webp",
    score: 4,
    comments: [],
  },
  {
    title:
      "평소 230 신는데 덩크로우  반업 하라는 얘기가 많아서 235로 구매했는데 딱이네요 . 배송도 그렇게 늦지 않았어요 ",
    image:
      "https://i.balaan.io/review/9297846e373519c5b2607dc8fbeb15b7-t_300.webp",
    score: 4,
    comments: [],
  },
  {
    title: "너무좋아요사이즈던컬러던",
    image:
      "https://i.balaan.io/review/0eca3f5ee9b99e72b286f8f2b6282134-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title:
      "최소한의 제품은 확인하고 보내야 하지 않을까요? 판매제품에 블랙이라고 사진과 제품설명에 써놓고 핑크색을  보내는건 뭔지..송장엔 블랙이라 써놓고 뜯으면 반품 안됩니다를 하려고 그런건지….암튼 첫 구매해봤는데  첫발부터 엉망이네요…",
    image:
      "https://i.balaan.io/review/5369c65740c3f000abd0eb0989287cd3-t_300.webp",
    score: 1,
    comments: [],
  },
  {
    title:
      "카드지갑 처음구매하는데 너무 간편하고 좋네요. 구찌 제품은 처음 이용하는데 디자인 좋은거같습니다 추천드립니다",
    image:
      "https://i.balaan.io/review/82219f52a0e0891c17710cab0ced325b-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title:
      "하 엄청 고민하다가 샀는데 너무 마음에 들어요ㅠ 좀 작긴 한데 알고 산거라서  완전 만족해요",
    image:
      "https://i.balaan.io/review/d77e9bc32db50579698f52a0e8aa5c85-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title:
      "가죽은 부드럽고 각잡혀 있어서 세워만 놔도 고급진 느낌이네요. 골드부분도 빈티지 골드느낌이라 더 맘에 듭니다. 전체적으로 심플하지만 견고하고 좋아요~ 꾸안꾸 시크한 느낌?ㅎㅎ 데일리 가방으로 쓰려고 샀습니다~ 카드지갑 폰 열쇠 핸드크림 정도 넣고 다니기 좋네요~  믿고 구매했지만 개인적으로  꼼꼼히 살펴보았네요. 흠잡을데가 없네요^^ 발란 첫구매 성공적! ",
    image:
      "https://i.balaan.io/review/5030a64936b327aa69c2b4291c2e75af-t_300.webp",
    score: 5,
    comments: [],
  },
  {
    title: "나에게 선물 만족하고 잘 쓸게요",
    image: "https://i.balaan.io/review/55f79ce41c84cd95d8577ab3cfa641b2.jpg",
    score: 5,
    comments: [],
  },
  {
    title:
      "사진하고 똑같고 너무 예뻐요 키높이 굽이 생각보다 높았어요. 사진을 배송오고 찍은게 없어서 이미 신어서 더러워진거고 깨끗하게 포장도 잘되있었어요",
    image: "https://i.balaan.io/review/8004d2dd434015428a6204cac4c05612.jpeg",
    score: 5,
    comments: [],
  },
  {
    title:
      "빠른 배송과 최저가가 만족스러운 상품이었습니다. 선물로 줄 건데 포장 박스도 예쁘고 꼼꼼하게 잘 포장되어 왔습니다",
    image: "https://i.balaan.io/review/9fedccef710fcdb90e4b83fb7f40cb34.jpg",
    score: 5,
    comments: [],
  },
];

export const dummyComments = [
  {
    id: 1,
    content: "도움돼요",
    reviewId: 30,
    createAt: 1645590632818,
  },
  {
    id: 2,
    content: "감사합니다!",
    reviewId: 30,
    createAt: 1645590632800,
  },
  {
    id: 3,
    content: "안녕하세요",
    reviewId: 30,
    createAt: 1645590632800,
  },
  {
    id: 4,
    content: "감사합니다!",
    reviewId: 29,
    createAt: 1645590632800,
  },
  {
    id: 5,
    content: "사진 잘 나왔네요",
    reviewId: 29,
    createAt: 1645590632800,
  },
  {
    id: 6,
    content: "후기 감사합니다",
    reviewId: 30,
    createAt: 1645590632800,
  },
];

function Review({ id, title, image, score, comments = [] }) {
  return {
    id,
    title,
    image,
    score,
    createdAt: Date.now() + id,
    comments,
    commentCnt: comments.length,
  };
}

const reviews = [];
dummyJson.forEach((dummy, index) => {
  reviews.push(
    new Review({
      id: index + 1,
      title: dummy.title,
      image: dummy.image,
      score: dummy.score,
      comments: dummyComments.filter(
        (comment) => comment.reviewId === index + 1
      ),
    })
  );
});

export const dummyReviews = reviews;
