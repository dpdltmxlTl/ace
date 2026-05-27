/*
 * ASTC Search Results Page
 * Global search across all content
 */
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Search, ChevronRight, FileText, Package, MessageSquare, Bell } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
  type: "product" | "frp" | "notice" | "qna" | "data" | "about";
}

const allContent: SearchResult[] = [
  // Products - Resin
  { id: "r1", title: "일반용 수지 (General Purpose Resin)", excerpt: "일반적인 FRP 성형에 사용되는 범용 폴리에스테르 수지입니다. 작업성이 우수하고 경제적입니다.", category: "합성수지", href: "/products/resin", type: "product" },
  { id: "r2", title: "내식용 수지 (Corrosion Resistant Resin)", excerpt: "화학약품, 산, 알칼리에 대한 내성이 뛰어난 수지입니다. 화학 탱크, 배관 등에 사용됩니다.", category: "합성수지", href: "/products/resin", type: "product" },
  { id: "r3", title: "비닐에스테르 수지 (Vinyl Ester Resin)", excerpt: "에폭시 수지의 내화학성과 폴리에스테르 수지의 작업성을 겸비한 고성능 수지입니다.", category: "합성수지", href: "/products/resin", type: "product" },
  { id: "r4", title: "겔코트 (Gel Coat)", excerpt: "FRP 제품의 표면 마감에 사용되는 특수 수지입니다. 내후성, 내수성이 우수합니다.", category: "합성수지", href: "/products/resin", type: "product" },
  { id: "r5", title: "촉매 (Catalyst / MEKP)", excerpt: "수지 경화에 사용되는 메틸에틸케톤퍼옥사이드(MEKP) 촉매입니다.", category: "합성수지", href: "/products/resin", type: "product" },
  // Products - Fiberglass
  { id: "f1", title: "촙드 스트랜드 매트 (Chopped Strand Mat)", excerpt: "단섬유 유리섬유를 무작위 방향으로 배열하여 바인더로 고정한 매트입니다. 핸드레이업 성형에 가장 많이 사용됩니다.", category: "유리섬유", href: "/products/fiberglass", type: "product" },
  { id: "f2", title: "유리섬유 직물 (Woven Roving)", excerpt: "로빙을 직조한 직물로 높은 강도가 요구되는 구조재에 사용됩니다.", category: "유리섬유", href: "/products/fiberglass", type: "product" },
  { id: "f3", title: "유리섬유 로빙 (Roving)", excerpt: "연속 유리섬유 다발로 필라멘트 와인딩, 풀트루전 등에 사용됩니다.", category: "유리섬유", href: "/products/fiberglass", type: "product" },
  // Products - Paint
  { id: "p1", title: "에폭시 페인트 (Epoxy Paint)", excerpt: "내화학성, 내수성이 우수한 에폭시 계열 페인트입니다. 화학 탱크, 배관 내외면 도장에 사용됩니다.", category: "페인트 & 희석제", href: "/products/paint", type: "product" },
  { id: "p2", title: "우레탄 페인트 (Urethane Paint)", excerpt: "광택과 내후성이 우수한 우레탄 계열 페인트입니다.", category: "페인트 & 희석제", href: "/products/paint", type: "product" },
  { id: "p3", title: "FRP 전용 희석제", excerpt: "FRP 수지 및 겔코트 작업에 사용되는 전용 희석제입니다.", category: "페인트 & 희석제", href: "/products/paint", type: "product" },
  // Accessories
  { id: "a1", title: "에어로질 (Aerosil)", excerpt: "겔코트 및 수지의 요변성 부여에 사용되는 흄드 실리카입니다.", category: "부자재", href: "/products/accessories", type: "product" },
  { id: "a2", title: "탈크 (Talc)", excerpt: "수지의 증량제 및 표면 개질에 사용되는 광물성 충전제입니다.", category: "부자재", href: "/products/accessories", type: "product" },
  { id: "a3", title: "철롤러 (Metal Roller)", excerpt: "FRP 적층 작업 시 기포 제거 및 수지 함침에 사용되는 롤러입니다.", category: "부자재", href: "/products/accessories", type: "product" },
  // FRP Products
  { id: "frp1", title: "FRP 내산탱크 (소형, 1~5톤)", excerpt: "소형 화학약품 저장에 적합한 FRP 내산탱크입니다. 경량이면서도 내식성이 뛰어납니다.", category: "FRP 완제품", href: "/frp/acid-tank", type: "frp" },
  { id: "frp2", title: "FRP 내산탱크 (중형, 5~20톤)", excerpt: "중형 화학공장, 수처리 시설에 사용되는 내산탱크입니다.", category: "FRP 완제품", href: "/frp/acid-tank", type: "frp" },
  { id: "frp3", title: "FRP 물탱크", excerpt: "가정용, 산업용 용수 저장에 사용되는 위생적이고 내구성이 뛰어난 탱크입니다.", category: "FRP 완제품", href: "/frp/water-tank", type: "frp" },
  { id: "frp4", title: "FRP 욕조", excerpt: "경량이면서도 내구성이 뛰어나며, 다양한 디자인과 색상으로 제작 가능합니다.", category: "FRP 완제품", href: "/frp/bathtub", type: "frp" },
  // Notices
  { id: "n1", title: "에이스상사가 이영돈 먹거리X파일에 FRP 정보제공 및 촬영", excerpt: "저희 에이스티씨가 이영돈 PD의 먹거리X파일 프로그램에 FRP 관련 정보를 제공하고 촬영에 협조하였습니다.", category: "공지사항", href: "/qna?tab=notice", type: "notice" },
  { id: "n2", title: "회사 이전 안내", excerpt: "저희 회사가 대구광역시 서구 상리동 31-3번지로 이전하였습니다.", category: "공지사항", href: "/qna?tab=notice", type: "notice" },
  // Technical Data
  { id: "d1", title: "FRP 제작방법 기초편 (핸드레이업)", excerpt: "FRP 핸드레이업 제작 방법의 기초를 설명합니다. 필요 재료, 작업 순서, 주의사항 등이 포함됩니다.", category: "기술자료", href: "/data-room/technical", type: "data" },
  { id: "d2", title: "내산탱크 설계 기준 및 두께 계산", excerpt: "FRP 내산탱크 설계 기준과 수지 선정 방법을 설명합니다.", category: "기술자료", href: "/data-room/technical", type: "data" },
  { id: "d3", title: "FRP 작업 시 안전 수칙", excerpt: "FRP 작업 시 필요한 개인 보호 장비와 안전 수칙을 안내합니다.", category: "기술자료", href: "/data-room/technical", type: "data" },
  // About
  { id: "ab1", title: "회사 인사말", excerpt: "에이스티씨 대표 장성수의 인사말입니다. FRP 산업에 대한 비전과 고객에 대한 약속을 담고 있습니다.", category: "회사소개", href: "/about/greeting", type: "about" },
  { id: "ab2", title: "3B System 경영이념", excerpt: "Best Products, Best Service, Best Price - 에이스티씨의 세 가지 핵심 경영이념입니다.", category: "회사소개", href: "/about/philosophy", type: "about" },
];

const typeIcons: Record<string, React.ReactNode> = {
  product: <Package size={16} />,
  frp: <Package size={16} />,
  notice: <Bell size={16} />,
  qna: <MessageSquare size={16} />,
  data: <FileText size={16} />,
  about: <FileText size={16} />,
};

const typeColors: Record<string, string> = {
  product: "oklch(0.55 0.18 255)",
  frp: "oklch(0.45 0.15 200)",
  notice: "oklch(0.55 0.15 150)",
  qna: "oklch(0.55 0.15 50)",
  data: "oklch(0.55 0.12 300)",
  about: "oklch(0.55 0.10 250)",
};

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} style={{ background: "oklch(0.95 0.08 255)", color: "oklch(0.28 0.08 250)", borderRadius: "2px", padding: "0 2px" }}>
        {part}
      </mark>
    ) : part
  );
}

export default function SearchResults() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split("?")[1] || "");
  const query = searchParams.get("q") || "";
  const [searchInput, setSearchInput] = useState(query);
  const [, navigate] = useLocation();

  const results = query.trim()
    ? allContent.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.excerpt.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      })
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <Layout>
      {/* Page Header */}
      <div className="py-16" style={{ background: "oklch(0.28 0.08 250)" }}>
        <div className="container">
          <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: "oklch(0.65 0.08 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
            SEARCH
          </div>
          <h1 className="text-4xl font-black text-white mb-6">검색</h1>
          <form onSubmit={handleSearch} className="flex gap-3 max-w-xl">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="검색어를 입력하세요"
              className="flex-1 rounded-xl px-4 py-3 text-sm focus:outline-none"
              style={{ background: "oklch(0.38 0.06 250)", color: "white", border: "1px solid oklch(0.45 0.06 250)" }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white flex items-center gap-2 transition-all hover:opacity-90"
              style={{ background: "oklch(0.55 0.18 255)" }}
            >
              <Search size={16} />
              검색
            </button>
          </form>
        </div>
      </div>

      {/* Results */}
      <div className="py-12">
        <div className="container max-w-4xl">
          {query && (
            <div className="mb-8">
              <p className="text-sm" style={{ color: "oklch(0.52 0.02 250)" }}>
                <span className="font-bold" style={{ color: "oklch(0.28 0.08 250)" }}>"{query}"</span>에 대한 검색 결과{" "}
                <span className="font-bold" style={{ color: "oklch(0.55 0.18 255)" }}>{results.length}건</span>
              </p>
            </div>
          )}

          {!query && (
            <div className="text-center py-16">
              <Search size={48} className="mx-auto mb-4" style={{ color: "oklch(0.75 0.04 250)" }} />
              <p className="text-lg font-semibold" style={{ color: "oklch(0.45 0.02 250)" }}>검색어를 입력해 주세요</p>
              <p className="text-sm mt-2" style={{ color: "oklch(0.65 0.02 250)" }}>제품명, 카테고리, 기술 자료 등을 검색할 수 있습니다.</p>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="text-center py-16">
              <Search size={48} className="mx-auto mb-4" style={{ color: "oklch(0.75 0.04 250)" }} />
              <p className="text-lg font-semibold" style={{ color: "oklch(0.45 0.02 250)" }}>검색 결과가 없습니다</p>
              <p className="text-sm mt-2" style={{ color: "oklch(0.65 0.02 250)" }}>다른 검색어로 시도해 보세요.</p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {["수지", "유리섬유", "내산탱크", "겔코트", "에어로질"].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => navigate(`/search?q=${encodeURIComponent(suggestion)}`)}
                    className="px-3 py-1.5 rounded-full text-sm font-medium border transition-all hover:bg-slate-50"
                    style={{ borderColor: "oklch(0.90 0.008 250)", color: "oklch(0.45 0.02 250)" }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && results.length > 0 && (
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-black text-base mb-3 pb-2 border-b border-border" style={{ color: "oklch(0.28 0.08 250)" }}>
                    {category} ({items.length}건)
                  </h3>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <Link key={item.id} href={item.href}>
                        <div className="rounded-xl border border-border p-4 hover:shadow-md transition-all duration-200 hover:border-blue-200 group">
                          <div className="flex items-start gap-3">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ background: `${typeColors[item.type]}20`, color: typeColors[item.type] }}
                            >
                              {typeIcons[item.type]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-sm group-hover:text-blue-600 transition-colors" style={{ color: "oklch(0.18 0.04 250)" }}>
                                  {highlightText(item.title, query)}
                                </h4>
                              </div>
                              <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "oklch(0.52 0.02 250)" }}>
                                {highlightText(item.excerpt, query)}
                              </p>
                            </div>
                            <ChevronRight size={16} className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "oklch(0.55 0.18 255)" }} />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
