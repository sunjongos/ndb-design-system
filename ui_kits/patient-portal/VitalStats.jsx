function VitalStats() {
  const stats = [
    { label: '회복 경과', value: '정상', sub: 'ERAS 3주차', color: 'var(--healing)', icon: 'heart-pulse' },
    { label: '다음 검진', value: 'D-12', sub: '5월 1일 혈액검사', color: 'var(--trust)', icon: 'calendar-clock' },
    { label: '처방 복용', value: '6 / 8', sub: '오늘 남은 약', color: 'var(--warmth)', icon: 'pill' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
      {stats.map(s => (
        <div key={s.label} className="ndb-card" style={{ padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--bg-muted)', color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <i data-lucide={s.icon} style={{ width: 22, height: 22 }}/>
          </div>
          <div style={{ minWidth: 0, wordBreak: 'keep-all' }}>
            <div style={{ fontSize: 12, color: 'var(--fg-3)', marginBottom: 2, whiteSpace: 'nowrap' }}>{s.label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--fg-1)', letterSpacing: '-0.01em', lineHeight: 1.1, whiteSpace: 'nowrap' }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 2, whiteSpace: 'nowrap' }}>{s.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
window.VitalStats = VitalStats;
