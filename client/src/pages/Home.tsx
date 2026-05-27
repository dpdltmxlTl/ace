/*
 * ASTC Home Page
 * Design: Clean Corporate Tech
 * Sections: Hero slider, Category cards (evct.kr style), About, Products, Stats, CTA
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ChevronRight, ArrowRight, Phone, CheckCircle2, ChevronLeft } from "lucide-react";

const heroSlides = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/hero_frp_industrial-bcM8Az2C5PCnfXeaBwkqzv.webp",
    tag: "FRP 산업의 전문 파트너",
    title: "최고의 품질로\n신뢰를 드립니다",
    subtitle: "합성수지, 유리섬유, 페인트 등 FRP 제조에 필요한 모든 원자재를 공급합니다.",
    cta: { label: "제품 보기", href: "/products" },
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/hero_frp_materials-iwe9h9aZNfdbrUtqizzSrW.webp",
    tag: "3B System 경영이념",
    title: "Best Products\nBest Service\nBest Price",
    subtitle: "최상의 상품, 최상의 서비스, 최상의 가격으로 고객 여러분과 함께합니다.",
    cta: { label: "회사소개", href: "/about" },
  },
];

const categories = [
  {
    title: "합성수지",
    subtitle: "Synthetic Resin",
    desc: "불포화폴리에스테르 수지 및 비닐에스테르 수지",
    href: "/products/resin",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/category_resin-CwLjdxH4XeWYPhDbTjPda4.webp",
    color: "oklch(0.28 0.08 250)",
  },
  {
    title: "유리섬유",
    subtitle: "Fiber Glass",
    desc: "촙드 스트랜드 매트, 로빙 등 다양한 유리섬유 제품",
    href: "/products/fiberglass",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/category_fiberglass-Vu7QBxDkPdCqcEjadfGq2J.webp",
    color: "oklch(0.35 0.10 200)",
  },
  {
    title: "페인트 & 희석제",
    subtitle: "Paint & Thinner",
    desc: "수성, 유성, 반고형 페인트 및 각종 희석제",
    href: "/products/paint",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
    color: "oklch(0.40 0.12 180)",
  },
  {
    title: "부자재",
    subtitle: "Accessories",
    desc: "에어로질, 탈크, 철롤러 등 FRP 작업 필수 부자재",
    href: "/products/accessories",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    color: "oklch(0.32 0.09 230)",
  },
  {
    title: "F.R.P 완제품",
    subtitle: "FRP Products",
    desc: "내산탱크, 물탱크, 욕조 등 다양한 FRP 완제품",
    href: "/frp",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663631964407/QAXthPgndVdByuaYHXp5us/category_frp_tank-m7NwPRfrrBn6ofispZMEqT.webp",
    color: "oklch(0.25 0.07 260)",
  },
];

const stats = [
  { value: "20+", label: "년 업력" },
  { value: "500+", label: "취급 제품" },
  { value: "1000+", label: "고객사" },
  { value: "24h", label: "빠른 납품" },
];

const notices = [
  { id: 16, title: "에이스상사가 이영돈 먹거리X파일에 FRP 정보제공 및 촬영", date: "2013-02-15" },
  { id: 15, title: "회사 이전 안내", date: "2012-08-20" },
  { id: 14, title: "(필독) FRP 제작방법 (기초편, 사진자료)", date: "2011-05-10" },
  { id: 13, title: "각 메뉴 정상가동 됩니다.", date: "2010-03-05" },
  { id: 12, title: "\"온라인 제품주문하기\" 메뉴 정상 가동됩니다.", date: "2009-11-20" },
];

const qnaList = [
  { id: 10357, title: "[re] 제작문의 드립니다.", date: "2024-01-15" },
  { id: 10356, title: "제작문의 드립니다.", date: "2024-01-14" },
  { id: 10355, title: "[re] 제작과정 문의 드립니다,", date: "2024-01-10" },
  { id: 10354, title: "제작과정 문의 드립니다,", date: "2024-01-09" },
  { id: 10353, title: "FRP 관련 자료 감사합니다.", date: "2024-01-05" },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 backdrop-blur-sm"
                style={{ background: "oklch(0.55 0.18 255 / 0.3)", color: "oklch(0.9 0.05 255)", border: "1px solid oklch(0.55 0.18 255 / 0.4)" }}
              >
                {slide.tag}
              </div>
              <h1
                className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
                style={{ textShadow: "0 2px 20px oklch(0 0 0 / 0.3)" }}
              >
                {slide.title.split("\n").map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                {slide.subtitle}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
                  style={{ background: "oklch(0.55 0.18 255)", color: "white" }}
                >
                  {slide.cta.label}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/order"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 border-white/60 text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
                >
                  <Phone size={16} />
                  온라인 주문
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40"}`}
            />
          ))}
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      </section>

      {/* Category Section (evct.kr style) - MOVED TO TOP */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href}>
                <div className="category-card-compact h-48 md:h-56 group">
                  <img src={cat.image} alt={cat.title} className="category-card-img absolute inset-0 w-full h-full object-cover" />
                  <div className="category-card-content-compact">
                    <div className="text-xs font-semibold tracking-widest mb-1" style={{ color: "oklch(0.75 0.08 255)" }}>
                      {cat.subtitle}
                    </div>
                    <h3 className="text-lg font-black text-white mb-2">{cat.title}</h3>
                    <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">{cat.desc}</p>
                    <div className="flex items-center gap-1 mt-3 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "oklch(0.75 0.12 255)" }}>
                      자세히 보기 <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "oklch(0.28 0.08 250)" }}>
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-sm mt-1" style={{ color: "oklch(0.75 0.04 250)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" style={{ background: "oklch(0.97 0.003 250)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="section-title-bar">
                <h2 className="text-3xl font-black" style={{ color: "oklch(0.18 0.04 250)" }}>에이스티씨 소개</h2>
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.35 0.02 250)" }}>
                저희 에이스티씨는 급변하는 21세기에 적극적으로 대처하기 위해서는 우수한 품질의 자재공급만이 우리나라 산업 발전의 선두주자가 될 수 있다는 각오로 고객님의 다양한 수요욕구에 신속, 정확히 대처하기 위해 끊임없이 노력하고 있습니다.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "FRP 합성수지, 유리섬유, 페인트 등 주 품목 최선 서비스",
                  "우수한 제품, 저렴한 가격, 신속한 공급",
                  "상세한 기술 자료와 제품 정보 제공",
                  "언제든 찾아오실 수 있는 열린 공간",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.18 255)" }} />
                    <span className="text-sm" style={{ color: "oklch(0.35 0.02 250)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "oklch(0.28 0.08 250)" }}
              >
                회사소개 보기 <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="col-span-3 rounded-2xl p-8 text-white"
                  style={{ background: "oklch(0.28 0.08 250)" }}
                >
                  <div className="text-4xl font-black mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>3B</div>
                  <div className="text-lg font-bold mb-1">System</div>
                  <div className="text-sm opacity-70">에이스티씨의 경영이념</div>
                </div>
                {[
                  { title: "Best Products", desc: "최상의 상품" },
                  { title: "Best Service", desc: "최상의 서비스" },
                  { title: "Best Price", desc: "최상의 가격" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl p-4 text-center"
                    style={{ background: "white", border: "1px solid oklch(0.90 0.008 250)" }}
                  >
                    <div className="text-xs font-black mb-1" style={{ color: "oklch(0.55 0.18 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
                      {item.title.split(" ")[0]}
                    </div>
                    <div className="text-xs font-bold" style={{ color: "oklch(0.28 0.08 250)" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
