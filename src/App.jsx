import { useState } from 'react';
import { Coffee, Heart, ShieldCheck, ArrowUpRight, Sparkles, Check, Copy } from 'lucide-react';

const amounts = [10, 25, 50, 100];

export default function App() {
  const [amount, setAmount] = useState(25);
  const [custom, setCustom] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [notice, setNotice] = useState('');

  const selectedAmount = custom === '' ? amount : Number(custom);
  const validAmount = Number.isFinite(selectedAmount) && selectedAmount >= 5 && selectedAmount <= 10000;

  function continueToPayment() {
    if (!validAmount) {
      setNotice('Choose an amount between K5 and K10,000.');
      return;
    }
    setNotice('Payment provider not connected yet. This is the preview checkout step.');
  }

  return (
    <main className="page-shell">
      <nav className="topbar">
        <a className="brand" href="#" aria-label="Home"><span className="brand-mark"><Coffee size={19}/></span> little<span className="brand-light">thanks.</span></a>
        <span className="nav-note"><span className="live-dot"/> A little kindness goes a long way</span>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14}/> SUPPORT INDEPENDENT CREATORS</div>
          <h1>Good things happen<br/>when we <span>help each other.</span></h1>
          <p className="intro">If something I've made, shared, or built has been useful to you, you can leave a little support here. Every contribution helps me keep creating.</p>
          <div className="creator-row">
            <div className="avatar">P</div>
            <div><strong>Support the creator</strong><small>Building, learning & sharing along the way</small></div>
          </div>
          <div className="trust-line"><ShieldCheck size={16}/> Secure payment experience <span>·</span> No subscription</div>
        </div>

        <section className="support-card" aria-label="Contribution form">
          <div className="card-heading">
            <div><span className="card-kicker">MAKE A LITTLE DIFFERENCE</span><h2>Send some support <Heart size={19} fill="#e68b72" stroke="#e68b72"/></h2></div>
            <div className="coffee-stamp"><Coffee size={23}/></div>
          </div>
          <p className="muted">Choose an amount to send. It all adds up.</p>

          <div className="field-label">CHOOSE AN AMOUNT <span>ZMW (K)</span></div>
          <div className="amount-grid">
            {amounts.map(value => <button key={value} className={custom === '' && amount === value ? 'amount active' : 'amount'} onClick={() => {setAmount(value);setCustom('');setNotice('');}}><span>K</span>{value}{value === 25 && <em>POPULAR</em>}</button>)}
          </div>
          <label className="field-label custom-label" htmlFor="custom">OR ENTER A CUSTOM AMOUNT</label>
          <div className="custom-input"><span>K</span><input id="custom" type="number" min="5" max="10000" placeholder="Your amount" value={custom} onChange={e => {setCustom(e.target.value);setNotice('');}}/><span className="currency">ZMW</span></div>

          <div className="form-divider"/>
          <label className="field-label" htmlFor="supporter">YOUR NAME <span>OPTIONAL</span></label>
          <input id="supporter" className="text-input" placeholder="What should we call you?" value={name} onChange={e => setName(e.target.value)}/>
          <label className="field-label message-label" htmlFor="message">LEAVE A MESSAGE <span>OPTIONAL</span></label>
          <textarea id="message" className="text-input message-input" placeholder="A kind word goes a long way..." maxLength={180} value={message} onChange={e => setMessage(e.target.value)}/>
          <label className="anonymous"><input type="checkbox" checked={anonymous} onChange={e => setAnonymous(e.target.checked)}/> I'd like to support anonymously</label>

          <button className="pay-button" onClick={continueToPayment} disabled={!validAmount}>Continue with K{validAmount ? selectedAmount.toLocaleString('en-ZM') : '—'} <ArrowUpRight size={18}/></button>
          {notice && <p className="notice" role="status">{notice}</p>}
          <p className="secure-note"><ShieldCheck size={14}/> You'll be redirected to a secure payment provider.</p>
          <div className="provider-note">PAYMENTS POWERED BY A TRUSTED PROVIDER <span>·</span> COMING SOON</div>
        </section>
      </section>

      <section className="bottom-note">
        <div className="note-icon"><Heart size={17}/></div>
        <p><strong>Every little bit counts.</strong> Your support helps make more ideas, experiments and useful things possible.</p>
        <span className="tiny-spark">✳</span>
      </section>
      <footer><span>© 2026 LittleThanks</span><span>Made with care, shared with gratitude.</span></footer>
    </main>
  );
}