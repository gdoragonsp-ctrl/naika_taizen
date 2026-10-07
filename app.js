const box=document.getElementById('q'),out=document.getElementById('out'),cnt=document.getElementById('cnt');
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function draw(){const q=box.value.trim().toLowerCase();let h='',g='',n=0;
for(const r of SAKUIN){if(q&&!r.t.toLowerCase().includes(q))continue;n++;
if(r.g!==g){if(g)h+='</dl>';g=r.g;h+='<h2>'+g+'</h2><dl class="ix">'}
h+='<div><dt>'+esc(r.t)+'</dt><dd>'+r.e.map(e=>'<span class="v">'+e[0]+'</span>'+e[1]+' '+esc(e[2])+'　p.'+e[3]).join('<br>')+'</dd></div>'}
out.innerHTML=h+(g?'</dl>':'');cnt.textContent=n+' 語'}
box.addEventListener('input',draw);draw();
