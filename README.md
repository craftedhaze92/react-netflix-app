# React Netflix Clone

TMDB API를 활용한 Netflix UI 클론 프로젝트

> **Demo**: https://craftedhaze92.github.io/react-netflix-app

## 기술 스택

| 분류      | 기술                          |
| --------- | ----------------------------- |
| Framework | React 19, TypeScript          |
| Build     | Vite 7                        |
| 상태 관리 | Zustand, TanStack React Query |
| 라우팅    | React Router v7               |
| 스타일링  | Sass, styled-components       |
| HTTP      | Axios                         |
| UI        | Swiper                        |

## 주요 기능

- **메인 페이지** — 배너 영화 노출 및 카테고리별(Netflix Originals, Trending, Top Rated, Action, Comedy) 영화 슬라이드
- **영화 상세** — 영화 선택 시 모달로 상세 정보 및 YouTube 예고편 표시
- **검색** — 네비게이션 바 검색으로 영화 실시간 검색 (debounce 적용)
- **상세 페이지** — URL 기반(`/:movieId`) 개별 영화 상세 페이지

## 프로젝트 구조

```
src/
├── api/            # Axios 인스턴스 및 TMDB API 요청 정의
├── assets/         # 정적 리소스 (로고 등)
├── components/     # 공통 컴포넌트 (Banner, Nav, Row, Footer, MovieModal)
├── hooks/          # 커스텀 훅 (useDebounce, useOnClickOutside)
├── pages/          # 페이지 컴포넌트 (MainPage, DetailPage, SearchPage)
├── store/          # Zustand 스토어 (MovieModal 상태)
└── types.ts        # 공통 타입 정의
```

## 시작하기

### 사전 요구사항

- Node.js 18+
- pnpm
- [TMDB API Key](https://www.themoviedb.org/settings/api)

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 환경 변수 설정
cp .env.example .env
# .env 파일에 VITE_MOVIE_DB_API_KEY 값 입력

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# GitHub Pages 배포
pnpm publish-pages
```

## 스크립트

| 명령어               | 설명                            |
| -------------------- | ------------------------------- |
| `pnpm dev`           | 개발 서버 실행                  |
| `pnpm build`         | TypeScript 체크 + 프로덕션 빌드 |
| `pnpm preview`       | 빌드 결과물 미리보기            |
| `pnpm lint`          | ESLint 실행                     |
| `pnpm format`        | Prettier 포맷팅                 |
| `pnpm publish-pages` | GitHub Pages 배포               |
