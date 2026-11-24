'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const INR=n=>'₹'+n.toLocaleString('en-IN');
const U=id=>`https://images.unsplash.com/photo-${id}?w=700&q=70&auto=format&fit=crop`;
const P=[
{id:1,n:'Form Sneaker',c:'Footwear',p:4999,o:6999,s:['7','8','9','10'],i:'1542291026-7eec264c27ff',nw:1,lim:1,st:1,d:'Chunky oversized leather sneaker with a moulded sole.'},
{id:2,n:'Raw Jacket',c:'Streetwear',p:6499,o:8999,s:['S','M','L','XL'],i:'1551028719-00167b16eac5',nw:1,lim:0,st:1,d:'Boxy washed leather-look jacket. Cut wide on purpose.'},
{id:3,n:'Block Tee',c:'Essentials',p:1799,o:2299,s:['S','M','L'],i:'1521572163474-6864f9cf17ab',nw:0,lim:0,st:1,d:'Heavy 280gsm cotton, dropped shoulder.'},
{id:4,n:'Carry Bag',c:'Accessories',p:3499,o:4499,s:['One size'],i:'1548036328-c9fa89d128fa',nw:1,lim:1,st:1,d:'Structured everyday bag with a raw-edge finish.'},
{id:5,n:'Static Watch',c:'Objects',p:8999,o:11999,s:['One size'],i:'1523275335684-37898b6baf30',nw:0,lim:1,st:1,d:'Matte steel case, brushed dial, no logo.'},
{id:6,n:'Shade Frames',c:'Accessories',p:2199,o:2999,s:['One size'],i:'1511499767150-a48a237f0083',nw:1,lim:0,st:1,d:'Acetate frames with UV400 lenses.'},
{id:7,n:'Slab Tee',c:'Essentials',p:1499,o:1999,s:['M','L','XL'],i:'1521572163474-6864f9cf17ab',nw:0,lim:0,st:0,d:'Boxy fit tee. Currently sold out.'},
{id:8,n:'Frame Sneaker',c:'Footwear',p:5499,o:7499,s:['8','9','10','11'],i:'1542291026-7eec264c27ff',nw:0,lim:0,st:1,d:'Low-profile runner with an exposed midsole.'}];
const CATS=['All',...new Set(P.map(p=>p.c))];
const load=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))||f}catch{return f}};
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
let cart=load('b_cart',[]),wish=load('b_wish',[]),F={cat:'All',q:'',max:9000,stock:false,nw:false,sort:'f',wo:false},coupon=0,view='cart';
const find=id=>P.find(p=>p.id==id);
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),1800)};
const img=(p,a='')=>`<img src="${U(p.i)}" alt="${p.n}, ${p.c}" loading="lazy" ${a} onerror="this.style.visibility='hidden'">`;

/* preloader */
(()=>{const w=$('#preWord');'BRUTALIST'.split('').forEach((c,i)=>{const s=document.createElement('span');s.textContent=c;s.style.animationDelay=i*.05+'s';w.append(s)});
let n=0;const t=setInterval(()=>{n+=Math.ceil(Math.random()*9);if(n>=100){n=100;clearInterval(t);setTimeout(()=>$('#pre').classList.add('out'),200)}$('#prePct').textContent=n+'%';$('#preBar').style.width=n+'%'},60)})();

/* shop */
function list(){let l=P.filter(p=>(F.cat=='All'||p.c==F.cat)&&p.p<=F.max&&(!F.stock||p.st)&&(!F.nw||p.nw)&&(!F.wo||wish.includes(p.id))&&(p.n+p.c+p.d).toLowerCase().includes(F.q.toLowerCase()));
if(F.sort=='l')l.sort((a,b)=>a.p-b.p);if(F.sort=='h')l.sort((a,b)=>b.p-a.p);if(F.sort=='n')l.sort((a,b)=>b.nw-a.nw);return l}
function render(){const l=list();$('#chips').innerHTML=CATS.map(c=>`<button class="chip ${F.cat==c?'on':''}" data-cat="${c}">${c}</button>`).join('');
$('#pOut').textContent=INR(F.max);
$('#grid').innerHTML=l.length?l.map((p,i)=>{const dis=Math.round((1-p.p/p.o)*100),w=wish.includes(p.id);
return `<article class="card ${i%5==0?'w':''}">${p.nw?'<span class="lbl">NEW</span>':''}${p.lim?'<span class="lbl lim">LIMITED</span>':''}<div class="im">${img(p)}</div><div class="bd"><h3>${p.n}</h3><span class="cx">${p.c} · ${p.s.join(' / ')}</span><div class="pr"><b>${INR(p.p)}</b><s>${INR(p.o)}</s><em>-${dis}%</em></div></div><div class="acts"><button data-a="w" data-id="${p.id}" class="${w?'on':''}" aria-pressed="${w}">${w?'Saved':'Save'}</button><button data-a="q" data-id="${p.id}">Quick view</button><button data-a="c" data-id="${p.id}" ${p.st?'':'disabled'}>${p.st?'Add':'Sold out'}</button></div></article>`}).join('')
:`<div class="empty">Nothing matches. Clear a filter or <button class="chip" data-reset>reset all</button></div>`;
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});$$('.card').forEach(c=>io.observe(c));
$('#wN').textContent=wish.length}
$('#chips').onclick=e=>{const c=e.target.dataset.cat;if(c){F.cat=c;render()}};
$('#price').oninput=e=>{F.max=+e.target.value;render()};$('#inStock').onchange=e=>{F.stock=e.target.checked;render()};
$('#onlyNew').onchange=e=>{F.nw=e.target.checked;render()};$('#sort').onchange=e=>{F.sort=e.target.value;render()};
$('#grid').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-reset')){F={cat:'All',q:'',max:9000,stock:false,nw:false,sort:'f',wo:false};['inStock','onlyNew'].forEach(i=>$('#'+i).checked=false);$('#price').value=9000;return render()}
const id=+b.dataset.id;if(b.dataset.a=='w')toggleW(id);if(b.dataset.a=='q')quick(id);if(b.dataset.a=='c'){const p=find(id);add(id,p.s[0])}};
function toggleW(id){wish=wish.includes(id)?wish.filter(x=>x!=id):[...wish,id];save('b_wish',wish);toast(wish.includes(id)?'Saved to wishlist':'Removed from wishlist');render()}
/* jump links with filters */
document.addEventListener('click',e=>{const a=e.target.closest('[data-cat],[data-new]');if(!a||a.closest('#chips'))return;
if(a.dataset.cat)F.cat=a.dataset.cat;if(a.dataset.new){F.nw=true;$('#onlyNew').checked=true}render();$('#shop').scrollIntoView({behavior:'smooth'});closeMenu()});
$('#wBtn').onclick=$('#bW').onclick=e=>{F.wo=!F.wo;toast(F.wo?'Showing wishlist only':'Showing all products');render()};

/* quick view */
function quick(id){const p=find(id);let sz=p.s[0];const d=$('#qv');
d.innerHTML=`<div class="qvb">${img(p)}<div><button data-x style="justify-self:end;font:700 13px -apple-system, Inter">Close</button><h3>${p.n}</h3><div class="pr"><b>${INR(p.p)}</b><s>${INR(p.o)}</s></div><p>${p.d}</p><div class="sz" role="group" aria-label="Size">${p.s.map((s,i)=>`<button class="${i?'':'on'}" data-s="${s}">${s}</button>`).join('')}</div><p class="note">${p.st?'In stock · Delivery in 3–5 days':'Out of stock'}</p><button class="btn" data-add ${p.st?'':'disabled'}>Add to bag</button></div></div>`;
d.onclick=e=>{const b=e.target.closest('button');if(e.target===d||b?.dataset.x!==undefined)d.close();if(b?.dataset.s){sz=b.dataset.s;$$('.sz button',d).forEach(x=>x.classList.toggle('on',x==b))}if(b?.hasAttribute('data-add')){add(id,sz);d.close()}};d.showModal()}

/* cart */
const ov=$('#ov'),dr=$('#drawer');
function add(id,size){const l=cart.find(x=>x.id==id&&x.s==size);l?l.q++:cart.push({id,s:size,q:1});persist();toast('Added to bag');const n=$('#cN');n.classList.remove('bump');void n.offsetWidth;n.classList.add('bump')}
function persist(){save('b_cart',cart);$('#cN').textContent=cart.reduce((a,x)=>a+x.q,0);drawer()}
function totals(){const sub=cart.reduce((a,x)=>a+find(x.id).p*x.q,0),sav=cart.reduce((a,x)=>a+(find(x.id).o-find(x.id).p)*x.q,0),cp=Math.round(sub*coupon),ship=!cart.length||sub-cp>=5000?0:199;return{sub,sav,cp,ship,tot:sub-cp+ship}}
function openD(v){view=v||'cart';drawer();ov.hidden=false;dr.classList.add('open');dr.setAttribute('aria-hidden','false')}
function closeD(){dr.classList.remove('open');dr.setAttribute('aria-hidden','true');ov.hidden=true}
function drawer(){const t=totals();
if(view=='done')return dr.innerHTML=`<h2>ORDER PLACED <button data-cl aria-label="Close">×</button></h2><p class="note">Demo order. No payment was taken and nothing will ship.</p><p style="margin:16px 0">Thanks. Your confirmation was saved to this browser only.</p><button class="btn" data-cl>Continue shopping</button>`;
if(view=='pay')return dr.innerHTML=`<h2>CHECKOUT <button data-cl aria-label="Close">×</button></h2><p class="note">Simulated payment: no real money moves.</p><form id="co" novalidate><input name="name" placeholder="Full name" autocomplete="name"><input name="email" type="email" placeholder="Email" autocomplete="email"><input name="phone" placeholder="Phone (10 digits)" autocomplete="tel"><input name="addr" placeholder="Shipping address"><input name="city" placeholder="City"><input name="pin" placeholder="Postal code (6 digits)"><select name="pay"><option>UPI (simulated)</option><option>Card (simulated)</option><option>Cash on delivery</option></select><div class="err" id="err"></div><div class="sum"><div class="tot"><span>Total</span><span>${INR(t.tot)}</span></div></div><button class="btn">Place demo order</button><button type="button" data-back class="btn alt">Back to bag</button></form>`;
dr.innerHTML=`<h2>BAG <button data-cl aria-label="Close bag">×</button></h2>`+(cart.length?cart.map((x,i)=>{const p=find(x.id);return `<div class="line">${img(p)}<div>${p.n}<br><small>Size ${x.s} · ${INR(p.p)}</small><div class="qty"><button data-m="${i}" aria-label="Decrease">−</button><span>${x.q}</span><button data-p="${i}" aria-label="Increase">+</button></div></div><button data-r="${i}" aria-label="Remove ${p.n}">Remove</button></div>`}).join('')+`<div class="sum"><div><span>Subtotal</span><span>${INR(t.sub)}</span></div><div><span>You save vs original</span><span>${INR(t.sav)}</span></div>${t.cp?`<div><span>Coupon</span><span>-${INR(t.cp)}</span></div>`:''}<div><span>Shipping</span><span>${t.ship?INR(t.ship):'Free'}</span></div><div class="tot"><span>Total</span><span>${INR(t.tot)}</span></div><input id="cpn" placeholder="Coupon (try BREAK10)" style="margin:8px 0"><button class="btn" data-co style="width:100%">Checkout</button></div>`
:`<p style="margin:30px 0;font:700 20px -apple-system, Inter">Your bag is empty.</p><button class="btn" data-cl>Continue shopping</button>`)}
dr.onclick=e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset;
if('cl' in d){closeD();if(view=='done'){view='cart';}}
if('m' in d){cart[d.m].q--;if(cart[d.m].q<1)cart.splice(d.m,1);persist()}if('p' in d){cart[d.p].q++;persist()}if('r' in d){cart.splice(d.r,1);persist()}
if('co' in d){const c=$('#cpn').value.trim().toUpperCase();if(c){if(c=='BREAK10'){coupon=.1}else{coupon=0;toast('Coupon not valid')}}view='pay';drawer()}
if('back' in d){view='cart';drawer()}};
dr.onsubmit=e=>{e.preventDefault();const f=e.target,v=n=>f[n].value.trim(),er=$('#err');
const m=!v('name')?'Enter your full name.':!/^\S+@\S+\.\S+$/.test(v('email'))?'Enter a valid email.':!/^\d{10}$/.test(v('phone'))?'Phone must be 10 digits.':!v('addr')||!v('city')?'Enter address and city.':!/^\d{6}$/.test(v('pin'))?'Postal code must be 6 digits.':'';
if(m){er.textContent=m;return}cart=[];coupon=0;persist();view='done';drawer()};
ov.onclick=closeD;$('#cBtn').onclick=$('#bB').onclick=e=>{e.preventDefault();openD()};
document.addEventListener('keydown',e=>{if(e.key=='Escape'){closeD();$('#srch').hidden=true;closeMenu()}});

/* search */
const sr=$('#srch');$('#sBtn').onclick=()=>{sr.hidden=false;$('#sq').focus()};$('#sx').onclick=()=>sr.hidden=true;
$('#sq').oninput=e=>{const q=e.target.value.trim().toLowerCase(),r=q?P.filter(p=>(p.n+p.c).toLowerCase().includes(q)):[];
$('#sug').innerHTML=!q?'':r.length?r.map(p=>`<button data-sid="${p.id}">${p.n} — ${INR(p.p)}</button>`).join(''):'No results. Try "sneaker", "jacket" or "watch".'};
$('#sug').onclick=e=>{const id=e.target.dataset.sid;if(id){sr.hidden=true;F.q=find(id).n;render();$('#shop').scrollIntoView();quick(+id);F.q=''}};

/* menu, motion, misc */
const mn=$('#menu');function closeMenu(){mn.classList.remove('open');setTimeout(()=>mn.hidden=true,600);$('#mBtn').setAttribute('aria-expanded','false')}
$('#mBtn').onclick=()=>{if(mn.hidden){mn.hidden=false;requestAnimationFrame(()=>mn.classList.add('open'));$('#mBtn').setAttribute('aria-expanded','true')}else closeMenu()};
$('#news').onsubmit=e=>{e.preventDefault();toast('Subscribed (demo)');e.target.reset()};
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!rm){const h=$('#heroImg img');let y=0,tk=false;addEventListener('scroll',()=>{y=scrollY;if(!tk){tk=true;requestAnimationFrame(()=>{if(h)h.style.transform=`translateY(${-Math.min(y,900)*.12}px)`;tk=false})}},{passive:true});
const cur=$('#cur');addEventListener('pointermove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px'});
document.addEventListener('pointerover',e=>cur.classList.toggle('big',!!e.target.closest('a,button,.cat')));
$$('.mag').forEach(b=>{b.onpointermove=e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.25}px)`};b.onpointerleave=()=>b.style.transform=''})}
render();persist();