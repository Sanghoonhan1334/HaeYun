// src/components/StickyBrandHeader.jsx
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function StickyBrandHeader() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  // ESC로 닫기
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF6EF] dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-full px-4">
        <div className="relative flex items-center min-h-[200px] py-7">
          {/* 왼쪽: 모바일 햄버거만 */}
          <div className="flex-1 flex justify-start">
            {/* 모바일 햄버거 */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-full w-12 h-12 border-2 border-neutral-400 dark:border-neutral-500 hover:border-neutral-600 dark:hover:border-neutral-400 transition-colors duration-200 bg-white dark:bg-neutral-800 shadow-sm"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-neutral-600 dark:text-neutral-400">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>

          {/* 중앙: 문양 로고 (마크만) */}
          <div className="absolute inset-x-0 flex flex-col items-center -top-10">
            <a href="#home" aria-label="Go to home" className="block">
              <img
                src="/images/haeyun/haeyun-mark-light.png"
                className="block dark:hidden h-48 md:h-64 w-auto"
                alt="해윤 마크"
              />
              <img
                src="/images/haeyun/haeyun-mark-dark.png"
                className="hidden dark:block h-48 md:h-64 w-auto"
                alt="해윤 마크"
              />
            </a>
            
            {/* 데스크톱 네비게이션 메뉴 */}
            <nav className="hidden md:flex items-center gap-8 text-xs tracking-wide text-neutral-800 dark:text-neutral-200 -mt-12">
              <a 
                href="#home" 
                className="hover:opacity-80 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                HOME
              </a>
              <span>｜</span>
              <a 
                href="#about" 
                className="hover:opacity-80 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                ABOUT
              </a>
              <span>｜</span>
              <a 
                href="#hae" 
                className="hover:opacity-80 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('hae')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                HAE
              </a>
              <span>｜</span>
              <a 
                href="#yun" 
                className="hover:opacity-80 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('yun')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                YUN
              </a>
              <span>｜</span>
              <a 
                href="#contact" 
                className="hover:opacity-80 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                CONTACT
              </a>
            </nav>
          </div>

          {/* 오른쪽: 테마 토글 + 언어 전환 (모바일에서는 세로 스택) */}
          <div className="flex-1 flex justify-end items-end md:items-center flex-col md:flex-row gap-1 md:gap-3">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* 모바일 오버레이 메뉴 */}
          {open && (
            <div
              id="mobile-menu"
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center"
              onClick={(e) => {
                if (e.target === dialogRef.current) setOpen(false);
              }}
            >
              <div className="mx-auto w-full max-w-sm px-6">
                <div className="flex flex-col items-center gap-8 text-2xl font-medium text-white">
                  <a 
                    href="#home" 
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="cursor-pointer hover:opacity-80 transition-opacity duration-200 py-2"
                  >
                    HOME
                  </a>
                  <a 
                    href="#about" 
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="cursor-pointer hover:opacity-80 transition-opacity duration-200 py-2"
                  >
                    ABOUT
                  </a>
                  <a 
                    href="#hae" 
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      document.getElementById('hae')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="cursor-pointer hover:opacity-80 transition-opacity duration-200 py-2"
                  >
                    HAE
                  </a>
                  <a 
                    href="#yun" 
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      document.getElementById('yun')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="cursor-pointer hover:opacity-80 transition-opacity duration-200 py-2"
                  >
                    YUN
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="cursor-pointer hover:opacity-80 transition-opacity duration-200 py-2"
                  >
                    CONTACT
                  </a>
                </div>
                <button
                  className="mt-10 block mx-auto text-white/70 underline text-lg hover:text-white transition-colors duration-200"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
