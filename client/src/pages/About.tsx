import { useLocation } from "wouter";
import Layout from "@/components/Layout";

export default function About() {
  const location = useLocation();
  const pathSegments = location[0].split("/").filter(Boolean);
  const tabFromPath = pathSegments[pathSegments.length - 1];

  const tabs = [
    { id: "greeting", label: "인사말" },
    { id: "philosophy", label: "경영이념" },
    { id: "history", label: "회사연혁" },
    { id: "location", label: "찾아오시는길" },
  ];

  const activeTab = ["greeting", "philosophy", "history", "location"].includes(tabFromPath)
    ? tabFromPath
    : "greeting";

  return (
    <Layout>
      <div className="py-16" style={{ background: "oklch(0.28 0.08 250)" }}>
        <div className="container">
          <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: "oklch(0.65 0.08 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
            ABOUT ASTC
          </div>
          <h1 className="text-4xl font-black text-white">회사소개</h1>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-white border-b border-border shadow-sm">
        <div className="container">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`/about/${tab.id}`}
                className={`flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent hover:text-blue-600"
                }`}
                style={activeTab === tab.id ? { borderColor: "oklch(0.55 0.18 255)", color: "oklch(0.55 0.18 255)" } : { color: "oklch(0.45 0.03 250)" }}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container">
          {activeTab === "greeting" && (
            <div>
              {/* CEO 인사말 제목 */}
              <div className="text-center mb-12">
                <div className="inline-block">
                  <h2 className="text-3xl font-black" style={{ color: "oklch(0.18 0.04 250)" }}>
                    CEO 인사말
                  </h2>
                  <div className="h-1 w-16 mx-auto mt-3" style={{ background: "oklch(0.55 0.18 255)" }}></div>
                </div>
              </div>

              {/* 좌측 텍스트 + 우측 이미지 레이아웃 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                {/* 좌측: 파란색 배경 텍스트 박스 */}
                <div
                  className="rounded-2xl p-10 text-white"
                  style={{ background: "oklch(0.28 0.08 250)" }}
                >
                  <h3 className="text-2xl font-black mb-6">에이스티씨</h3>
                  <p className="text-base leading-relaxed mb-4 opacity-90">
                    에이스티씨는 1980년 이후부터 FRP 산업에 필요한 모든 원자재와 완제품을 공급해온 전문 대리점입니다.
                  </p>
                  <p className="text-base leading-relaxed mb-4 opacity-90">
                    20년 이상의 경험과 노하우를 바탕으로 합성수지, 유리섬유, 페인트 등 최고 품질의 제품을 공급하고 있으며, FRP 완제품(내산탱크, 물탱크, 욕조 등)의 기술적 지원도 제공합니다.
                  </p>
                  <p className="text-base leading-relaxed opacity-90">
                    고객 여러분의 신뢰와 만족을 최우선으로 생각하며, 지속적인 기술 개발과 제품 개선을 통해 FRP 산업의 발전에 기여하겠습니다.
                  </p>
                </div>

                {/* 우측: 대표 정보 박스 */}
                <div className="flex flex-col items-center">
                  <div
                    className="rounded-2xl overflow-hidden w-full max-w-sm aspect-[3/4] flex items-center justify-center mb-6"
                    style={{ background: "oklch(0.96 0.005 250)" }}
                  >
                    <div className="text-center p-8">
                      <div
                        className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-black"
                        style={{ background: "oklch(0.28 0.08 250)" }}
                      >
                        장
                      </div>
                      <div className="font-black text-2xl mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>
                        장 성 수
                      </div>
                      <div className="text-base mb-2" style={{ color: "oklch(0.52 0.02 250)" }}>
                        에이스티씨 대표이사
                      </div>
                      <div className="text-xs" style={{ color: "oklch(0.65 0.02 250)", fontFamily: "'IBM Plex Mono', monospace" }}>
                        JANG SUNG SOO
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm" style={{ color: "oklch(0.45 0.02 250)" }}>
                    FRP 산업의 신뢰할 수 있는 파트너로서 최고의 품질과 서비스를 제공하겠습니다.
                  </p>
                </div>
              </div>

              {/* 하단 강조 섹션 */}
              <div
                className="rounded-2xl p-12 text-center"
                style={{ background: "oklch(0.96 0.005 250)" }}
              >
                <div className="text-xs font-semibold tracking-widest mb-3" style={{ color: "oklch(0.55 0.18 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
                  OUR COMMITMENT
                </div>
                <h3 className="text-2xl font-black mb-4" style={{ color: "oklch(0.18 0.04 250)" }}>
                  FRP 산업의 모든 것을 공급합니다
                </h3>
                <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "oklch(0.35 0.02 250)" }}>
                  합성수지, 유리섬유, 페인트, 부자재부터 내산탱크, 물탱크, 욕조 등 완제품까지 FRP 산업에 필요한 모든 제품을 한 곳에서 공급받으실 수 있습니다.
                </p>
              </div>
            </div>
          )}

          {activeTab === "philosophy" && (
            <div>
              <div className="text-center mb-12">
                <div className="inline-block">
                  <h2 className="text-3xl font-black" style={{ color: "oklch(0.18 0.04 250)" }}>
                    경영이념
                  </h2>
                  <div className="h-1 w-16 mx-auto mt-3" style={{ background: "oklch(0.55 0.18 255)" }}></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Best", subtitle: "최고의 품질", desc: "고객이 요구하는 최고의 품질을 제공하기 위해 끊임없이 노력합니다." },
                  { title: "Belief", subtitle: "신뢰", desc: "고객과의 신뢰 관계를 가장 소중한 자산으로 여기며 성실하게 임합니다." },
                  { title: "Business", subtitle: "전문성", desc: "FRP 산업의 전문가로서 최적의 솔루션을 제공합니다." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-8 text-center transition-transform hover:scale-105"
                    style={{ background: "oklch(0.96 0.005 250)" }}
                  >
                    <div
                      className="text-6xl font-black mb-3"
                      style={{ color: "oklch(0.28 0.08 250)" }}
                    >
                      {item.title}
                    </div>
                    <h3 className="text-xl font-black mb-4" style={{ color: "oklch(0.18 0.04 250)" }}>
                      {item.subtitle}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: "oklch(0.35 0.02 250)" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div>
              <div className="text-center mb-12">
                <div className="inline-block">
                  <h2 className="text-3xl font-black" style={{ color: "oklch(0.18 0.04 250)" }}>
                    회사연혁
                  </h2>
                  <div className="h-1 w-16 mx-auto mt-3" style={{ background: "oklch(0.55 0.18 255)" }}></div>
                </div>
              </div>
              <div className="space-y-4 max-w-2xl mx-auto">
                {[
                  { year: "1980년", event: "에이스상사 설립 - FRP 산업 진출" },
                  { year: "1990년", event: "합성수지 및 유리섬유 수입 판매 시작" },
                  { year: "2000년", event: "페인트 및 부자재 라인 확대" },
                  { year: "2010년", event: "FRP 완제품(내산탱크, 물탱크) 공급 시작" },
                  { year: "2015년", event: "기술 지원 센터 개설" },
                  { year: "2020년", event: "에이스티씨로 사명 변경 - 글로벌 시장 진출" },
                  { year: "2024년", event: "FRP 산업의 신뢰할 수 있는 파트너로 성장" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 pb-6 border-b border-border last:border-b-0">
                    <div
                      className="font-black text-lg flex-shrink-0 w-24"
                      style={{ color: "oklch(0.55 0.18 255)" }}
                    >
                      {item.year}
                    </div>
                    <div style={{ color: "oklch(0.35 0.02 250)" }}>{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "location" && (
            <div>
              <div className="text-center mb-12">
                <div className="inline-block">
                  <h2 className="text-3xl font-black" style={{ color: "oklch(0.18 0.04 250)" }}>
                    찾아오시는길
                  </h2>
                  <div className="h-1 w-16 mx-auto mt-3" style={{ background: "oklch(0.55 0.18 255)" }}></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-black mb-6" style={{ color: "oklch(0.18 0.04 250)" }}>
                    에이스티씨
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold mb-1" style={{ color: "oklch(0.55 0.18 255)" }}>
                        주소
                      </div>
                      <p style={{ color: "oklch(0.35 0.02 250)" }}>
                        대구광역시 서구 상리동
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1" style={{ color: "oklch(0.55 0.18 255)" }}>
                        전화
                      </div>
                      <p style={{ color: "oklch(0.35 0.02 250)" }}>
                        053-587-1106
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1" style={{ color: "oklch(0.55 0.18 255)" }}>
                        이메일
                      </div>
                      <p style={{ color: "oklch(0.35 0.02 250)" }}>
                        cine110@nate.com
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1" style={{ color: "oklch(0.55 0.18 255)" }}>
                        영업시간
                      </div>
                      <p style={{ color: "oklch(0.35 0.02 250)" }}>
                        평일 09:00 ~ 18:00<br />
                        토요일 09:00 ~ 13:00<br />
                        일요일 및 공휴일 휴무
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-2xl overflow-hidden aspect-square flex items-center justify-center"
                  style={{ background: "oklch(0.96 0.005 250)" }}
                >
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">📍</div>
                    <p style={{ color: "oklch(0.45 0.02 250)" }}>
                      지도는 추후 Google Maps로 연동될 예정입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
