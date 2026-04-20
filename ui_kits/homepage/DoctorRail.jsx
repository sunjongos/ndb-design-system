function DoctorRail() {
  const doctors = [
    { name: '김민수', role: '척추센터 과장', specialty: '척추 내시경 · Balloon-PEN', years: '15년' },
    { name: '박지현', role: '관절센터 원장', specialty: '인공관절 · 관절경', years: '22년' },
    { name: '이승호', role: '신경과 과장', specialty: '두통 · 어지럼 · 뇌혈관', years: '12년' },
    { name: '정유리', role: '내과 과장', specialty: '소화기 · 내시경', years: '10년' },
  ];
  return (
    <section style={{ padding: '96px 24px', background: 'var(--bg-app)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 36 }}>
          <div className="ndb-overline" style={{ color: 'var(--trust)', marginBottom: 10 }}>OUR TEAM</div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em' }}>신뢰할 수 있는 의료진</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {doctors.map(d => (
            <div key={d.name} className="ndb-card" style={{ overflow: 'hidden' }}>
              <div style={{
                aspectRatio: '1/1',
                background: 'linear-gradient(135deg, #DDE4EC 0%, #EEF2F6 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--fg-4)',
              }}>
                <i data-lucide="user-round" style={{ width: 56, height: 56 }}/>
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ fontSize: 12, color: 'var(--trust)', fontWeight: 600, marginBottom: 4 }}>{d.role}</div>
                <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 6 }}>{d.name} 과장</div>
                <div style={{ fontSize: 13, color: 'var(--fg-2)', marginBottom: 10 }}>{d.specialty}</div>
                <div style={{ display: 'inline-flex', fontSize: 11, fontWeight: 600, background: 'var(--warmth-soft)', color: 'var(--ndb-orange-800)', padding: '3px 8px', borderRadius: 999 }}>
                  임상경력 {d.years}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.DoctorRail = DoctorRail;
