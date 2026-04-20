function RecentVisits() {
  const visits = [
    { date: '2026.04.10', dept: '척추센터', doctor: '김민수 과장', status: '완료', dot: 'var(--healing)' },
    { date: '2026.03.22', dept: '내과', doctor: '정유리 과장', status: '완료', dot: 'var(--healing)' },
    { date: '2026.03.08', dept: '척추센터', doctor: '김민수 과장', status: '완료', dot: 'var(--healing)' },
    { date: '2026.02.14', dept: '관절센터', doctor: '박지현 원장', status: '완료', dot: 'var(--healing)' },
  ];
  return (
    <div className="ndb-card" style={{ padding: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap' }}>최근 진료 내역</h3>
        <a href="#" style={{ fontSize: 13, color: 'var(--trust)', textDecoration: 'none', fontWeight: 600 }}>전체 보기 →</a>
      </div>
      <div>
        {visits.map((v, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: 16, alignItems: 'center', padding: '14px 20px', borderBottom: i < visits.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>{v.date}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{v.dept}</div>
              <div style={{ fontSize: 12, color: 'var(--fg-3)' }}>{v.doctor}</div>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--ndb-green-800)', background: 'var(--healing-soft)', padding: '4px 10px', borderRadius: 999, whiteSpace: 'nowrap' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: v.dot }}/>
              {v.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.RecentVisits = RecentVisits;
