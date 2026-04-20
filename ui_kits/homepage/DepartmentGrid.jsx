function DepartmentGrid() {
  const depts = [
    { icon: 'bone', name: '척추센터', en: 'Spine Center', desc: '고난도 척추수술 · 내시경 · Balloon-PEN', color: 'var(--trust)' },
    { icon: 'person-standing', name: '관절센터', en: 'Joint Center', desc: '인공관절 · 관절경 · 재생치료', color: 'var(--healing)' },
    { icon: 'brain', name: '신경과', en: 'Neurology', desc: '두통 · 어지럼 · 신경계 질환', color: 'var(--warmth)' },
    { icon: 'activity', name: '내과', en: 'Internal Medicine', desc: '소화기 · 호흡기 · 내분비 진료', color: 'var(--trust)' },
  ];
  return (
    <section style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <div className="ndb-overline" style={{ color: 'var(--warmth)', marginBottom: 10 }}>DEPARTMENTS</div>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em' }}>통합 진료 시스템</h2>
            <p style={{ marginTop: 12, color: 'var(--fg-2)', fontSize: 17, maxWidth: 560 }}>
              척추·관절·신경·내과를 통합 운영하는 ERAS 프로그램으로 환자 맞춤형 회복 경로를 제공합니다.
            </p>
          </div>
          <a href="#" style={{ color: 'var(--trust)', fontWeight: 600, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            전체 진료과 보기 →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {depts.map(d => (
            <a key={d.name} href="#" className="ndb-card ndb-card-hover" style={{
              textDecoration: 'none', color: 'inherit',
              padding: '24px 22px', display: 'block',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--bg-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: d.color, marginBottom: 16 }}>
                <i data-lucide={d.icon} style={{ width: 22, height: 22 }}/>
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>{d.name}</div>
              <div style={{ fontSize: 12, color: 'var(--fg-3)', marginBottom: 10 }}>{d.en}</div>
              <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.55 }}>{d.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
window.DepartmentGrid = DepartmentGrid;
