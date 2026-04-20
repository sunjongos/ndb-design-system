function QuickActions() {
  const acts = [
    { icon: 'calendar-plus', label: '새 예약', color: 'var(--trust)', bg: 'var(--trust-soft)' },
    { icon: 'file-text', label: '기록 조회', color: 'var(--healing)', bg: 'var(--healing-soft)' },
    { icon: 'pill', label: '처방전', color: 'var(--warmth)', bg: 'var(--warmth-soft)' },
    { icon: 'message-square', label: '의료진 문의', color: 'var(--trust)', bg: 'var(--trust-soft)' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
      {acts.map(a => (
        <button key={a.label} className="ndb-card-hover" style={{
          background: '#fff', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
          padding: '20px 18px', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
          gap: 14, fontFamily: 'inherit', textAlign: 'left',
        }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: a.bg, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i data-lucide={a.icon} style={{ width: 20, height: 20 }}/>
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg-1)', whiteSpace: 'nowrap' }}>{a.label}</div>
        </button>
      ))}
    </div>
  );
}
window.QuickActions = QuickActions;
