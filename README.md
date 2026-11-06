# [AX 레시피 - 업무 프로세스 개선] (가산)

반복 업무를 진단하고 ChatGPT로 단계별 AI를 적용해 자동화 흐름을 구현하는 2회차(16시간) 과정의 수강생 안내 페이지입니다. 2026년 11월 10일·17일(화) 09:00–18:00, 가산테라타워 13층 1323호 한국산업지능화협회 교육장.

## 배포 방법 (GitHub Pages)

1. `ax-helloworldlabs` 조직에 새 저장소를 만듭니다. 저장소 이름이 주소가 됩니다. 예: `ax-recipe-process-gasan` → `https://ax-helloworldlabs.github.io/ax-recipe-process-gasan/`
2. 이 폴더 안의 파일을 모두 저장소 최상위에 올립니다. `.nojekyll`(숨김 파일)도 함께 올려 주세요.
3. 저장소 **Settings → Pages**에서 Source를 `Deploy from a branch`, Branch를 `main` / `/(root)`로 저장합니다.
4. 1–2분 뒤 위 주소에서 페이지가 열리는지 확인합니다.

## 무엇을 어디서 고치나

| 고칠 내용 | 파일 · 위치 |
|---|---|
| 페이지 제목·검색/공유 설명 | `index.html` `<head>`의 `<title>`, `meta description`, `og:*` |
| 사업명·과정명·소개 문구 | `index.html` `section.hero` (`.eyebrow`, `.course-label`, `h1`, `.hero-sub`, `.hero-desc`) |
| 날짜·시간·장소 요약 띠 | `index.html` `.event-strip` |
| 신분증 안내 배너 | `index.html` `.id-notice` |
| 준비물 카드 | `index.html` `#preparation` `.prep-card` |
| 일정 카드·장소·지도 링크 | `index.html` `#place` (`.schedule-card`, `.venue-card`) |
| 주소 복사 버튼의 주소 | `script.js` 첫 줄 `const address` |
| 커리큘럼 모듈(시간·과목명·세부 내용) | `index.html` `#curriculum` 의 회차별 `.day-label` 아래 `<details class="module">` |
| 점심시간 줄 | `index.html` `.lunch-break` |
| 교육 결과물 3가지 | `index.html` `.outcome` |
| 사전 안내 PDF·SafariON·카카오 채널·전화 | `index.html` `#resources`, 파일은 `assets/course-guide.pdf` |
| 하단 사업명·운영기관·홈페이지 | `index.html` `<footer>` |
| 모바일 하단 고정 바 | `index.html` `.mobile-bar` |
| Claude 유료 계정 1개월 지원·계정 정보 안내 | `index.html` `#support` |
| 색상 | `styles.css` 첫 줄 `:root` (`--green`, `--lime`, `--ink` 등) |

CSS·JS를 고친 뒤에는 `index.html`의 `styles.css?v=20261106-2`, `script.js?v=20261106-1` 끝 숫자를 1 올려 주세요(브라우저 캐시 갱신).

## 아직 넣지 않은 정보 / 확인할 정보

- **ChatGPT 유료 계정 1개월 지원**: 지원 기간(1개월)·계정 정보 당일 제공은 지난 과정 기준입니다.
- **교육장 출입 안내·가까운 역·입실 시간**: 정보가 없어 넣지 않았습니다. 필요하면 `.venue-card` 주소 아래에 추가하세요.
- **주차 안내**: 교육생 주차 지원 불가, 건물 주차장 유료(30분당 1,100원 / 1일권 11,000원), 공간 협소 안내를 `.parking-note`와 FAQ에 넣었습니다.
- **강사명**: 시간표(강보람)에 있으나 지난 페이지와 같이 표기하지 않았습니다.
- **공통 정보 재사용**: 사업명(2026 중소기업 인재키움 프리미엄 훈련과정), 준비물, 사전 안내 PDF, SafariON 로그인, 카카오 채널 Hello, AX, 전화 070-8833-7771.
