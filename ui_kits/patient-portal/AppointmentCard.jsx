function AppointmentCard() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0087B6 0%, #005F83 100%)',
      borderRadius: 'var(--radius-xl)', padding: 28,
      color: '#fff', display: 'grid',
      gridTemplateColumns: '1fr auto', gap: 24,
      boxShadow: 'var(--shadow-brand)',
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.16)', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, marginBottom: 14, whiteSpace: 'nowrap' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#92C118' }}/>
          다음 진료 · 3일 후
        </div>
        <div style={{ fontSize: 24, lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 10 }}>4월 24일 (금) · 오전 10:30</div>
        <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.88, marginBottom: 22 }}>
          척추센터 · <strong>김민수 과장</strong> · 진료실 3
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ background: '#fff', color: 'var(--trust)', border: 0, padding: '10px 16px', borderRadius: 'var(--radius-md)', fontWeight: 600, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap' }}>상세 보기</button>
          <button style={{ background: 'rgba(255,255,255,0.14)', color: '#fff', border: '1px solid rgba(255,255,255,0.24)', padding: '10px 16px', borderRadius: 'var(--radius-md)', fontWeight: 600, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap' }}>일정 변경</button>
        </div>
      </div>
      <div style={{ width: 120, height: 120, borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i data-lucide="calendar-days" style={{ width: 56, height: 56, opacity: 0.85 }}/>
      </div>
    </div>
  );
}
window.AppointmentCard = AppointmentCard;
