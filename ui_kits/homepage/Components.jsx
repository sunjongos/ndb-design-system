// Shared homepage components for NDB marketing site.
// Uses window.claude-style globals pattern; exports to window at bottom.

const { useState } = React;

/* ---------- HEADER (GNB) ---------- */
function GNB({ currentPath = '/', onNavigate }) {
  const links = [
    { path: '/about',      label: '병원소개' },
    { path: '/departments', label: '진료과/센터' },
    { path: '/doctors',    label: '의료진' },
    { path: '/reservation', label: '진료예약' },
    { path: '/info',       label: '이용안내' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'saturate(180%) blur(12px)',
      WebkitBackdropFilter: 'saturate(180%) blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 32,
        height: 64, padding: '0 24px',
      }}>
        <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate && onNavigate('/')}}
           style={{display:'flex', alignItems:'center', textDecoration:'none'}}>
          <img src="../../assets/logo-ndb.svg" alt="NDB" height={40}/>
        </a>
        <nav style={{display:'flex', gap:4, flex:1}}>
          {links.map(l => (
            <a key={l.path} href="#"
               onClick={(e)=>{e.preventDefault(); onNavigate && onNavigate(l.path)}}
               style={{
                 padding: '10px 14px',
                 fontSize: 15, fontWeight: 600,
                 color: currentPath === l.path ? 'var(--trust)' : 'var(--fg-2)',
                 textDecoration: 'none', borderRadius: 'var(--radius-md)',
                 transition: 'background 200ms, color 200ms',
               }}
               onMouseEnter={e=>e.currentTarget.style.background='var(--bg-muted)'}
               onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <button style={ghostBtn}>
            <i data-lucide="phone" style={{width:16,height:16}}></i>
            1588‑0000
          </button>
          <button style={primaryBtn} onClick={()=>onNavigate && onNavigate('/reservation')}>
            진료 예약하기
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero({ onCTA }) {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #F7F9FB 0%, #FFFFFF 100%)',
      padding: '72px 24px 80px',
    }}>
      <div style={{
        maxWidth:1200, margin:'0 auto',
        display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:48, alignItems:'center',
      }}>
        <div>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            padding:'6px 12px', borderRadius:999,
            background:'var(--warmth-soft)', color:'var(--ndb-orange-800)',
            fontSize:12, fontWeight:700, letterSpacing:'0.08em',
            marginBottom: 20,
          }}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--warmth)'}}/>
            NEW, DIFFERENT AND MUCH BETTER
          </div>
          <h1 style={{
            fontSize: 52, lineHeight: 1.15, fontWeight: 800,
            letterSpacing:'-0.025em', margin:'0 0 18px',
          }}>
            척추·관절의 <span style={{color:'var(--trust)'}}>새로운 기준</span><br/>
            남양주백병원이 함께합니다
          </h1>
          <p style={{fontSize:18, lineHeight:1.65, color:'var(--fg-2)', margin:'0 0 28px', maxWidth: 520}}>
            척추 내시경 수술, 풍선 경막외 신경성형술(Balloon‑PEN)부터
            관절 통합 재활까지 — 환자 한 분에게 맞춘 회복 프로그램을 제공합니다.
          </p>
          <div style={{display:'flex', gap:12}}>
            <button style={{...primaryBtn, padding:'14px 22px', fontSize:15}} onClick={onCTA}>
              진료 예약하기
              <i data-lucide="arrow-right" style={{width:16,height:16, marginLeft:2}}></i>
            </button>
            <button style={{...outlineBtn, padding:'14px 22px', fontSize:15}}>
              <i data-lucide="phone" style={{width:16,height:16}}></i>
              1588‑0000 전화 상담
            </button>
          </div>
          <div style={{display:'flex', gap:28, marginTop:40, paddingTop:24, borderTop:'1px solid var(--border-subtle)'}}>
            <Stat value="16,400+" label="연간 수술 건수"/>
            <Stat value="23년" label="전문 진료 경력"/>
            <Stat value="96%" label="환자 만족도"/>
          </div>
        </div>
        <div style={{
          aspectRatio: '4/5',
          borderRadius: 'var(--radius-2xl)',
          background: 'linear-gradient(135deg, #E6F4FB 0%, #F4F9E8 100%)',
          boxShadow: 'var(--shadow-brand)',
          position:'relative', overflow:'hidden',
        }}>
          {/* Placeholder hero photo */}
          <div style={{
            position:'absolute', inset:20,
            border:'1px dashed rgba(0,135,182,0.25)',
            borderRadius: 'var(--radius-xl)',
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
            gap:10, color:'var(--trust)',
          }}>
            <i data-lucide="image" style={{width:40,height:40, opacity:.6}}></i>
            <div style={{fontSize:13, fontWeight:600, opacity:.7}}>Hospital hero photo</div>
            <div style={{fontSize:11, opacity:.55}}>(placeholder — provide brand imagery)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div style={{fontSize:28, fontWeight:800, color:'var(--trust)', letterSpacing:'-0.02em'}}>{value}</div>
      <div style={{fontSize:13, color:'var(--fg-3)', marginTop:2}}>{label}</div>
    </div>
  );
}

/* ---------- DEPARTMENTS ---------- */
function Departments({ onSelect }) {
  const depts = [
    { id:'spine',    icon:'bone',           kr:'척추센터', en:'Spine Center',  color:'var(--trust)',    bg:'var(--trust-soft)' },
    { id:'joint',    icon:'hand',           kr:'관절센터', en:'Joint Center',  color:'var(--healing)',  bg:'var(--healing-soft)' },
    { id:'neuro',    icon:'brain',          kr:'신경과',   en:'Neurology',     color:'var(--warmth)',   bg:'var(--warmth-soft)' },
    { id:'internal', icon:'stethoscope',    kr:'내과',     en:'Internal Med.', color:'var(--trust)',    bg:'var(--trust-soft)' },
    { id:'rehab',    icon:'activity',       kr:'재활치료실', en:'Rehabilitation', color:'var(--healing)', bg:'var(--healing-soft)' },
    { id:'imaging',  icon:'scan-line',      kr:'영상의학과', en:'Radiology',   color:'var(--warmth)',   bg:'var(--warmth-soft)' },
  ];
  return (
    <section style={{padding:'72px 24px', background:'#fff'}}>
      <div style={{maxWidth:1200, margin:'0 auto'}}>
        <div style={{marginBottom:32, display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
          <div>
            <div className="ndb-overline" style={{color:'var(--trust)'}}>DEPARTMENTS</div>
            <h2 style={{fontSize:32, fontWeight:700, marginTop:8, letterSpacing:'-0.015em'}}>
              진료과 · 전문 센터
            </h2>
          </div>
          <a href="#" style={{color:'var(--trust)', fontSize:14, fontWeight:600, textDecoration:'none'}}>
            전체 보기 →
          </a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}}>
          {depts.map(d => (
            <a key={d.id} href="#" onClick={(e)=>{e.preventDefault(); onSelect && onSelect(d)}}
               className="ndb-card ndb-card-hover"
               style={{padding:20, textDecoration:'none', color:'inherit', display:'block'}}>
              <div style={{
                width:44, height:44, borderRadius:'var(--radius-md)',
                background: d.bg, color: d.color,
                display:'flex', alignItems:'center', justifyContent:'center',
                marginBottom:14,
              }}>
                <i data-lucide={d.icon} style={{width:22, height:22}}></i>
              </div>
              <div style={{fontSize:17, fontWeight:700, color:'var(--fg-1)'}}>{d.kr}</div>
              <div style={{fontSize:13, color:'var(--fg-3)', marginTop:2}}>{d.en}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DOCTORS ---------- */
function Doctors() {
  const doctors = [
    { name:'김 민 수', role:'척추센터장', en:'Dr. Kim Min‑soo', spec:'척추 내시경 수술' },
    { name:'이 지 현', role:'관절센터장', en:'Dr. Lee Ji‑hyun', spec:'인공관절 수술' },
    { name:'박 준 호', role:'신경과 과장', en:'Dr. Park Jun‑ho', spec:'두통·어지럼증' },
    { name:'최 소 영', role:'내과 과장',   en:'Dr. Choi So‑young', spec:'소화기내과' },
  ];
  return (
    <section style={{padding:'72px 24px', background:'var(--bg-app)'}}>
      <div style={{maxWidth:1200, margin:'0 auto'}}>
        <div style={{marginBottom:32}}>
          <div className="ndb-overline" style={{color:'var(--warmth)'}}>OUR DOCTORS</div>
          <h2 style={{fontSize:32, fontWeight:700, marginTop:8}}>함께하는 의료진</h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16}}>
          {doctors.map(d => (
            <div key={d.name} className="ndb-card ndb-card-hover" style={{padding:0, overflow:'hidden'}}>
              <div style={{
                aspectRatio:'1/1',
                background:'linear-gradient(160deg, #EEF2F6, #DDE4EC)',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'var(--fg-4)',
              }}>
                <i data-lucide="user-round" style={{width:48, height:48}}></i>
              </div>
              <div style={{padding:'14px 16px 18px'}}>
                <div style={{fontSize:11, color:'var(--trust)', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase'}}>{d.role}</div>
                <div style={{fontSize:17, fontWeight:700, marginTop:4}}>{d.name}</div>
                <div style={{fontSize:13, color:'var(--fg-3)', marginTop:2}}>{d.en}</div>
                <div style={{fontSize:13, color:'var(--fg-2)', marginTop:10, paddingTop:10, borderTop:'1px solid var(--border-subtle)'}}>
                  {d.spec}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA BANNER ---------- */
function CTABanner({ onCTA }) {
  return (
    <section style={{padding:'56px 24px', background:'#fff'}}>
      <div style={{
        maxWidth:1200, margin:'0 auto',
        background: 'linear-gradient(135deg, var(--ndb-blue-700) 0%, var(--ndb-blue-500) 100%)',
        borderRadius:'var(--radius-2xl)',
        padding:'48px 56px',
        display:'flex', alignItems:'center', justifyContent:'space-between', gap:32,
        color:'#fff',
        boxShadow:'var(--shadow-brand)',
      }}>
        <div>
          <div style={{fontSize:12, fontWeight:700, letterSpacing:'0.12em', opacity:.85, marginBottom:10}}>
            ONLINE RESERVATION
          </div>
          <h2 style={{fontSize:30, fontWeight:700, lineHeight:1.25, margin:0, letterSpacing:'-0.015em'}}>
            진료 예약은 24시간 온라인으로<br/>편리하게 진행하실 수 있습니다.
          </h2>
        </div>
        <button onClick={onCTA} style={{
          background:'#fff', color:'var(--trust)', border:0,
          padding:'16px 28px', borderRadius:'var(--radius-md)',
          fontSize:16, fontWeight:700, cursor:'pointer',
          display:'inline-flex', alignItems:'center', gap:10,
          boxShadow:'var(--shadow-md)',
          whiteSpace:'nowrap',
        }}>
          지금 예약하기
          <i data-lucide="arrow-right" style={{width:18,height:18}}></i>
        </button>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer style={{background:'var(--ndb-neutral-900)', color:'rgba(255,255,255,0.72)', padding:'48px 24px 32px'}}>
      <div style={{maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1.3fr 1fr 1fr 1fr', gap:40}}>
        <div>
          <img src="../../assets/logo-ndb.svg" alt="NDB" height={44} style={{filter:'brightness(0) invert(1)', opacity:.95}}/>
          <p style={{fontSize:13, lineHeight:1.65, marginTop:16, color:'rgba(255,255,255,0.6)'}}>
            척추·관절 전문병원 · New, Different and much Better.<br/>
            경기 남양주시 ○○로 00 · 대표전화 1588‑0000
          </p>
        </div>
        <FooterCol title="진료 안내" items={['진료예약','진료시간','비급여 항목','오시는 길']}/>
        <FooterCol title="병원 소개" items={['인사말','의료진','시설 안내','채용 정보']}/>
        <FooterCol title="고객 지원" items={['공지사항','자주 묻는 질문','개인정보처리방침','이용약관']}/>
      </div>
      <div style={{maxWidth:1200, margin:'28px auto 0', paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.08)', fontSize:12, color:'rgba(255,255,255,0.45)'}}>
        © 2026 Namyangju Baek Hospital. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{fontSize:13, fontWeight:700, color:'#fff', marginBottom:14}}>{title}</div>
      <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10}}>
        {items.map(i => (
          <li key={i}><a href="#" style={{color:'rgba(255,255,255,0.6)', fontSize:13, textDecoration:'none'}}>{i}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Reservation Page ---------- */
function ReservationPage({ onBack, onConfirm }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ dept:'척추센터', doctor:'김 민 수', date:'2026-04-24', time:'10:30', name:'', phone:'' });
  return (
    <section style={{padding:'56px 24px', background:'var(--bg-app)', minHeight:'calc(100vh - 64px)'}}>
      <div style={{maxWidth:720, margin:'0 auto'}}>
        <button onClick={onBack} style={{...ghostBtn, marginBottom:16}}>
          <i data-lucide="arrow-left" style={{width:16,height:16}}></i>홈으로
        </button>
        <div className="ndb-card" style={{padding:36}}>
          <div className="ndb-overline" style={{color:'var(--trust)'}}>ONLINE RESERVATION</div>
          <h2 style={{fontSize:28, fontWeight:700, marginTop:10, marginBottom:6}}>진료 예약</h2>
          <p style={{fontSize:14, color:'var(--fg-3)', margin:0}}>Step {step} of 2</p>

          <div style={{height:6, background:'var(--bg-muted)', borderRadius:999, marginTop:20, overflow:'hidden'}}>
            <div style={{width: step===1?'50%':'100%', height:'100%', background:'var(--trust)', transition:'width 320ms'}}/>
          </div>

          {step === 1 ? (
            <div style={{marginTop:28, display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
              <Field label="진료과"><select className="ndb-input" value={form.dept} onChange={e=>setForm({...form, dept:e.target.value})}><option>척추센터</option><option>관절센터</option><option>신경과</option><option>내과</option></select></Field>
              <Field label="의료진"><select className="ndb-input" value={form.doctor} onChange={e=>setForm({...form, doctor:e.target.value})}><option>김 민 수</option><option>이 지 현</option><option>박 준 호</option></select></Field>
              <Field label="희망 날짜"><input type="date" className="ndb-input" value={form.date} onChange={e=>setForm({...form, date:e.target.value})}/></Field>
              <Field label="희망 시간"><select className="ndb-input" value={form.time} onChange={e=>setForm({...form, time:e.target.value})}><option>09:30</option><option>10:30</option><option>11:30</option><option>14:00</option><option>15:30</option></select></Field>
              <div style={{gridColumn:'1/-1', display:'flex', justifyContent:'flex-end', marginTop:8}}>
                <button style={primaryBtn} onClick={()=>setStep(2)}>다음 단계 →</button>
              </div>
            </div>
          ) : (
            <div style={{marginTop:28, display:'grid', gap:16}}>
              <Field label="이름"><input className="ndb-input" placeholder="홍길동" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/></Field>
              <Field label="연락처"><input className="ndb-input" placeholder="010-0000-0000" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/></Field>
              <div style={{background:'var(--trust-soft)', padding:14, borderRadius:'var(--radius-md)', fontSize:13, color:'var(--ndb-blue-800)'}}>
                {form.date} · {form.time} · {form.dept} · {form.doctor} 과장
              </div>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:4}}>
                <button style={outlineBtn} onClick={()=>setStep(1)}>← 이전</button>
                <button style={primaryBtn} onClick={onConfirm}>예약 확정</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label style={{display:'block'}}>
      <div style={{fontSize:13, fontWeight:600, marginBottom:6}}>{label}</div>
      {children}
    </label>
  );
}

/* ---------- Confirmed ---------- */
function ConfirmedPage({ onBack }) {
  return (
    <section style={{padding:'80px 24px', background:'var(--bg-app)', minHeight:'calc(100vh - 64px)'}}>
      <div className="ndb-card" style={{maxWidth:520, margin:'0 auto', padding:40, textAlign:'center'}}>
        <div style={{width:64, height:64, borderRadius:'50%', background:'var(--success-soft)', color:'var(--success)', display:'inline-flex', alignItems:'center', justifyContent:'center', marginBottom:20}}>
          <i data-lucide="check" style={{width:32, height:32, strokeWidth:2.25}}></i>
        </div>
        <h2 style={{fontSize:26, fontWeight:700, margin:'0 0 8px'}}>예약이 확정되었습니다</h2>
        <p style={{fontSize:15, color:'var(--fg-2)', margin:'0 0 24px'}}>문자로 예약 안내를 보내드립니다.<br/>방문 전 꼭 확인해 주세요.</p>
        <button style={primaryBtn} onClick={onBack}>홈으로 돌아가기</button>
      </div>
    </section>
  );
}

/* ---------- Button styles ---------- */
const primaryBtn = {
  background:'var(--trust)', color:'#fff', border:0,
  padding:'10px 16px', borderRadius:'var(--radius-md)',
  fontFamily:'inherit', fontSize:14, fontWeight:600,
  cursor:'pointer', minHeight:44,
  display:'inline-flex', alignItems:'center', gap:8,
  boxShadow:'var(--shadow-sm)', transition:'background 200ms, box-shadow 200ms',
};
const outlineBtn = {
  background:'#fff', color:'var(--trust)', border:'1px solid var(--trust)',
  padding:'10px 16px', borderRadius:'var(--radius-md)',
  fontFamily:'inherit', fontSize:14, fontWeight:600,
  cursor:'pointer', minHeight:44,
  display:'inline-flex', alignItems:'center', gap:8,
};
const ghostBtn = {
  background:'transparent', color:'var(--fg-2)', border:0,
  padding:'8px 12px', borderRadius:'var(--radius-md)',
  fontFamily:'inherit', fontSize:14, fontWeight:600,
  cursor:'pointer',
  display:'inline-flex', alignItems:'center', gap:6,
};

Object.assign(window, { GNB, Hero, Stat, Departments, Doctors, CTABanner, Footer, FooterCol, ReservationPage, ConfirmedPage });
