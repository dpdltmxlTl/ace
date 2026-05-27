# 에이스티씨 웹사이트 디자인 아이디어

## 배경
에이스티씨(ASTC)는 FRP(섬유강화플라스틱) 관련 원자재 및 완제품을 취급하는 전문 대리점입니다.
FRP 합성수지, 유리섬유, 페인트, 부자재 등을 공급하며, 기술 지원과 고객 소통을 중시합니다.

---

<response>
<idea>
**Design Movement**: Industrial Precision — 산업 기술 미학 (Bauhaus + 현대 기업 테크)

**Core Principles**:
1. 강철과 섬유의 물성을 시각화한 텍스처와 레이어 구성
2. 정보 위계가 명확한 그리드 기반 레이아웃
3. 기술적 신뢰감을 주는 모노크롬 + 포인트 컬러 조합
4. 데이터 테이블과 스펙 시트를 아름답게 표현

**Color Philosophy**:
- 기본: 딥 네이비 (#0D1B2A) + 순백 (#FFFFFF)
- 포인트: 산업용 오렌지 (#E85D04) — 안전, 에너지, 전문성
- 보조: 미드 그레이 (#6B7280), 라이트 스틸 (#E5E7EB)
- 배경 텍스처: 미세한 카본 패턴

**Layout Paradigm**:
- 좌측 고정 사이드바 + 우측 콘텐츠 영역 (데스크탑)
- 섹션 간 사선 분리선 (clip-path diagonal cuts)
- 제품 카드: 가로 스크롤 슬라이더

**Signature Elements**:
1. 헤더에 미세한 메탈릭 그라디언트 라인
2. 섹션 타이틀에 얇은 수직 오렌지 바
3. 제품 카드 호버 시 오렌지 하단 보더 슬라이드 인

**Interaction Philosophy**:
- 스크롤 시 섹션 페이드인 (Intersection Observer)
- 제품 카드 호버 시 이미지 줌 + 정보 오버레이
- 네비게이션 드롭다운 슬라이드 다운

**Animation**:
- 페이지 진입: 좌→우 슬라이드 (0.4s ease-out)
- 카드 호버: scale(1.02) + shadow 증가 (0.2s)
- 숫자 카운터 애니메이션 (통계 섹션)

**Typography System**:
- 헤딩: Noto Sans KR Bold (700) — 강직한 한국어 표현
- 서브헤딩: Noto Sans KR Medium (500)
- 본문: Noto Sans KR Regular (400)
- 영문 강조: IBM Plex Mono — 기술 스펙 표기용
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement**: Clean Corporate Tech — 세련된 기업 기술 미학 (Apple + B2B SaaS)

**Core Principles**:
1. 공백을 적극 활용한 브리딩 레이아웃
2. 카드 기반 콘텐츠 구조로 정보 소화 용이
3. 미묘한 그라디언트와 글래스모피즘 요소
4. 모바일 퍼스트 반응형 설계

**Color Philosophy**:
- 기본: 순백 (#FFFFFF) + 라이트 그레이 (#F8FAFC)
- 주색: 딥 블루 (#1E3A5F) — 신뢰, 전문성
- 포인트: 테크 블루 (#2563EB) — CTA, 링크
- 보조: 슬레이트 (#475569)

**Layout Paradigm**:
- 상단 고정 네비게이션 + 풀스크린 히어로
- 섹션별 교차 배경색 (흰색 ↔ 연회색)
- 3컬럼 카드 그리드 (제품 카테고리)

**Signature Elements**:
1. 히어로 섹션 배경 파티클 애니메이션
2. 제품 카테고리 카드에 아이콘 + 이미지 조합
3. 통계 숫자 강조 섹션

**Interaction Philosophy**:
- 부드러운 스크롤 스냅
- 호버 시 카드 elevation 증가
- 메가 드롭다운 네비게이션

**Animation**:
- 스크롤 트리거 페이드업 (0.5s)
- 버튼 호버: 배경색 전환 (0.15s)
- 히어로 텍스트 타이핑 효과

**Typography System**:
- 헤딩: Noto Sans KR Black (900) / Bold (700)
- 본문: Noto Sans KR Regular (400)
- 영문: Roboto Condensed — 기술 수치 표기
</idea>
<probability>0.07</probability>
</response>

<response>
<idea>
**Design Movement**: Technical Blueprint — 도면 미학 (Engineering + Precision Manufacturing)

**Core Principles**:
1. 청사진(Blueprint) 스타일의 그리드 배경
2. 기술 도면처럼 정확한 수치와 레이블 표기
3. 모노스페이스 폰트와 세리프 폰트의 혼합
4. 다크 배경에 밝은 텍스트로 기술적 분위기

**Color Philosophy**:
- 배경: 다크 네이비 (#0A1628) — 청사진 배경
- 주색: 테크 블루 (#00B4D8) — 청사진 선
- 포인트: 화이트 (#FFFFFF) + 옐로우 (#FFD60A)
- 보조: 미드 블루 (#023E8A)

**Layout Paradigm**:
- 비대칭 분할 레이아웃 (60/40 split)
- 도면 격자 배경 패턴
- 좌측 정렬 타이포그래피

**Signature Elements**:
1. 섹션 구분선 대신 도면 스타일 점선
2. 제품 스펙 테이블 도면 스타일
3. 코너 마커 장식 요소

**Interaction Philosophy**:
- 도면 선 드로잉 애니메이션
- 호버 시 청사진 스캔 효과
- 로딩 시 도면 그리기 효과

**Animation**:
- SVG 선 드로잉 (stroke-dashoffset)
- 스캔 라인 효과
- 글리치 텍스트 효과 (미묘하게)

**Typography System**:
- 헤딩: Noto Sans KR Bold + IBM Plex Mono
- 본문: Noto Sans KR Regular
- 수치: IBM Plex Mono — 기술 스펙
</idea>
<probability>0.06</probability>
</response>

---

## 선택된 디자인

**Clean Corporate Tech** 접근법을 채택합니다.

FRP 산업 전문 기업으로서 신뢰성과 전문성을 전달하면서도, 현대적이고 접근하기 쉬운 인터페이스를 구현합니다. 딥 블루 컬러 팔레트로 기업 신뢰감을 표현하고, evct.kr 스타일의 카드형 카테고리 디자인을 적용합니다.
