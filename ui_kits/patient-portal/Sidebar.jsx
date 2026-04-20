function Sidebar() {
  const [active, setActive] = React.useState('dashboard');
  const items = [
    { id: 'dashboard', icon: 'layout-dashboard', label: '대시보드' },
    { id: 'appts', icon: 'calendar-days', label: '진료 예약' },
    { id: 'records', icon: 'file-text', label: '진료 기록' },
    { id: 'meds', icon: 'pill', label: '처방 내역' },
    { id: 'messages', icon: 'message-square', label: '의료진 문의' },
    { id: 'billing', icon: 'receipt', label: '진료비 납부' },
  ];
  return (
    <aside style={{
      width: 240, background: '#fff',
      borderRight: '1px solid var(--border-subtle)',
      padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 2,
      height: '100vh', position: 'sticky', top: 0, flex: 'none',
    }}>
      <div style={{ padding: '6px 10px 22px' }}>
        <img src="../../assets/logo-ndb-official.png" style={{ height: 40 }} alt="NDB"/>
      </div>
      {items.map(it => {
        const on = active === it.id;
        return (
          <button key={it.id} onClick={() => setActive(it.id)} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '11px 12px', borderRadius: 'var(--radius-md)',
            background: on ? 'var(--trust-soft)' : 'transparent',
            color: on ? 'var(--trust)' : 'var(--fg-2)',
            border: 0, cursor: 'pointer',
            fontSize: 14, fontWeight: on ? 600 : 500,
            fontFamily: 'inherit', textAlign: 'left',
          }}>
            <i data-lucide={it.icon} style={{ width: 18, height: 18 }}/>
            {it.label}
          </button>
        );
      })}
      <div style={{ marginTop: 'auto', padding: 12, background: 'var(--bg-muted)', borderRadius: 'var(--radius-md)' }}>
        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 4 }}>응급 연락</div>
        <div style={{ fontSize: 13, color: 'var(--trust)', fontWeight: 700 }}>1588-0000</div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
