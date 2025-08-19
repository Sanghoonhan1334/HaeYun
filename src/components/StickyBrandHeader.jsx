// src/components/StickyBrandHeader.jsx
import { useState } from "react";

export default function StickyBrandHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 홈 섹션으로 스크롤하는 함수
  const scrollToHome = (e) => {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF6EF] dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-full px-4">
        <div className="relative flex items-center min-h-[120px] md:min-h-[200px] py-4 md:py-7">
          {/* 왼쪽: 햄버거 메뉴 */}
          <div className="flex-1 flex justify-start">
            <button
              className="md:hidden p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* 중앙: 로고 */}
          <div className="absolute inset-x-0 flex flex-col items-center -top-10">
            <a 
              href="#home" 
              aria-label="Go to home" 
              className="block cursor-pointer mt-6"
              onClick={scrollToHome}
            >
              {/* 라이트 테마 로고 */}
              <img
                src="/images/haeyun/haeyun-mark-light.png"
                className="block dark:hidden h-36 md:h-52 w-auto"
                alt="해윤 로고"
                onError={(e) => {
                  console.error('Light logo failed to load');
                  e.currentTarget.style.display = 'none';
                  // 로고 로드 실패 시 대체 텍스트 표시
                  const fallbackText = e.currentTarget.nextElementSibling;
                  if (fallbackText) {
                    fallbackText.style.display = 'block';
                  }
                }}
              />
           
              
              {/* 다크 테마 로고 */}
              <img
                src="/images/haeyun/haeyun-mark-dark.png"
                className="hidden dark:block h-36 md:h-52 w-auto"
                alt="해윤 로고"
                onError={(e) => {
                  console.error('Dark logo failed to load');
                  e.currentTarget.style.display = 'none';
                  // 로고 로드 실패 시 대체 텍스트 표시
                  const fallbackText = e.currentTarget.nextElementSibling;
                  if (fallbackText) {
                    fallbackText.style.display = 'block';
                  }
                }}
              />
             
            </a>
            
            {/* 데스크톱 네비게이션 메뉴 */}
            <nav className="hidden md:flex items-center gap-8 text-xs tracking-wide text-neutral-800 dark:text-neutral-200 -mt-8">
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

          {/* 오른쪽: 빈 공간 (버튼들은 아래쪽으로 이동) */}
          <div className="flex-1"></div>

          {/* 모바일 네비게이션 메뉴 */}
          {menuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 shadow-lg z-50">
              <div className="px-6 py-8">
                <div className="flex flex-col space-y-6">
                  <a 
                    href="#home" 
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 py-3 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
                  >
                    HOME
                  </a>
                  <a 
                    href="#about" 
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 py-3 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
                  >
                    ABOUT
                  </a>
                  <a 
                    href="#hae" 
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 py-3 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
                  >
                    HAE
                  </a>
                  <a 
                    href="#yun" 
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 py-3 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
                  >
                    YUN
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 py-3 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
                  >
                    CONTACT
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
