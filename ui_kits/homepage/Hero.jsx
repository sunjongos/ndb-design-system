function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #F7F9FB 0%, #E6F4FB 100%)',
      padding: '80px 24px 96px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', border: '1px solid var(--border-subtle)',
            padding: '6px 12px', borderRadius: 999,
            fontSize: 13, fontWeight: 600, color: 'var(--trust)',
            boxShadow: 'var(--shadow-xs)', marginBottom: 20, whiteSpace: 'nowrap',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--healing)' }}/>
            척추·관절 전문 · 남양주
          </div>
          <h1 style={{ fontSize: 52, lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 20 }}>
            환자 중심의 진료,<br/>
            <span style={{ color: 'var(--trust)' }}>New, Different,<br/>much Better.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 32, maxWidth: 520 }}>
            고난도 척추수술부터 일상적인 통증 관리까지 — 남양주백병원의 통합 진료팀이 회복의 모든 단계를 함께합니다.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{
              background: 'var(--trust)', color: '#fff', border: 0,
              padding: '14px 24px', borderRadius: 'var(--radius-md)',
              fontSize: 16, fontWeight: 600, cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)', minHeight: 52, whiteSpace: 'nowrap',
            }}>진료 예약하기 →</button>
            <button style={{
              background: '#fff', color: 'var(--trust)',
              border: '1px solid var(--trust)',
              padding: '14px 24px', borderRadius: 'var(--radius-md)',
              fontSize: 16, fontWeight: 600, cursor: 'pointer', minHeight: 52, whiteSpace: 'nowrap',
            }}>전문 의료진 보기</button>
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-brand)' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, #BEE1F3 0%, #E4F1C6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center', color: 'var(--ndb-blue-800)' }}>
              <i data-lucide="image" style={{ width: 48, height: 48, opacity: 0.5 }}/>
              <div style={{ fontSize: 13, marginTop: 8, opacity: 0.7 }}>Hero imagery placeholder</div>
            </div>
          </div>
          <div style={{
            position: 'absolute', left: 24, bottom: 24, right: 24,
            background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-lg)', padding: '14px 16px',
            display: 'flex', gap: 14, alignItems: 'center',
            boxShadow: 'var(--shadow-md)',
          }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--healing-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--healing)' }}>
              <i data-lucide="heart-pulse" style={{ width: 22, height: 22 }}/>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap' }}>ERAS 회복 프로그램</div>
              <div style={{ fontSize: 12, color: 'var(--fg-3)', whiteSpace: 'nowrap' }}>평균 입원 기간 32% 단축</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
