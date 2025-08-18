# HAE:YUN Landing

단순 정보 제공용 랜딩페이지 (해윤 소개 / 방짜유기 / 아큐포인트 / 연락).  
Stack: Vite + React + Tailwind CSS + Framer Motion

## 빠른 시작
```bash
npm install
npm run dev
```

## 이미지 파일 교체 안내

현재 `public/images/` 디렉토리의 이미지들은 임시 플레이스홀더입니다. 
실제 배포 전에 사용자가 촬영한 방짜유기 사진으로 교체해주세요:

- `haeyun-tool.svg` → `haeyun-tool.jpg` (800×600)
- `haeyun-detail-1.svg` → `haeyun-detail-1.jpg` (600×600)
- `haeyun-detail-2.svg` → `haeyun-detail-2.jpg` (600×600)
- `haeyun-detail-3.svg` → `haeyun-detail-3.jpg` (600×600)
- `haeyun-detail-4.svg` → `haeyun-detail-4.jpg` (600×600)

**주의**: SVG 파일을 JPG로 교체할 때는 App.jsx의 이미지 경로도 함께 수정해야 합니다.
