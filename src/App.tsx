import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <header className="bg-primary-blue p-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Namyangju Baek Hospital</h1>
          <p className="text-xl opacity-90 tracking-wide">"New, Different and much Better (NDB)"</p>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-orange inline-block pb-2">
              디자인 테마 테스트 (Design Theme Test)
            </h2>
            <div className="flex gap-4 mb-4">
              <button className="px-6 py-3 bg-primary-blue text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors">
                Primary Blue Button (#0066CC)
              </button>
              <button className="px-6 py-3 bg-primary-orange text-white rounded-lg font-semibold shadow-md hover:bg-orange-600 transition-colors">
                Primary Orange Button (#FF6600)
              </button>
            </div>
            <p className="text-gray-600 leading-relaxed font-sans">
              이 텍스트는 산세리프 폰트(Pretendard 등)가 적용된 기본 텍스트입니다. 
              남양주백병원은 척추센터, 관절센터, 신경과, 내과 등 통합 운영 서비스를 통해 환자 친화적이고 전문적인 의료 환경을 제공합니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
