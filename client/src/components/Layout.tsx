/*
 * ASTC Layout Component
 * Design: Clean Corporate Tech
 * - Fixed top navigation with mega dropdown
 * - Footer with company info
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";

const navItems = [
  {
    label: "회사소개",
    href: "/about",
    sub: [
      { label: "인사말", href: "/about/greeting" },
      { label: "경영이념", href: "/about/philosophy" },
      { label: "회사연혁", href: "/about/history" },
      { label: "찾아오시는길", href: "/about/location" },
    ],
  },
  {
    label: "제품소개",
    href: "/products",
    sub: [
      { label: "합성수지", href: "/products/resin" },
      { label: "유리섬유", href: "/products/fiberglass" },
      { label: "페인트 & 희석제", href: "/products/paint" },
      { label: "부자재", href: "/products/accessories" },
    ],
  },
  {
    label: "F.R.P 완제품",
    href: "/frp",
    sub: [
      { label: "내산탱크", href: "/frp/acid-tank" },
      { label: "물탱크", href: "/frp/water-tank" },
      { label: "욕조 & 세면기", href: "/frp/bathtub" },
      { label: "기타 FRP 제품", href: "/frp/others" },
    ],
  },

  {
    label: "자료실",
    href: "/data-room",
    sub: [
      { label: "신제품/공사자료실", href: "/data-room/new-products" },
      { label: "기술자료실", href: "/data-room/technical" },
    ],
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [, navigate] = useLocation();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Info Bar */}
      <div className="hidden md:block text-xs py-2" style={{ background: "oklch(0.28 0.08 250)", color: "oklch(0.85 0.01 250)" }}>
        <div className="container flex justify-between items-center">
          <span className="font-medium tracking-wide">에이스티씨 — FRP 산업의 모든 것</span>
          <div className="flex items-center gap-6">
            <a href="tel:053-587-1106" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} />
              <span>053-587-1106</span>
            </a>
            <a href="mailto:cine110@nate.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={12} />
              <span>cine110@nate.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg border-b border-border" : "border-b border-border/50"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-lg transition-transform group-hover:scale-105"
                style={{ background: "oklch(0.28 0.08 250)" }}
              >
                A
              </div>
              <div>
                <div className="font-black text-lg leading-none tracking-tight" style={{ color: "oklch(0.28 0.08 250)" }}>
                  에이스티씨
                </div>
                <div className="text-xs font-medium tracking-widest" style={{ color: "oklch(0.55 0.18 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
                  ASTC
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      location.startsWith(item.href)
                        ? "text-white"
                        : "hover:bg-slate-50"
                    }`}
                    style={
                      location.startsWith(item.href)
                        ? { background: "oklch(0.28 0.08 250)", color: "white" }
                        : { color: "oklch(0.25 0.04 250)" }
                    }
                  >
                    {item.label}
                    <ChevronDown size={14} className="opacity-60" />
                  </Link>

                  {/* Dropdown */}
                  {activeDropdown === item.href && (
                    <div
                      className="absolute top-full left-0 pt-2 w-52 z-50"
                    >
                      <div
                        className="rounded-xl shadow-xl border border-border overflow-hidden"
                        style={{ background: "white" }}
                      >
                        {item.sub.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-50 group"
                            style={{ color: "oklch(0.25 0.04 250)" }}
                          >
                            <span>{sub.label}</span>
                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "oklch(0.55 0.18 255)" }} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                  <input
                    ref={searchRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="검색어를 입력하세요"
                    className="border border-border rounded-lg px-3 py-1.5 text-sm w-48 focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "oklch(0.55 0.18 255)" } as React.CSSProperties}
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <X size={18} style={{ color: "oklch(0.45 0.04 250)" }} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Search size={20} style={{ color: "oklch(0.45 0.04 250)" }} />
                </button>
              )}

              {/* Inquiry CTA */}
              <Link
                href="/inquiry"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "oklch(0.28 0.08 250)" }}
              >
                고객문의
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="container py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors hover:bg-slate-50"
                    style={{ color: "oklch(0.25 0.04 250)" }}
                    onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeDropdown === item.href ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === item.href && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.sub.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors hover:bg-slate-50"
                          style={{ color: "oklch(0.45 0.06 250)" }}
                        >
                          <ChevronRight size={14} style={{ color: "oklch(0.55 0.18 255)" }} />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-border">
                <Link href="/inquiry"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold text-white"
                  style={{ background: "oklch(0.28 0.08 250)" }}
                >
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="mt-auto border-t border-border" style={{ background: "oklch(0.97 0.003 250)" }}>
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="font-black text-lg mb-2" style={{ color: "oklch(0.28 0.08 250)" }}>
                에이스티씨
              </div>
              <p className="text-sm mb-4" style={{ color: "oklch(0.45 0.02 250)" }}>
                FRP 산업의 모든 것을 담당하는 전문 대리점
              </p>
              <div className="space-y-2 text-sm" style={{ color: "oklch(0.45 0.02 250)" }}>
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <a href="tel:053-587-1106" className="hover:underline">053-587-1106</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <a href="mailto:cine110@nate.com" className="hover:underline">cine110@nate.com</a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm mb-4" style={{ color: "oklch(0.28 0.08 250)" }}>
                회사
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "oklch(0.45 0.02 250)" }}>
                <li><Link href="/about" className="hover:underline">회사소개</Link></li>
                <li><Link href="/about/philosophy" className="hover:underline">경영이념</Link></li>
                <li><Link href="/about/location" className="hover:underline">찾아오시는길</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-sm mb-4" style={{ color: "oklch(0.28 0.08 250)" }}>
                제품
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "oklch(0.45 0.02 250)" }}>
                <li><Link href="/products/resin" className="hover:underline">합성수지</Link></li>
                <li><Link href="/products/fiberglass" className="hover:underline">유리섬유</Link></li>
                <li><Link href="/products/paint" className="hover:underline">페인트</Link></li>
                <li><Link href="/frp" className="hover:underline">FRP 완제품</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-sm mb-4" style={{ color: "oklch(0.28 0.08 250)" }}>
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "oklch(0.45 0.02 250)" }}>
                <li><Link href="/qna?tab=notice" className="hover:underline">공지사항</Link></li>
                <li><Link href="/qna?tab=qna" className="hover:underline">Q&A</Link></li>
                <li><Link href="/data-room" className="hover:underline">자료실</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border pt-6 text-center text-xs" style={{ color: "oklch(0.55 0.02 250)" }}>
            <p>&copy; 2024 에이스티씨. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
