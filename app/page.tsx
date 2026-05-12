"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [yearCount, setYearCount] = useState(0);
  const [salesCount, setSalesCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {

    const animateCounter = (
      end: number,
      setState: React.Dispatch<React.SetStateAction<number>>
    ) => {

      const run = () => {

        let start = 0;

        const duration = 2000;

        const increment = end / (duration / 16);

        const timer = setInterval(() => {

          start += increment;

          if (start >= end) {

            start = end;

            setState(Math.floor(start));

            clearInterval(timer);

            setTimeout(() => {
              run();
            }, 1000);

          } else {

            setState(Math.floor(start));

          }

        }, 16);

      };

      run();

    };

    animateCounter(20, setYearCount);
    animateCounter(2000000, setSalesCount);
    animateCounter(1000, setOrderCount);

  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section>
        <img
          src="/hero-banner.png"
          alt="백만김밥 메인배너"
          className="w-full h-auto block"
        />
      </section>

      {/* 신뢰 숫자 */}
      <section className="bg-[#04152d] border-t border-yellow-400/20">

        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-4 gap-10 text-center items-end">

          {/* 20년 */}
          <div className="flex flex-col justify-end h-full">

            <h2 className="text-5xl font-black text-yellow-400 leading-none">
              {yearCount}년
            </h2>

            <p className="mt-6 text-gray-300 text-xl">
              한자리에서 운영
            </p>

          </div>

          {/* 200만 */}
          <div className="flex flex-col justify-end h-full">

            <h2 className="text-5xl font-black text-yellow-400 leading-none">
              {salesCount.toLocaleString()}+
            </h2>

            <p className="mt-6 text-gray-300 text-xl">
              누적 판매
            </p>

          </div>

          {/* 1000줄 */}
          <div className="flex flex-col justify-end h-full">

            <h2 className="text-5xl font-black text-yellow-400 leading-none">
              {orderCount.toLocaleString()}줄+
            </h2>

            <p className="mt-6 text-gray-300 text-xl">
              단체주문 가능
            </p>

          </div>

          {/* 시계 */}
          <div className="flex flex-col items-center justify-start">

  {/* 시계 */}
  <div className="relative w-16 h-16 border-4 border-yellow-400 rounded-full mt-1">

    {/* 시침 */}
    <div className="absolute w-1 h-5 bg-yellow-400 left-1/2 top-[18%] origin-bottom -translate-x-1/2 animate-spin"></div>

    {/* 분침 */}
    <div className="absolute w-1 h-7 bg-white left-1/2 top-[5%] origin-bottom -translate-x-1/2 animate-[spin_3s_linear_infinite]"></div>

    {/* 중앙 */}
    <div className="absolute w-3 h-3 bg-yellow-400 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

  </div>

  {/* 텍스트 */}
  <p className="mt-6 text-gray-300">
    예약 시간 맞춤 제작
  </p>

</div>

        </div>

      </section>

      {/* 도시락 섹션 */}
      <section className="bg-[#f8f8f8] text-black">

        <div className="max-w-7xl mx-auto px-6 py-36">

          {/* 제목 */}
          <div className="text-center mb-16">

            <p className="text-blue-700 font-bold mb-3">
              다양한 상황에 맞춘
            </p>

            <h2 className="text-5xl font-black">
              단체도시락 · 김밥 세트
            </h2>

          </div>

          {/* 카드 */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* 카드 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition">

              <img
                src="/dosirak-1.png"
                alt="김밥 도시락"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-black">
                  김밥 도시락
                </h3>

                <p className="mt-3 text-gray-500 leading-relaxed">
                  체육대회, 학원간식, 각종 행사 추천
                </p>

                <button className="mt-6 border border-blue-300 text-blue-700 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition">
                  자세히 보기 →
                </button>

              </div>

            </div>

            {/* 카드 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition">

              <img
                src="/dosirak-2.png"
                alt="유부 도시락"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-black">
                  유부 도시락
                </h3>

                <p className="mt-3 text-gray-500 leading-relaxed">
                  어린이행사, 교회행사, 단체모임 추천
                </p>

                <button className="mt-6 border border-blue-300 text-blue-700 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition">
                  자세히 보기 →
                </button>

              </div>

            </div>

            {/* 카드 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition">

              <img
                src="/dosirak-3.png"
                alt="프리미엄 과일 도시락"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-black">
                  프리미엄 과일 도시락
                </h3>

                <p className="mt-3 text-gray-500 leading-relaxed">
                  기업 행사, 세미나, VIP 모임 추천
                </p>

                <button className="mt-6 border border-blue-300 text-blue-700 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition">
                  자세히 보기 →
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 중간 매장 섹션 */}
      <section className="w-full">
        <img
          src="/section-kimbap-store-mid.png"
          alt="백만김밥 이야기"
          className="w-full h-auto block"
        />
      </section>

      {/* 진행과정 섹션 */}
      <section className="w-full bg-white">
        <img
          src="/process-section.png"
          alt="단체주문 진행과정"
          className="w-full h-auto block"
        />
      </section>

      {/* 대량주문 섹션 */}
      <section className="bg-black text-white">

        <div className="grid md:grid-cols-2">

          {/* 왼쪽 텍스트 */}
          <div className="flex items-center px-10 md:px-20 py-20">

            <div>

              <p className="text-2xl text-gray-300 leading-relaxed">
                소규모 간식부터
                <br />
                대형 행사까지
              </p>

              <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight text-yellow-400">
                대량주문도
                <br />
                든든하게 준비합니다
              </h2>

              <p className="mt-10 text-gray-400 leading-loose text-lg">
                하루 최대 1,000줄 이상 제작 가능한
                <br />
                체계적인 시스템으로
                <br />
                성공적인 행사를 함께 만들어갑니다.
              </p>

            </div>

          </div>

          {/* 오른쪽 이미지 */}
          <div className="grid grid-cols-2 gap-2 p-2 bg-black">

            <img
              src="/bulk-1.png"
              alt="대량주문 이미지1"
              className="w-full h-full object-cover rounded-xl"
            />

            <img
              src="/bulk-2.png"
              alt="대량주문 이미지2"
              className="w-full h-full object-cover rounded-xl"
            />

            <img
              src="/bulk-3.png"
              alt="대량주문 이미지3"
              className="w-full h-full object-cover rounded-xl"
            />

            <img
              src="/bulk-4.png"
              alt="대량주문 이미지4"
              className="w-full h-full object-cover rounded-xl"
            />

          </div>

        </div>

      </section>

      {/* 다양한 납품처 */}
      <section className="w-full bg-white">
        <img
          src="/place-section.png"
          alt="백만김밥 납품처"
          className="w-full h-auto block"
        />
      </section>

      {/* 최종 CTA */}
      <section className="w-full">
        <img
          src="/bottom-cta.png"
          alt="백만김밥 최종 문의 CTA"
          className="w-full h-auto block"
        />
      </section>

    </main>
  );
}