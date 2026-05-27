/*
 * ASTC Data Room Page
 * Tabs: 공지사항, 신제품/공사자료실, 기술자료실
 */
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { FileText, Download, ChevronDown, ChevronUp } from "lucide-react";

const tabs = [
  { id: "new-products", label: "신제품/공사자료실" },
  { id: "technical", label: "기술자료실" },
];


const newProductsData = [
  {
    id: 1,
    title: "FRP 내산탱크 제품 카탈로그 2024",
    date: "2024-01-10",
    type: "PDF",
    desc: "에이스티씨 FRP 내산탱크 전 제품 카탈로그입니다. 규격, 사양, 가격 정보가 포함되어 있습니다.",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/category_frp_tank-m7NwPRfrrBn6ofispZMEqT.webp",
  },
  {
    id: 2,
    title: "비닐에스테르 수지 신제품 안내",
    date: "2023-11-20",
    type: "PDF",
    desc: "고내식성 비닐에스테르 수지 신제품 소개 및 기술 데이터 시트입니다.",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/category_resin-CwLjdxH4XeWYPhDbTjPda4.webp",
  },
  {
    id: 3,
    title: "FRP 공사 시공 사례 모음",
    date: "2023-09-15",
    type: "이미지",
    desc: "화학 공장, 수처리 시설 등 다양한 현장의 FRP 공사 시공 사례를 모은 자료입니다.",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/hero_frp_industrial-bcM8Az2C5PCnfXeaBwkqzv.webp",
  },
  {
    id: 4,
    title: "유리섬유 제품 라인업 2023",
    date: "2023-07-05",
    type: "PDF",
    desc: "촙드 스트랜드 매트, 로빙, 직물 등 유리섬유 전 제품 라인업 안내서입니다.",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/category_fiberglass-Vu7QBxDkPdCqcEjadfGq2J.webp",
  },
];

const technicalData = [
  {
    id: 101,
    title: "FRP 제작방법 기초편 (핸드레이업)",
    date: "2023-12-01",
    type: "기술문서",
    content: `## FRP 핸드레이업(Hand Lay-up) 제작방법\n\n### 필요 재료\n- 불포화폴리에스테르 수지 또는 비닐에스테르 수지\n- 촉매 (MEKP): 수지 대비 1~2%\n- 촉진제 (코발트): 수지 대비 0.1~0.5%\n- 유리섬유 매트 (300g/m² 또는 450g/m²)\n- 겔코트 (표면 마감용)\n- 이형제 (몰드 분리용)\n\n### 작업 순서\n**1단계: 몰드 준비**\n- 몰드 표면을 깨끗이 청소합니다.\n- 이형제를 3~5회 도포하고 각 회마다 충분히 건조시킵니다.`,
  },
  {
    id: 102,
    title: "내산탱크 설계 기준 및 두께 계산",
    date: "2023-10-15",
    type: "기술문서",
    content: `## 내산탱크 설계 기준\n\n### 두께 계산 공식\nT = (P × D) / (2 × S × E - P)\n\n- T: 필요 두께 (mm)\n- P: 내부 압력 (kgf/cm²)\n- D: 탱크 직경 (mm)\n- S: 허용 응력 (kgf/mm²)\n- E: 효율계수`,
  },
];

export default function DataRoom() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("notice");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const pathSegments = location.split("/");
    const tabFromPath = pathSegments[pathSegments.length - 1];
    if (["new-products", "technical"].includes(tabFromPath)) {
      setActiveTab(tabFromPath);
    }
  }, [location]);

  const getCurrentData = () => {
    
    if (activeTab === "new-products") return newProductsData;
    return technicalData;
  };

  const currentData = getCurrentData();

  return (
    <Layout>
      {/* Page Header */}
      <div className="py-16" style={{ background: "oklch(0.28 0.08 250)" }}>
        <div className="container">
          <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: "oklch(0.65 0.08 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
            DATA ROOM
          </div>
          <h1 className="text-4xl font-black text-white">자료실</h1>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-white border-b border-border shadow-sm">
        <div className="container">
          <div className="flex">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`/data-room/${tab.id}`}
                className="flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-all duration-200"
                style={activeTab === tab.id
                  ? { borderColor: "oklch(0.55 0.18 255)", color: "oklch(0.55 0.18 255)" }
                  : { borderColor: "transparent", color: "oklch(0.45 0.03 250)" }}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="container">

          {activeTab === "new-products" && (
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-black mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>신제품 & 공사자료</h2>
                <p className="text-base" style={{ color: "oklch(0.45 0.02 250)" }}>최신 제품 정보와 공사 시공 자료를 다운로드하실 수 있습니다.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentData.map((item: any) => (
                  <div
                    key={item.id}
                    className="rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
                  >
                    {item.thumbnail && (
                      <div className="h-40 overflow-hidden">
                        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-base flex-1" style={{ color: "oklch(0.18 0.04 250)" }}>{item.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full" style={{ background: "oklch(0.96 0.005 250)", color: "oklch(0.55 0.18 255)" }}>
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm mb-3" style={{ color: "oklch(0.45 0.02 250)" }}>{item.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs" style={{ color: "oklch(0.55 0.18 255)" }}>{item.date}</span>
                        <button className="flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-lg" style={{ background: "oklch(0.28 0.08 250)", color: "white" }}>
                          <Download size={14} />
                          다운로드
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "technical" && (
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-black mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>기술자료</h2>
                <p className="text-base" style={{ color: "oklch(0.45 0.02 250)" }}>FRP 제작 및 설계에 필요한 기술 자료를 제공합니다.</p>
              </div>
              <div className="space-y-4">
                {currentData.map((item: any) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1 text-left">
                        <FileText size={20} style={{ color: "oklch(0.55 0.18 255)" }} />
                        <div>
                          <h3 className="font-bold" style={{ color: "oklch(0.18 0.04 250)" }}>{item.title}</h3>
                          <p className="text-xs mt-1" style={{ color: "oklch(0.55 0.18 255)" }}>{item.date}</p>
                        </div>
                      </div>
                      {expandedId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedId === item.id && (
                      <div className="px-5 pb-5 border-t border-border">
                        <div className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: "oklch(0.35 0.02 250)" }}>
                          {item.content}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
