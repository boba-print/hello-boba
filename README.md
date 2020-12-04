# BOBA ENTRANCE TEST

## 🎁 개발 환경 설정
<br />

노드 모듈 설치
```
yarn
```
```
npm i -g firebase-tools
```

모듈 설치시 꼭 **yarn**을 사용함. (firebase-tools 제외) 

package.json 에 정의된 모듈 이외에도 더 필요한 모듈이 있다면 추가해도 무관함. 단 삭제는 **지양**할 것.

해당 프로젝트는 Javascript로 구성되어 있으나, 만약 가능하다면 Typescript로 구현 할 것. 

**Mobx Store 구성 시 mobx-examples 프로젝트를 참조 할 것**

<br />

## ⛔ 해당 파일들은 수정하지 말 것.

* src/index.css

* src/react-app-env.d.ts

* src/setupTests.js

* .gitignore

* public/*

<br />

## 📌 개발 요구 사항
web-app에서 Text Input을 제외한 모든 상태 관리는 mobx를 사용 할 것.

> ex) File 목록 보여주기, 작업 예약 목록 보여주기.

디자인보다는 **기능 개발**을 중시함.

<br />

## 📌 개발 요구서
> https://www.notion.so/Boba-41ebe9e2c8a044ecb43d41c115e29188

<br />

## 🚀 배포
다음 문서를 참고할 수 있음.

> https://firebase.google.com/docs/cli/targets

> https://firebase.google.com/docs/hosting/multisites

배포 시 firebase 프로젝트 **하나**에 두 개의 빌드 결과물(web-app, kiosk)을 호스팅 할 것.

## 🤔 참고 할 강의

[🔥Firebase 공식 가이드](https://firebase.google.com/docs/web/setup)

[🔥Firebase 공식 레퍼런스](https://firebase.google.com/docs/reference/js)

[👨🏻‍🦱노마드 코더 Firebase 강의 (무료강좌)](https://nomadcoders.co/nwitter)

[mobX 공식 레퍼런스](https://mobx.js.org/README.html)
