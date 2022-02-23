const dummyJson = [
  {
    title:
      "핑크색이랑 많이 고민했는데 검정색사기 잘한거같아요 완전 맘에 들어요",
    image: "https://i.balaan.io/review/39cf60c1cc97365fc0366c146bb12fde.jpeg",
    score: 5,
    comments: []
  },
  {
    title: "배송도 생각보다 오래 안걸리고 신발 너무너무 맘에들어용",
    image: "https://i.balaan.io/review/63e6def50806a89dd8eec2d6a20bbcd4.jpeg",
    score: 5,
    comments: []
  },
  {
    title: "사이즈 딱 맞고 좋았어요. 빠른배송 감사합니다",
    image: "https://i.balaan.io/review/0d89ecad6fedae59b591ab5784e71c12.jpeg",
    score: 5,
    comments: []
  },
  {
    title: "너무 이쁘고 은근 사이즈도 넉넉해서 이것저것 많이 들어가요~!",
    image: "https://i.balaan.io/review/e8e55f1c153c7a44fe55ca74800abe5b.jpeg",
    score: 5,
    comments: []
  },
  {
    title: "남자라서 고민많이했는데 남자가 들어도 이뻐용",
    image: "https://i.balaan.io/review/d36fb1988f969247b9711ea641f73ba4.jpeg",
    score: 5,
    comments: []
  },
  {
    title:
      "배송은 빠른데 매장 앞에 그냥 두고 도착 문자도 없으셔서 🥲 그래도가방은 좋네요!",
    image: "https://i.balaan.io/review/9747fbaeadbf78e9528ad2f49735cad8.jpg",
    score: 4,
    comments: []
  },
  {
    title: "진짜 데일리로 들고다니기 좋아요",
    image: "https://i.balaan.io/review/3391f98537e2c12ec32087ffb0cd656f.jpg",
    score: 4,
    comments: []
  },
  {
    title: "오버핏이지만. 의도한 핏이라서 오케이",
    image: "https://i.balaan.io/review/8dae883e0a9101c9f010bab3e967b455.jpg",
    score: 4,
    comments: []
  },
  {
    title: "너무 좋아요. 근데 빨았더니 부분이 좀 빠짐",
    image: "https://i.balaan.io/review/01bec7fcf8cbcf73694750f9ab059466.jpg",
    score: 4,
    comments: []
  },
  {
    title: "재질은생각했던 것 과는 다르지만 특이한 특징이 있어 만족합니다.",
    image: "https://i.balaan.io/review/09294d62457a3c4ef8ab3170f66925ff.jpg",
    score: 4,
    comments: []
  },
  {
    title:
      "예상날짜보다 빨리왔어요. 전날까지도 배송 관련 내용없다가 배송문자 와서 알게됐어요.",
    image: "https://i.balaan.io/review/6523502cb5c5a4f919e34c9ca36025dd.jpg",
    score: 5,
    comments: []
  },
  {
    title: "가격대비 괜찮은거같아요. 배송도 빨리 왔어요",
    image: "https://i.balaan.io/review/91f3e182e2dcfe1ca2099d4706171afe.jpg",
    score: 4,
    comments: []
  },
  {
    title: "구매상품에 만족합니다",
    image: "https://i.balaan.io/review/8451b66acf14bf5a05cdd341b4adacd2.jpg",
    score: 4,
    comments: []
  },
  {
    title:
      "너무 빠른 배송 감사드립니다.!!🙏😉 너무 예뻐요 정품인정 입니다. 자주 이용할께요",
    image: "https://i.balaan.io/review/78beaf24ce73db8533610e7dea87e4fe.jpeg",
    score: 5,
    comments: []
  },
  {
    title:
      "로고 색이 랜덤이라 걱정했는데 원하던 색으로 와서 너무 좋았어요! 옷도 생각했던대로 예뻐용 감사합니당 ~~",
    image: "https://i.balaan.io/review/e1e320eb4e3c9096445825c70e08dc8a.jpg",
    score: 5,
    comments: []
  },
  {
    title: "색감이 어둡네요 와인과 핑크사이?",
    image: "https://i.balaan.io/review/f57d12cadf05345e5860ff7834c5ae29.png",
    score: 3,
    comments: []
  },
  {
    title: "배송과 상품 너무 만족합니다",
    image: "https://i.balaan.io/review/56ec90af71f0cb428057319c64406e21.jpg",
    score: 5,
    comments: []
  },
  {
    title:
      "딸램 생일선물인데 맘에들어해서 다행이에요. 포장상태 꼼꼼 사전에 검수영상도보내주시고 믿을만합니다~^^",
    image: "https://i.balaan.io/review/64b747b03a020281c7b40a075ec42504.jpg",
    score: 5,
    comments: []
  },
  {
    title:
      "정말 다 이쁜데,, 사용한지 일주일만에 어깨부분 실팝이 뜯어지기 시작했어요ㅠ",
    image: "https://i.balaan.io/review/bfb8f4a300a01650ea19ae9bc70101b4.jpeg",
    score: 5,
    comments: []
  },
  {
    title: "배송 완전 빨리왔네요! 너무 이뻐요!",
    image: "https://i.balaan.io/review/18cd2f6fafab7adc4bdcc5d32b0d851d.jpeg",
    score: 5,
    comments: []
  },
  {
    title:
      "평소 240을 신어 38사이즈 구매했는데 발볼이 좁아서인지 생각보다 크네요 그래도 신고 다닐만해요 ",
    image: "https://i.balaan.io/review/74b7ad2b517a3f306328fa364d06e739.jpg",
    score: 4,
    comments: []
  },
  {
    title:
      "평소 230 신는데 덩크로우  반업 하라는 얘기가 많아서 235로 구매했는데 딱이네요 . 배송도 그렇게 늦지 않았어요 ",
    image: "https://i.balaan.io/review/1f9ea178ce33ed3401c588777e7be3d6.jpg",
    score: 4,
    comments: []
  },
  {
    title: "너무좋아요사이즈던컬러던",
    image: "https://i.balaan.io/review/2dc19b06cd8481fe1b5ecd66d924580d.jpg",
    score: 5,
    comments: []
  },
  {
    title:
      "최소한의 제품은 확인하고 보내야 하지 않을까요? 판매제품에 블랙이라고 사진과 제품설명에 써놓고 핑크색을  보내는건 뭔지..송장엔 블랙이라 써놓고 뜯으면 반품 안됩니다를 하려고 그런건지….암튼 첫 구매해봤는데  첫발부터 엉망이네요…",
    image: "https://i.balaan.io/review/131bebf48ef3221f40b72bb0d7c8e635.jpeg",
    score: 1,
    comments: []
  },
  {
    title:
      "카드지갑 처음구매하는데 너무 간편하고 좋네요. 구찌 제품은 처음 이용하는데 디자인 좋은거같습니다 추천드립니다",
    image: "https://i.balaan.io/review/ccd033f6e47eab105d5386c9beec5be7.jpg",
    score: 5,
    comments: []
  },
  {
    title:
      "하 엄청 고민하다가 샀는데 너무 마음에 들어요ㅠ 좀 작긴 한데 알고 산거라서  완전 만족해요",
    image: "https://i.balaan.io/review/355d5ef7d92bfd6b5c4001d406047877.jpeg",
    score: 5,
    comments: []
  },
  {
    title:
      "가죽은 부드럽고 각잡혀 있어서 세워만 놔도 고급진 느낌이네요. 골드부분도 빈티지 골드느낌이라 더 맘에 듭니다. 전체적으로 심플하지만 견고하고 좋아요~ 꾸안꾸 시크한 느낌?ㅎㅎ 데일리 가방으로 쓰려고 샀습니다~ 카드지갑 폰 열쇠 핸드크림 정도 넣고 다니기 좋네요~  믿고 구매했지만 개인적으로  꼼꼼히 살펴보았네요. 흠잡을데가 없네요^^ 발란 첫구매 성공적! ",
    image: "https://i.balaan.io/review/f22194b29c8ce4656709bb2fbe2963a7.jpg",
    score: 5,
    comments: []
  },
  {
    title: "나에게 선물 만족하고 잘 쓸게요",
    image: "https://i.balaan.io/review/55f79ce41c84cd95d8577ab3cfa641b2.jpg",
    score: 5,
    comments: []
  },
  {
    title:
      "사진하고 똑같고 너무 예뻐요 키높이 굽이 생각보다 높았어요. 사진을 배송오고 찍은게 없어서 이미 신어서 더러워진거고 깨끗하게 포장도 잘되있었어요",
    image: "https://i.balaan.io/review/8004d2dd434015428a6204cac4c05612.jpeg",
    score: 5,
    comments: []
  },
  {
    title:
      "빠른 배송과 최저가가 만족스러운 상품이었습니다. 선물로 줄 건데 포장 박스도 예쁘고 꼼꼼하게 잘 포장되어 왔습니다",
    image: "https://i.balaan.io/review/9fedccef710fcdb90e4b83fb7f40cb34.jpg",
    score: 5,
    comments: []
  }
];

export const dummyComments = [
  {
    id: 1,
    content: "도움돼요",
    reviewId: 30,
    createdAt: 1645590632818
  },
  {
    id: 2,
    content: "감사합니다!",
    reviewId: 30,
    createdAt: 1645590632800
  },
  {
    id: 3,
    content: "안녕하세요",
    reviewId: 30,
    createdAt: 1645590632800
  },
  {
    id: 4,
    content: "감사합니다!",
    reviewId: 29,
    createdAt: 1645590632800
  },
  {
    id: 5,
    content: "사진 잘 나왔네요",
    reviewId: 29,
    createdAt: 1645590632800
  },
  {
    id: 6,
    content: "후기 감사합니다",
    reviewId: 30,
    createdAt: 1645590632800
  }
];

function Review({ id, title, image, score, comments = [] }) {
  return {
    id,
    title,
    image,
    score,
    createdAt: Date.now() + id,
    comments,
    commentCnt: comments.length
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
      )
    })
  );
});

export const dummyReviews = reviews;
