function TopBar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '16px 32px', background: '#fff',
      borderBottom: '1px solid var(--border-subtle)', height: 64,
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div style={{ position: 'relative', flex: 1, maxWidth: 420 }}>
        <i data-lucide="search" style={{ width: 16, height: 16, position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--fg-3)' }}/>
        <input placeholder="의료진, 진료과, 예약번호 검색" style={{
          width: '100%', boxSizing: 'border-box',
          padding: '10px 12px 10px 36px', fontSize: 14,
          background: 'var(--bg-muted)', border: '1px solid transparent',
          borderRadius: 'var(--radius-md)', outline: 'none', fontFamily: 'inherit',
        }}/>
      </div>
      <button style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', border: 0, background: 'transparent', cursor: 'pointer', color: 'var(--fg-2)', position: 'relative' }}>
        <i data-lucide="bell" style={{ width: 20, height: 20 }}/>
        <span style={{ position: 'absolute', top: 8, right: 10, width: 8, height: 8, borderRadius: '50%', background: 'var(--warmth)', border: '2px solid #fff' }}/>
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 10px 4px 4px', border: '1px solid var(--border-subtle)', borderRadius: 999 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, var(--trust), var(--healing))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>홍</div>
        <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap' }}>홍길동 님</div>
      </div>
    </div>
  );
}
window.TopBar = TopBar;
