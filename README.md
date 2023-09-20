nest js 개발
Postgresql과 연동하여 개발함.


1.기능 요약
1)Todo 할 일
1-1) Todolist 조회 기능
- 모든 조회
- uid 별 조회
- 연도, 월, 유저 별 조회
- 연도, 월, 일, 유저 별 조회

1-2) Todolist 생성 기능
- 로그인 되어 있는 유저 uid와 더불어 todo 생성

1-3) Todolist 업데이트 기능
- 작업을 마친 todo는 finish 할 수 있도록 구현

1-4) Todolist 삭제 기능
- 제대로 만들지 못한 todolist는 삭제

2)user 유저

2-1) user
- 모든 조회
- uid별 조회
- userid별 조회-> 중복확인을 위해

2-2) user 생성 

2-3) user 삭제

2-4) user 업데이트

3)authentification 권한

3-1)로그인 기능 -> 아이디와 비밀번호를 통해 user가 있으면 토큰 발급.

Jwt와 PassportStrategy를 통해 토큰 발급 구현
