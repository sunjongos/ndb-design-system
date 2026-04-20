const { useState } = React;

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: '병원소개', en: 'About' },
    { label: '진료안내', en: 'Departments' },
    { label: '의료진', en: 'Doctors' },
    { label: '예약·접수', en: 'Appointments' },
    { label: '오시는 길', en: 'Visit' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'saturate(180%) blur(12px)',
      WebkitBackdropFilter: 'saturate(180%) blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', gap: 32 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="../../assets/logo-ndb-official.png" alt="NDB 남양주백병원" style={{ height: 44 }}/>
        </a>
        <nav style={{ display: 'flex', gap: 4, flex: 1 }}>
          {nav.map(n => (
            <a key={n.label} href="#"
              style={{
                padding: '8px 14px', borderRadius: 'var(--radius-md)',
                color: 'var(--fg-1)', textDecoration: 'none',
                fontSize: 15, fontWeight: 500,
                whiteSpace: 'nowrap',
                transition: 'background 200ms',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'var(--bg-muted)'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
            >{n.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a href="#" style={{ fontSize: 13, color: 'var(--fg-3)', textDecoration: 'none' }}>
            <i data-lucide="phone" style={{ width: 14, height: 14, verticalAlign: '-2px', marginRight: 4 }}/>
            1588-0000
          </a>
          <button className="btn-primary" style={{
            background: 'var(--trust)', color: '#fff', border: 0,
            padding: '10px 16px', borderRadius: 'var(--radius-md)',
            fontWeight: 600, fontSize: 14, cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
          }}>진료 예약하기</button>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
