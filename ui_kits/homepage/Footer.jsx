function Footer() {
  const cols = [
    { title: '진료안내', items: ['진료과 소개', '의료진', '진료 예약', '증명서 발급'] },
    { title: '병원소개', items: ['병원장 인사말', '비전 · 미션', '연혁', '시설 둘러보기'] },
    { title: '환자지원', items: ['입원 안내', '수술 전·후 교육', 'ERAS 프로그램', '자주 묻는 질문'] },
    { title: '방문 · 연락', items: ['오시는 길', '주차 안내', '문의하기', '채용정보'] },
  ];
  return (
    <footer style={{ background: 'var(--ndb-neutral-900)', color: '#D0D8E2', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 32, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="../../assets/logo-ndb-compact.svg" style={{ height: 44, filter: 'brightness(1.4)' }} alt="ndb"/>
            </div>
            <div style={{ fontSize: 14, color: '#9FAAB8', lineHeight: 1.6, maxWidth: 300 }}>
              New, Different and much Better.<br/>
              척추·관절 전문 통합 진료 병원.
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '0.02em' }}>{c.title}</div>
              {c.items.map(it => (
                <a key={it} href="#" style={{ display: 'block', fontSize: 13, color: '#9FAAB8', textDecoration: 'none', padding: '5px 0' }}>{it}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, fontSize: 12, color: '#6B7886' }}>
          <div>© 2026 Namyangju Baek Hospital · 남양주백병원 · 사업자등록번호 000-00-00000</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#" style={{ color: '#9FAAB8', textDecoration: 'none' }}>개인정보처리방침</a>
            <a href="#" style={{ color: '#9FAAB8', textDecoration: 'none' }}>이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
