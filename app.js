const box=document.getElementById('q'),out=document.getElementById('out'),cnt=document.getElementById('cnt'),chips=document.getElementById('chips');
const VC={'病棟編':'b','救急編':'k','外来編':'g'};let vol='';
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function draw(){const q=box.value.trim().toLowerCase();let h='',g='',n=0;const gs=[];
for(const r of SAKUIN){if(q&&!r.t.toLowerCase().includes(q))continue;const es=vol?r.e.filter(e=>e[0]===vol):r.e;if(!es.length)continue;n++;
if(r.g!==g){if(g)h+='</dl>';g=r.g;gs.push(g);h+='<h2 class="g" id="g-'+g+'"><span>'+g+'</span></h2><dl class="ix">'}
h+='<div><dt>'+esc(r.t)+'</dt><dd>'+es.map(e=>'<span class="r"><span class="v '+VC[e[0]]+'">'+e[0].slice(0,2)+'</span>'+e[1]+'　<span class="p">p.'+e[3]+'</span></span>').join('')+'</dd></div>'}
out.innerHTML=n?h+'</dl>':'<p class="empty">その語は索引にありません。語の一部だけを入れてみてください。</p>';cnt.textContent=n+' 語';
chips.innerHTML=['','病棟編','救急編','外来編'].map(v=>'<button data-v="'+v+'"'+(v===vol?' class="on"':'')+'>'+(v||'3巻すべて')+'</button>').join('')+gs.map(x=>'<a href="#g-'+x+'">'+x+'</a>').join('')}
chips.addEventListener('click',e=>{const b=e.target.closest('button');if(b){vol=b.dataset.v;draw()}});
box.addEventListener('input',draw);draw();
