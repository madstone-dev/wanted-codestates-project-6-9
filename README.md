# [**Project 1**] 발란 실습 과제

## 🔗 배포 주소

- 아래 URL을 클릭하면 배포된 페이지로 이동합니다.

https://madstone-dev.github.io/wanted-codestates-project-6-9/#/
    

<br>

## ****⚙****개발 환경

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

<br>

## 🧑 참여 멤버

- 강현구 : 리뷰 등록 페이지 구현
- 김도연 : 리뷰 리스트 페이지 구현
- 정규용: 리뷰 리스트 페이지 구현
- 유지수 : 리뷰 상세 페이지 구현
- 유혜정: 리뷰 상세 페이지 구현
- 손한빈:  리뷰 리덕스 모듈 구현
- 박세은 : 댓글 리덕스 모듈  구현

<br>

## 🕹  설치 및 시작방법

```
# install dependencies
 $ npm install

# serve with hot reload at localhost:3000
 $ npm start
```

<br>

## 📝 구현 목록

상품 리뷰 기능 구현 : 고객이 리뷰를 등록 하고 리뷰를 확인할 수 있는 기능을 구현

리뷰와 댓글의 정보는 `redux`를 통해 관리하였습니다.

### ✅ 리뷰 등록 페이지
![리뷰등록 (1)](https://user-images.githubusercontent.com/81206124/155338386-838818a9-45e4-4359-9e8d-add5fbf25d58.gif)


- 리뷰 제목, 이미지 선택, 평점등록 가능

### ✅ 리뷰 리스트 페이지
![정렬](https://user-images.githubusercontent.com/81206124/155333246-48ad7e25-a8a2-41ea-9ffc-45bd3a473bed.gif)  ![무한스크롤 ](https://user-images.githubusercontent.com/81206124/155337003-8fa37dd4-bced-4492-951c-999afce9e77b.gif)



- 정렬 (최신순, 리뷰카운트순, 랜덤)
- 리뷰 목록 표시 형태선택 가능(그리드 뷰, 리스트 뷰)
- 리뷰리스트 무한 스크롤

### ✅ 리뷰 상세 페이지

![댓글작성](https://user-images.githubusercontent.com/81206124/155333048-0cde7c36-5b72-429f-8c07-636293519c90.gif)     ![좋아요:링크](https://user-images.githubusercontent.com/81206124/155336856-63a82264-ca47-4ee1-baab-1cb63b17a28e.gif)

- 리뷰 댓글 달기
- 좋아요
- 링크 공유

<br>

## 🗂 프로젝트 구조
```
📁src
│  App.js
│  constances.js
│  index.js
│  reset.css
│  store.js
│
├─📁components
│	│ Filter.js
│	│ Header.js
│	│ ProductsCard.js
│	│ ScrollToTop.js
│       ├─📁Detail
│       ├─📁Register
│       └─📁ReviwList
│
├─📁pages
│      Detail.js
│      Register.js
│      ReviewList.js
│      index.js
│
├─📁reducers
│	  reviewReducer.js
│			
└─📁src_assets
```
