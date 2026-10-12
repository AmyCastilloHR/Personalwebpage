// Shared footer for every page. Edit here once; all pages update.
(function () {
  const S = window.SITE, f = document.getElementById('contact');
  if (!S || !f) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const book = S.bookingUrl || `mailto:${S.email}?subject=${encodeURIComponent('20-minute conversation')}`;
  const ext = S.bookingUrl ? ' target="_blank" rel="noopener"' : '';
  const li = S.links.find(l => /linkedin/i.test(l.label));
  const personal = f.dataset.page === 'personal';
  f.innerHTML = `<div class="wrap">
    <div class="sec" style="border:0">
      <div class="sec-head"><span class="label">Contact</span></div>
      <div>
        <h2>Let's talk about what your business needs from HR.</h2>
        <div class="cta-row" style="margin-top:32px"><a class="btn btn-lg btn-coral" href="${esc(book)}"${ext}>Book a 20-minute conversation <span>→</span></a></div>
        <div class="flinks"><a href="mailto:${esc(S.email)}">${esc(S.email)}</a>${li ? `<a href="${esc(li.url)}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ''}</div>
      </div>
    </div>
    ${S.consulting.logo ? `<img src="${esc(S.consulting.logo)}" alt="Amy Castillo HR Consulting" style="display:block;height:48px;width:auto;margin:0 0 28px" onerror="this.remove()">` : ''}
    <div class="fine"><span>${esc(S.name)}</span>${personal ? '<a href="index.html" style="color:var(--stone)">← Back to consulting</a>' : '<a href="personal.html" style="color:var(--stone)">Beyond the work</a>'}<span>© ${new Date().getFullYear()}</span></div>
  </div>`;
})();
