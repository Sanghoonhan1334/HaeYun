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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-2.618 6.782-6.98 6.979-1.281.059-1.689.073-4.948.073-3.259 0-3.667-.014-4.947-.072-4.358-.2-6.78-2.618-6.98-6.98-.059-1.281-.073-1.689-.073-4.948 0-3.259.014-3.667.072-4.947.2-4.358 2.618-6.78 6.98-6.98 1.281-.059 1.69-.073 4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.764 6.988c-.001 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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
