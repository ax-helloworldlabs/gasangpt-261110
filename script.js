const address = '서울 금천구 디지털로10길 78, 가산테라타워 13층 1323호 한국산업지능화협회 교육장';
document.getElementById('copy-address').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(address); status.textContent = '교육장 주소를 복사했습니다.'; }
  catch { status.textContent = address; }
});
let closedForPrint = [];
window.addEventListener('beforeprint', () => {
  closedForPrint = [...document.querySelectorAll('details:not([open])')];
  closedForPrint.forEach(detail => detail.open = true);
});
window.addEventListener('afterprint', () => {
  closedForPrint.forEach(detail => detail.open = false);
  closedForPrint = [];
});
document.getElementById('print-page').addEventListener('click', () => window.print());
