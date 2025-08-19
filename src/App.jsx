import React from 'react'
import StickyBrandHeader from './components/StickyBrandHeader';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import HaeSection from './components/HaeSection';
import YunSection from './components/YunSection';
import ContactSection from './components/ContactSection';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <StickyBrandHeader />
        
        {/* 헤더 높이에 맞춰 여백 (모바일: 120px, 데스크톱: 140px) */}
        <main className="pt-[120px] md:pt-[140px]">

      

        {/* Home Section */}
        <HomeSection />

        {/* About Section */}
        <AboutSection />

        {/* HAE Section */}
        <HaeSection />

        {/* YUN Section */}
        <YunSection />

              {/* Contact Section */}
        <ContactSection />

        {/* Social Media Buttons */}
        <section className="bg-[#111] text-[#F1EDE6] py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-4">Follow Us</h3>
              <p className="text-[#F1EDE6]/80">해윤의 최신 소식을 확인하세요</p>
            </div>
            <div className="flex justify-center space-x-6">
              {/* Instagram */}
              <a
                href="https://instagram.com/haeyun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <svg className="w-8 h-8 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.25-3.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
                </svg>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              {/* KakaoTalk */}
              <a
                href="https://pf.kakao.com/haeyun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-yellow-400 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <svg className="w-8 h-8 text-black mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-5.683-3.76-5.683-7.674C1.5 6.665 6.201 3 12 3zm5.907 7.955c.501 0 .91-.409.91-.91s-.409-.91-.91-.91-.91.409-.91.91.409.91.91.91zm-5.907 0c.501 0 .91-.409.91-.91s-.409-.91-.91-.91-.91.409-.91.91.409.91.91.91zm-5.907 0c.501 0 .91-.409.91-.91s-.409-.91-.91-.91-.91.409-.91.91.409.91.91.91z"/>
                </svg>
                <span className="text-sm font-medium text-black">KakaoTalk</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/821026411205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-green-500 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <svg className="w-8 h-8 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.46A11.85 11.85 0 0012 0C5.49 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.94L.07 24l6.3-1.65c1.74.96 3.7 1.46 5.68 1.46 6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41zM12 21.78c-1.74 0-3.45-.47-4.94-1.35l-.35-.21-3.68.96.98-3.58-.23-.37A9.86 9.86 0 012.16 11.89C2.16 6.44 6.55 2.05 12 2.05s9.84 4.39 9.84 9.84-4.39 9.89-9.84 9.89z"/>
                </svg>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Sticky Control Buttons */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Footer */}
        <footer className="mt-auto bg-[#111] text-[#F1EDE6] py-8">
         <div className="max-w-6xl mx-auto px-4 py-8">
                      <div className="text-left space-y-4">
            <div className="space-y-2">
              <p className="text-[#F1EDE6] leading-relaxed">
              Address : 2F, 10, Sangmu Gongwon-ro, Seo-gu, Gwangju, Republic of Korea              </p>
            </div>
            <p className="text-[#F1EDE6] leading-relaxed">
                Email : na8103@naver.com
              </p>
            <div className="space-y-2">
              <p className="text-[#F1EDE6] leading-relaxed">
                Business License 530-13-01908   Tel +82 10-2641-1205
              </p>
              <p className="text-[#F1EDE6] leading-relaxed">
                ⓒ 2025 Hae Yun. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
