/*
 * ASTC Products Page
 * Categories: 합성수지, 유리섬유, 페인트&희석제, 부자재
 */
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { ChevronRight, Package, Info } from "lucide-react";

const categories = [
  { id: "resin", label: "합성수지" },
  { id: "fiberglass", label: "유리섬유" },
  { id: "paint", label: "페인트 & 희석제" },
  { id: "accessories", label: "부자재" },
];

const productData: Record<string, {
  title: string;
  subtitle: string;
  intro: string;
  items: { name: string; desc: string; specs?: string[]; image?: string }[];
}> = {
  resin: {
    title: "합성수지",
    subtitle: "Synthetic Resin",
    intro: "FRP 제조에 사용되는 불포화폴리에스테르 수지 및 비닐에스테르 수지를 공급합니다. 일반용, 내식용, 내화학용 등 다양한 용도에 맞는 수지를 선택하실 수 있습니다.",
    items: [
      {
        name: "일반용 수지 (General Purpose Resin)",
        desc: "일반적인 FRP 성형에 사용되는 범용 폴리에스테르 수지입니다. 작업성이 우수하고 경제적입니다.",
        specs: ["점도: 300~500 cps", "겔타임: 15~25분 (25°C)", "경화시간: 30~60분", "인장강도: 50~60 MPa"],
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/category_resin-CwLjdxH4XeWYPhDbTjPda4.webp",
      },
      {
        name: "내식용 수지 (Corrosion Resistant Resin)",
        desc: "화학약품, 산, 알칼리에 대한 내성이 뛰어난 수지입니다. 화학 탱크, 배관 등에 사용됩니다.",
        specs: ["내산성: 우수", "내알칼리성: 우수", "내용제성: 양호", "사용온도: -40°C ~ +120°C"],
      },
      {
        name: "비닐에스테르 수지 (Vinyl Ester Resin)",
        desc: "에폭시 수지의 내화학성과 폴리에스테르 수지의 작업성을 겸비한 고성능 수지입니다.",
        specs: ["내화학성: 최우수", "기계적 강도: 우수", "내충격성: 우수", "가격: 고가"],
      },
      {
        name: "투명 수지 (Clear Resin)",
        desc: "투명도가 높아 채광용 FRP 패널, 장식품 등에 사용되는 수지입니다.",
        specs: ["투명도: 90% 이상", "UV 안정성: 양호", "황변 저항성: 우수"],
      },
      {
        name: "겔코트 (Gel Coat)",
        desc: "FRP 제품의 표면 마감에 사용되는 특수 수지입니다. 내후성, 내수성이 우수합니다.",
        specs: ["색상: 백색, 투명, 각종 색상", "두께: 0.3~0.5mm", "내후성: 우수", "광택: 우수"],
      },
      {
        name: "촉매 (Catalyst / MEKP)",
        desc: "수지 경화에 사용되는 메틸에틸케톤퍼옥사이드(MEKP) 촉매입니다.",
        specs: ["사용량: 수지 대비 1~2%", "보관온도: 25°C 이하", "보관기간: 6개월"],
      },
    ],
  },
  fiberglass: {
    title: "유리섬유",
    subtitle: "Fiber Glass",
    intro: "FRP 보강재로 사용되는 다양한 형태의 유리섬유 제품을 공급합니다. 촙드 스트랜드 매트, 로빙, 직물 등 용도에 맞는 제품을 선택하실 수 있습니다.",
    items: [
      {
        name: "촙드 스트랜드 매트 (Chopped Strand Mat)",
        desc: "단섬유 유리섬유를 무작위 방향으로 배열하여 바인더로 고정한 매트입니다. 핸드레이업 성형에 가장 많이 사용됩니다.",
        specs: ["평량: 300g/m², 450g/m², 600g/m²", "폭: 1000mm", "바인더: 파우더형, 에멀젼형"],
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/category_fiberglass-Vu7QBxDkPdCqcEjadfGq2J.webp",
      },
      {
        name: "유리섬유 직물 (Woven Roving)",
        desc: "로빙을 직조한 직물로 높은 강도가 요구되는 구조재에 사용됩니다.",
        specs: ["평량: 400g/m², 600g/m², 800g/m²", "직조방식: 평직, 능직"],
      },
      {
        name: "유리섬유 로빙 (Roving)",
        desc: "연속 유리섬유 다발로 필라멘트 와인딩, 풀트루전 등에 사용됩니다.",
        specs: ["텍스: 2400tex", "함침성: 우수"],
      },
      {
        name: "서페이싱 매트 (Surfacing Mat)",
        desc: "FRP 표면 처리에 사용되는 얇은 유리섬유 매트입니다. 표면 평활성을 높입니다.",
        specs: ["평량: 30g/m², 50g/m²", "두께: 0.1~0.2mm"],
      },
    ],
  },
  paint: {
    title: "페인트 & 희석제",
    subtitle: "Paint & Thinner",
    intro: "FRP 제품 도장 및 마감에 사용되는 다양한 페인트와 희석제를 공급합니다. 수성, 유성, 반고형 등 용도에 맞는 제품을 선택하실 수 있습니다.",
    items: [
      {
        name: "에폭시 페인트 (Epoxy Paint)",
        desc: "내화학성, 내수성이 우수한 에폭시 계열 페인트입니다. 화학 탱크, 배관 내외면 도장에 사용됩니다.",
        specs: ["도막두께: 50~100μm/회", "내화학성: 우수", "건조시간: 4~8시간 (25°C)"],
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
      },
      {
        name: "우레탄 페인트 (Urethane Paint)",
        desc: "광택과 내후성이 우수한 우레탄 계열 페인트입니다. 외부 노출 제품에 적합합니다.",
        specs: ["광택: 80 GU 이상", "내후성: 우수", "건조시간: 2~4시간"],
      },
      {
        name: "FRP 전용 희석제 (FRP Thinner)",
        desc: "FRP 수지 및 겔코트 작업에 사용되는 전용 희석제입니다.",
        specs: ["주성분: 스티렌 모노머", "사용량: 수지 대비 5~10%"],
      },
      {
        name: "아세톤 (Acetone)",
        desc: "FRP 작업 후 도구 세척 및 표면 처리에 사용되는 용제입니다.",
        specs: ["순도: 99% 이상", "비점: 56°C"],
      },
    ],
  },
  accessories: {
    title: "부자재",
    subtitle: "Accessories",
    intro: "FRP 제조 작업에 필요한 각종 부자재를 공급합니다. 에어로질, 탈크, 철롤러 등 작업에 필수적인 재료들을 구비하고 있습니다.",
    items: [
      {
        name: "에어로질 (Aerosil)",
        desc: "겔코트 및 수지의 요변성(Thixotropy) 부여에 사용되는 흄드 실리카입니다. 수직면 작업 시 흘러내림을 방지합니다.",
        specs: ["입도: 7~40nm", "비표면적: 50~380 m²/g", "사용량: 수지 대비 0.5~3%"],
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
      },
      {
        name: "탈크 (Talc)",
        desc: "수지의 증량제 및 표면 개질에 사용되는 광물성 충전제입니다.",
        specs: ["입도: 10~45μm", "백색도: 90% 이상", "사용량: 수지 대비 5~30%"],
      },
      {
        name: "철롤러 (Metal Roller)",
        desc: "FRP 적층 작업 시 기포 제거 및 수지 함침에 사용되는 롤러입니다.",
        specs: ["재질: 알루미늄", "폭: 50mm, 100mm, 150mm", "용도: 기포제거, 수지함침"],
      },
      {
        name: "이형제 (Release Agent)",
        desc: "몰드에서 FRP 제품을 분리하기 위한 이형제입니다.",
        specs: ["종류: 왁스형, PVA형", "도포방법: 와이핑, 스프레이"],
      },
      {
        name: "탄산칼슘 (Calcium Carbonate)",
        desc: "수지의 증량제로 사용되어 원가 절감 및 물성 조절에 활용됩니다.",
        specs: ["입도: 10~50μm", "백색도: 95% 이상"],
      },
      {
        name: "코발트 촉진제 (Cobalt Accelerator)",
        desc: "수지의 경화 속도를 조절하는 촉진제입니다.",
        specs: ["농도: 6%, 12%", "사용량: 수지 대비 0.1~0.5%"],
      },
    ],
  },
};

export default function Products() {
  const [location] = useLocation();
  const [activeCategory, setActiveCategory] = useState("resin");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // 경로에서 카테고리 추출
  useEffect(() => {
    const pathSegments = location.split("/");
    const categoryFromPath = pathSegments[pathSegments.length - 1];
    
    if (Object.keys(productData).includes(categoryFromPath)) {
      setActiveCategory(categoryFromPath);
    } else {
      setActiveCategory("resin");
    }
    setSelectedProduct(null);
  }, [location]);

  const current = productData[activeCategory] || productData.resin;

  return (
    <Layout>
      {/* Page Header */}
      <div className="py-16" style={{ background: "oklch(0.28 0.08 250)" }}>
        <div className="container">
          <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: "oklch(0.65 0.08 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
            PRODUCTS
          </div>
          <h1 className="text-4xl font-black text-white">제품소개</h1>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-16 z-40 bg-white border-b border-border shadow-sm">
        <div className="container">
          <div className="flex overflow-x-auto">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/products/${cat.id}`}
                className={`flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-all duration-200`}
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

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.items.map((item, i) => (
              <div
                key={i}
                className="product-card cursor-pointer"
                onClick={() => setSelectedProduct(selectedProduct === i ? null : i)}
              >
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                )}
                {!item.image && (
                  <div className="h-32 flex items-center justify-center" style={{ background: "oklch(0.96 0.005 250)" }}>
                    <Package size={40} style={{ color: "oklch(0.75 0.04 250)" }} />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: "oklch(0.18 0.04 250)" }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "oklch(0.45 0.02 250)" }}>{item.desc}</p>

                  {selectedProduct === i && item.specs && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Info size={14} style={{ color: "oklch(0.55 0.18 255)" }} />
                        <span className="text-xs font-bold" style={{ color: "oklch(0.55 0.18 255)" }}>주요 사양</span>
                      </div>
                      <ul className="space-y-1">
                        {item.specs.map((spec, j) => (
                          <li key={j} className="text-xs flex items-start gap-2" style={{ color: "oklch(0.35 0.02 250)", fontFamily: "'IBM Plex Mono', monospace" }}>
                            <span style={{ color: "oklch(0.55 0.18 255)" }}>▸</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    className="mt-3 flex items-center gap-1 text-xs font-semibold transition-colors"
                    style={{ color: "oklch(0.55 0.18 255)" }}
                  >
                    {selectedProduct === i ? "접기" : "상세 사양 보기"}
                    <ChevronRight size={12} className={`transition-transform ${selectedProduct === i ? "rotate-90" : ""}`} />
                  </button>
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
