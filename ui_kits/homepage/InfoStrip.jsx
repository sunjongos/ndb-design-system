function InfoStrip() {
  const items = [
    { icon: 'clock', title: '진료 시간', line1: '평일 · 08:30 – 17:30', line2: '토요일 · 08:30 – 13:00' },
    { icon: 'map-pin', title: '오시는 길', line1: '경기 남양주시 다산순환로', line2: '지하철 8호선 다산역 3번 출구' },
    { icon: 'phone', title: '대표 전화', line1: '1588-0000', line2: '응급실 24시간 운영' },
    { icon: 'shield-check', title: '건강보험', line1: '건강보험 전액 적용', line2: '실손·국가유공자 가능' },
  ];
  return (
    <section style={{ padding: '56px 24px', background: '#fff', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {items.map(i => (
          <div key={i.title} style={{ display: 'flex', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--trust-soft)', color: 'var(--trust)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <i data-lucide={i.icon} style={{ width: 22, height: 22 }}/>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{i.title}</div>
              <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>{i.line1}</div>
              <div style={{ fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.5 }}>{i.line2}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.InfoStrip = InfoStrip;
