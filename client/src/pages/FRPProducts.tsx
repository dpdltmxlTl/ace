/*
 * ASTC FRP Finished Products Page
 * Categories: 내산탱크, 물탱크, 욕조&세면기, 기타
 */
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { ChevronRight, Package } from "lucide-react";

const categories = [
  { id: "acid-tank", label: "내산탱크" },
  { id: "water-tank", label: "물탱크" },
  { id: "bathtub", label: "욕조 & 세면기" },
  { id: "others", label: "기타 FRP 제품" },
];

const frpData: Record<string, {
  title: string;
  subtitle: string;
  intro: string;
  items: { name: string; desc: string; specs?: string[]; image?: string; workMethod?: string }[];
}> = {
  "acid-tank": {
    title: "내산탱크",
    subtitle: "Acid Resistant Tank",
    intro: "FRP 내산탱크는 강산, 강알칼리 등 각종 화학약품을 저장하기 위한 고성능 탱크입니다. 내식성 수지와 유리섬유를 사용하여 뛰어난 내화학성을 자랑합니다.",
    items: [
      {
        name: "FRP 내산탱크 (소형, 1~5톤)",
        desc: "소형 화학약품 저장에 적합한 FRP 내산탱크입니다. 경량이면서도 내식성이 뛰어납니다.",
        specs: ["용량: 1,000L ~ 5,000L", "재질: 비닐에스테르 수지 + 유리섬유", "내화학성: 강산, 강알칼리", "사용온도: -40°C ~ +80°C", "두께: 5~10mm"],
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/category_frp_tank-m7NwPRfrrBn6ofispZMEqT.webp",
        workMethod: "핸드레이업(Hand Lay-up) 공법으로 제작됩니다. 몰드에 겔코트를 도포한 후 유리섬유 매트와 수지를 교대로 적층하여 원하는 두께를 만들어 냅니다.",
      },
      {
        name: "FRP 내산탱크 (중형, 5~20톤)",
        desc: "중형 화학공장, 수처리 시설에 사용되는 내산탱크입니다.",
        specs: ["용량: 5,000L ~ 20,000L", "재질: 비닐에스테르 수지", "내화학성: 황산, 염산, 질산 등", "사용온도: -40°C ~ +100°C"],
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/hero_frp_industrial-bcM8Az2C5PCnfXeaBwkqzv.webp",
        workMethod: "필라멘트 와인딩(Filament Winding) 공법으로 제작됩니다. 연속 유리섬유 로빙을 회전하는 맨드릴에 일정 각도로 감아 높은 강도와 균일한 두께를 구현합니다.",
      },
      {
        name: "FRP 내산탱크 (대형, 20톤 이상)",
        desc: "대형 화학 저장 시설에 사용되는 대용량 내산탱크입니다.",
        specs: ["용량: 20,000L 이상", "재질: 비닐에스테르 수지 + 이소프탈산 수지", "내화학성: 각종 강산, 강알칼리"],
      },
    ],
  },
  "water-tank": {
    title: "물탱크",
    subtitle: "Water Storage Tank",
    intro: "FRP 물탱크는 가정용, 산업용 용수 저장에 사용되는 위생적이고 내구성이 뛰어난 탱크입니다. 녹이 슬지 않으며 위생적으로 안전합니다.",
    items: [
      {
        name: "FRP 패널형 물탱크",
        desc: "패널을 조립하여 현장에서 원하는 크기로 제작 가능한 물탱크입니다.",
        specs: ["패널 크기: 1000×1000mm", "재질: 일반용 폴리에스테르 수지", "내수성: 우수", "위생성: 식품위생법 기준 적합"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        workMethod: "SMC(Sheet Molding Compound) 공법으로 패널을 제작하여 현장에서 볼트 조립합니다. 이음부는 FRP 수지로 마감 처리합니다.",
      },
      {
        name: "FRP 일체형 물탱크",
        desc: "이음부가 없는 일체형 구조로 누수 걱정이 없는 물탱크입니다.",
        specs: ["용량: 500L ~ 10,000L", "재질: 식품위생용 수지", "이음부: 없음 (일체형)"],
      },
    ],
  },
  "bathtub": {
    title: "욕조 & 세면기",
    subtitle: "Bathtub & Washbasin",
    intro: "FRP 욕조와 세면기는 경량이면서도 내구성이 뛰어나며, 다양한 디자인과 색상으로 제작 가능합니다.",
    items: [
      {
        name: "FRP 욕조 (일반형)",
        desc: "일반 가정용 FRP 욕조입니다. 가볍고 보온성이 우수합니다.",
        specs: ["크기: 1500×750×600mm", "재질: 겔코트 + 폴리에스테르 수지", "두께: 4~6mm", "색상: 백색, 아이보리"],
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
        workMethod: "암몰드(Female Mold)에 겔코트를 도포한 후 유리섬유 매트와 수지를 적층하여 제작합니다. 표면은 겔코트로 마감하여 광택과 내수성을 부여합니다.",
      },
      {
        name: "FRP 세면기",
        desc: "다양한 형태와 크기로 제작 가능한 FRP 세면기입니다.",
        specs: ["재질: 겔코트 + 폴리에스테르 수지", "색상: 백색, 각종 색상 주문 가능"],
      },
    ],
  },
  "others": {
    title: "기타 FRP 제품",
    subtitle: "Other FRP Products",
    intro: "내산탱크, 물탱크 외에도 다양한 FRP 완제품을 제작 공급합니다. 고객의 요구에 맞는 맞춤형 제품 제작도 가능합니다.",
    items: [
      {
        name: "FRP 덕트 & 배관",
        desc: "화학약품 이송에 사용되는 내식성 FRP 덕트 및 배관입니다.",
        specs: ["직경: 50mm ~ 1000mm", "재질: 비닐에스테르 수지", "내화학성: 우수"],
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
      },
      {
        name: "FRP 그레이팅",
        desc: "화학 공장, 수처리 시설의 바닥재로 사용되는 FRP 그레이팅입니다.",
        specs: ["규격: 1000×4000mm", "재질: 폴리에스테르 수지", "미끄럼 방지: 표면 처리"],
      },
      {
        name: "FRP 맨홀 커버",
        desc: "경량이면서도 강도가 높은 FRP 맨홀 커버입니다.",
        specs: ["하중: 12.5톤, 25톤", "재질: SMC", "색상: 녹색, 회색"],
      },
      {
        name: "기타 주문 제작",
        desc: "고객의 요구에 맞는 다양한 FRP 제품을 주문 제작합니다. 도면 또는 샘플 제공 시 제작 가능합니다.",
        specs: ["제작 방법: 핸드레이업, 필라멘트 와인딩, RTM 등", "납기: 협의"],
      },
    ],
  },
};

export default function FRPProducts() {
  const [location] = useLocation();
  const [activeCategory, setActiveCategory] = useState("acid-tank");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  // 경로에서 카테고리 추출
  useEffect(() => {
    const pathSegments = location.split("/");
    const categoryFromPath = pathSegments[pathSegments.length - 1];
    
    if (Object.keys(frpData).includes(categoryFromPath)) {
      setActiveCategory(categoryFromPath);
    } else {
      setActiveCategory("acid-tank");
    }
    setExpandedItem(null);
  }, [location]);

  const current = frpData[activeCategory] || frpData["acid-tank"];

  return (
    <Layout>
      {/* Page Header */}
      <div className="py-16" style={{ background: "oklch(0.28 0.08 250)" }}>
        <div className="container">
          <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: "oklch(0.65 0.08 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
            FRP FINISHED PRODUCTS
          </div>
          <h1 className="text-4xl font-black text-white">F.R.P 완제품</h1>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-16 z-40 bg-white border-b border-border shadow-sm">
        <div className="container">
          <div className="flex overflow-x-auto">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/frp-products/${cat.id}`}
                className="flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-all duration-200"
                style={activeCategory === cat.id
                  ? { borderColor: "oklch(0.55 0.18 255)", color: "oklch(0.55 0.18 255)" }
                  : { borderColor: "transparent", color: "oklch(0.45 0.03 250)" }}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="container">
          {/* Category Header */}
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-widest mb-1" style={{ color: "oklch(0.55 0.18 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
              {current.subtitle}
            </div>
            <h2 className="text-3xl font-black mb-3" style={{ color: "oklch(0.18 0.04 250)" }}>{current.title}</h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "oklch(0.45 0.02 250)" }}>{current.intro}</p>
          </div>

          {/* Product List */}
          <div className="space-y-6">
            {current.items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                style={{ background: "white" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {item.image ? (
                    <div className="md:col-span-1 h-56 md:h-auto overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="md:col-span-1 h-32 md:h-auto flex items-center justify-center" style={{ background: "oklch(0.96 0.005 250)" }}>
                      <Package size={48} style={{ color: "oklch(0.75 0.04 250)" }} />
                    </div>
                  )}
                  <div className="md:col-span-2 p-6">
                    <h3 className="font-black text-lg mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>{item.name}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.45 0.02 250)" }}>{item.desc}</p>

                    {item.specs && (
                      <div className="mb-4">
                        <div className="text-xs font-bold mb-2" style={{ color: "oklch(0.28 0.08 250)" }}>주요 사양</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {item.specs.map((spec, j) => (
                            <div key={j} className="flex items-start gap-2 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.35 0.02 250)" }}>
                              <span style={{ color: "oklch(0.55 0.18 255)" }}>▸</span>
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.workMethod && (
                      <div>
                        <button
                          onClick={() => setExpandedItem(expandedItem === i ? null : i)}
                          className="flex items-center gap-1.5 text-xs font-bold transition-colors"
                          style={{ color: "oklch(0.55 0.18 255)" }}
                        >
                          <span>작업방법 보기</span>
                          <ChevronRight size={12} className={`transition-transform ${expandedItem === i ? "rotate-90" : ""}`} />
                        </button>
                        {expandedItem === i && (
                          <div
                            className="mt-3 p-4 rounded-xl text-sm leading-relaxed"
                            style={{ background: "oklch(0.96 0.005 250)", color: "oklch(0.35 0.02 250)", borderLeft: "3px solid oklch(0.55 0.18 255)" }}
                          >
                            <div className="font-bold mb-1" style={{ color: "oklch(0.28 0.08 250)" }}>작업방법</div>
                            {item.workMethod}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-10 flex gap-3">
            <a
              href="tel:053-587-1106"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border-2 transition-all"
              style={{ borderColor: "oklch(0.28 0.08 250)", color: "oklch(0.28 0.08 250)" }}
            >
              전화 문의
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
