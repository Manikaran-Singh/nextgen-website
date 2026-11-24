:root{--bg:#f5f5f7;--ink:#1d1d1f;--mut:#6e6e73;--blue:#0071e3;--line:rgba(0,0,0,.1);--f:-apple-system,BlinkMacSystemFont,'SF Pro Display','Inter',system-ui,sans-serif;--glass:rgba(255,255,255,.72)}
*{box-sizing:border-box;margin:0}html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--ink);font:400 17px/1.47 var(--f);-webkit-font-smoothing:antialiased;overflow-x:hidden;padding-bottom:env(safe-area-inset-bottom)}
a{color:inherit;text-decoration:none}button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}img{display:block;max-width:100%}
:focus-visible{outline:3px solid rgba(0,113,227,.6);outline-offset:2px}
#cur{display:none!important}
#pre{position:fixed;inset:0;background:#fff;color:var(--ink);z-index:99;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;transition:opacity .7s,visibility .7s}
#pre.out{opacity:0;visibility:hidden}
.pre-word{font:700 clamp(34px,9vw,84px)/1 var(--f);letter-spacing:-.04em;display:flex}.pre-word span{display:inline-block;transform:translateY(40%);opacity:0;animation:up .6s forwards}
@keyframes up{to{transform:none;opacity:1}}
.pre-bar{width:180px;height:3px;border-radius:3px;background:#e5e5ea;overflow:hidden}.pre-bar i{display:block;height:100%;width:0;background:var(--blue)}#prePct{font-size:13px;color:var(--mut)}
.top{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;padding:0 max(4vw,18px);height:calc(52px + env(safe-area-inset-top));padding-top:env(safe-area-inset-top);background:var(--glass);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);border-bottom:1px solid var(--line)}
.logo{font:600 19px var(--f);letter-spacing:-.02em}
.dnav{display:none;gap:30px;font-size:13px}.dnav a{color:var(--mut);transition:color .2s}.dnav a:hover{color:var(--ink)}
.tools{display:flex;gap:16px;font-size:13px;color:var(--mut)}.tools button:hover{color:var(--ink)}.tools sup{background:var(--blue);color:#fff;border-radius:9px;padding:1px 6px;margin-left:3px;font-size:11px}
.tools sup.bump{animation:bump .4s}@keyframes bump{50%{transform:scale(1.5)}}
#wBtn{display:none}@media(min-width:900px){.dnav,#wBtn{display:flex}.burger{display:none}}
.menu{position:fixed;inset:0;z-index:19;background:rgba(245,245,247,.92);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);display:flex;flex-direction:column;justify-content:center;gap:6px;padding:8vw;opacity:0;transition:opacity .4s}
.menu.open{opacity:1}.menu a{font:600 clamp(36px,10vw,64px)/1.15 var(--f);letter-spacing:-.03em}
.hero{display:flex;flex-direction:column;align-items:center;text-align:center;padding:clamp(48px,9vw,110px) 5vw 0;background:#fff}
h1{order:1;font:700 clamp(48px,10.5vw,136px)/1 var(--f);letter-spacing:-.045em}
h1 .l{display:block;opacity:0;transform:translateY(24px);animation:in .9s forwards}h1 .l:nth-child(2){animation-delay:.12s}@keyframes in{to{opacity:1;transform:none}}
.hero-copy{order:2;max-width:520px;margin:18px 0 24px;font:400 clamp(19px,2.4vw,28px)/1.25 var(--f);color:var(--mut)}
.cta{order:3;display:flex;gap:14px;flex-wrap:wrap;justify-content:center}
.hero-img{order:4;position:relative;width:min(1180px,100%);height:min(62vw,620px);margin-top:48px;border-radius:28px 28px 0 0;overflow:hidden;animation:rise 1.2s .5s cubic-bezier(.2,.8,.2,1) both}
@keyframes rise{from{opacity:0;transform:translateY(40px)}}
.hero-img img{width:100%;height:116%;object-fit:cover}
.orange,.tag,.scrollcue,.marquee{display:none}
.btn{display:inline-flex;align-items:center;justify-content:center;background:var(--blue);color:#fff;font:500 17px var(--f);padding:12px 24px;min-height:48px;border-radius:980px;border:1px solid var(--blue);transition:background .2s,transform .2s}
.btn:hover{background:#0077ed}.btn.alt{background:transparent;color:var(--blue)}.btn.alt:hover{background:rgba(0,113,227,.08)}.btn:disabled{background:#d2d2d7;border-color:#d2d2d7}
.cats{display:grid;grid-template-columns:repeat(6,1fr);grid-auto-rows:46vw;gap:12px;padding:12px;max-width:1280px;margin:0 auto}
.cat{position:relative;overflow:hidden;border-radius:28px;color:#fff;text-align:left;padding:24px;display:flex;align-items:flex-start;background:#000}
.cat:before{content:"";position:absolute;inset:0;background:linear-gradient(#0008,transparent 55%),var(--bg) center/cover;transition:transform .8s cubic-bezier(.2,.8,.2,1)}.cat:hover:before{transform:scale(1.05)}
.cat span{position:relative;font:600 clamp(24px,3.4vw,40px)/1.1 var(--f);letter-spacing:-.025em}
.c1{grid-column:span 4;--bg:url(https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=60)}.c2{grid-column:span 2;--bg:url(https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=60)}
.c3,.c4,.c5{grid-column:span 2}.c3{--bg:url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=60)}.c4{--bg:url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=60)}.c5{--bg:url(https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=60)}
@media(min-width:900px){.cats{grid-auto-rows:26vw;max-height:none}.c1{grid-column:span 4}.c2{grid-column:span 2}}
.shop{padding:clamp(56px,9vw,120px) max(4vw,18px);max-width:1280px;margin:0 auto}
.big{font:700 clamp(36px,7vw,80px)/1.05 var(--f);letter-spacing:-.035em}
.bar{display:flex;flex-wrap:wrap;gap:14px 26px;align-items:center;margin:28px 0;font-size:14px;color:var(--mut)}
.chips{display:flex;gap:2px;flex-wrap:wrap;background:rgba(0,0,0,.06);padding:3px;border-radius:980px}.chip{padding:6px 14px;min-height:36px;border-radius:980px;color:var(--ink);font-size:14px;transition:background .2s}.chip.on{background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.15)}
.bar label{display:flex;gap:8px;align-items:center}.bar select{font:inherit;padding:6px 10px;border-radius:10px;border:1px solid var(--line);background:#fff;color:var(--ink)}.bar input[type=range]{accent-color:var(--blue)}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;grid-auto-flow:dense}
@media(min-width:900px){.grid{grid-template-columns:repeat(4,1fr);gap:20px}.card.w{grid-column:span 2}}
.card{position:relative;background:#fff;border-radius:24px;overflow:hidden;display:flex;flex-direction:column;opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
.card.in{opacity:1;transform:none}.card:hover{box-shadow:0 14px 40px rgba(0,0,0,.12);transform:scale(1.015)}
.card .im{aspect-ratio:4/5;background:#ececf0;overflow:hidden}.card.w .im{aspect-ratio:1/1}
.card img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.8,.2,1)}.card:hover img{transform:scale(1.05)}
.card .bd{padding:16px 16px 8px;display:flex;flex-direction:column;gap:3px;flex:1}.card h3{font:600 17px var(--f);letter-spacing:-.01em}.card .cx{font-size:13px;color:var(--mut)}
.pr{margin-top:4px;font-size:15px}.pr b{font-weight:600}.pr s{color:var(--mut);margin:0 6px;font-size:14px}.pr em{color:#bf4800;font-size:13px;font-style:normal}
.lbl{position:absolute;top:12px;left:12px;background:var(--glass);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);font:600 11px var(--f);padding:4px 10px;border-radius:980px;z-index:2}.lbl.lim{top:42px;background:var(--ink);color:#fff}
.acts{display:flex;align-items:center;gap:4px;padding:6px 10px 14px;flex-wrap:wrap}.acts button{min-height:36px;padding:0 12px;border-radius:980px;font-size:14px;color:var(--blue);transition:background .2s}
.acts button:hover{background:rgba(0,113,227,.08)}.acts .on{font-weight:600}.acts button:last-child{margin-left:auto;background:var(--blue);color:#fff}.acts button:last-child:hover{background:#0077ed}.acts button:disabled{background:#d2d2d7!important;color:#fff}
.empty{grid-column:1/-1;padding:60px 0;font:600 22px var(--f);text-align:center}.empty .chip{background:#fff;font-size:15px}
.about{background:#000;color:#f5f5f7;padding:clamp(70px,11vw,150px) max(5vw,18px);display:grid;gap:28px;justify-items:center;text-align:center}.about .big{max-width:900px}
.about p{max-width:560px;font-size:21px;line-height:1.38;color:#a1a1a6}
.stats{display:flex;gap:clamp(24px,7vw,90px);flex-wrap:wrap;justify-content:center;margin:12px 0}.stats div{font-size:14px;color:#a1a1a6}.stats b{display:block;font:700 clamp(48px,8vw,88px)/1 var(--f);letter-spacing:-.04em;color:#f5f5f7}
footer{background:var(--bg);padding:60px max(4vw,18px) 120px;display:grid;gap:22px;max-width:1280px;margin:0 auto;color:var(--mut);font-size:13px}
.foot-logo{font:700 28px var(--f);letter-spacing:-.03em;color:var(--ink)}
.news{display:flex;flex-wrap:wrap;gap:10px;align-items:center;font-size:15px;color:var(--ink)}.news input{flex:1;min-width:200px;max-width:340px;padding:12px 18px;border-radius:980px;border:1px solid var(--line);font:inherit;background:#fff}
footer nav{display:flex;flex-wrap:wrap;gap:8px 22px;padding-top:16px;border-top:1px solid var(--line)}footer a:hover{color:var(--ink);text-decoration:underline}
.bnav{position:fixed;bottom:0;left:0;right:0;z-index:18;display:flex;background:var(--glass);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);border-top:1px solid var(--line);padding-bottom:env(safe-area-inset-bottom);font-size:11px}
.bnav a{flex:1;text-align:center;color:var(--mut);padding:12px 0}.bnav a:active{color:var(--blue)}@media(min-width:900px){.bnav{display:none}footer{padding-bottom:60px}}
.ov{position:fixed;inset:0;background:rgba(0,0,0,.35);backdrop-filter:blur(4px);z-index:30}
.drawer{position:fixed;top:8px;right:8px;bottom:8px;width:min(440px,calc(100% - 16px));z-index:31;background:rgba(255,255,255,.88);backdrop-filter:saturate(180%) blur(30px);-webkit-backdrop-filter:saturate(180%) blur(30px);border-radius:28px;box-shadow:0 20px 60px rgba(0,0,0,.25);transform:translateX(110%);transition:transform .55s cubic-bezier(.2,.8,.2,1);display:flex;flex-direction:column;padding:22px;overflow:auto}
.drawer.open{transform:none}.drawer h2{font:700 28px var(--f);letter-spacing:-.03em;display:flex;justify-content:space-between;margin-bottom:8px}
.line{display:grid;grid-template-columns:72px 1fr auto;gap:14px;padding:14px 0;border-bottom:1px solid var(--line);font-size:15px;font-weight:500}.line img{width:72px;height:90px;object-fit:cover;border-radius:12px}.line small{color:var(--mut);font-weight:400}.line>button{color:var(--blue);font-size:14px;align-self:start}
.qty{margin-top:8px}.qty button{background:#ececf0;border-radius:50%;width:30px;height:30px}.qty span{display:inline-block;width:30px;text-align:center}
.sum{margin-top:auto;padding-top:16px;font-size:15px}.sum div{display:flex;justify-content:space-between;padding:3px 0}.sum .tot{font:600 20px var(--f);border-top:1px solid var(--line);margin-top:8px;padding-top:12px}
.drawer form{display:grid;gap:10px}.drawer input,.drawer select{padding:14px;border-radius:12px;border:1px solid var(--line);font:inherit;font-size:16px;background:#fff;width:100%}.drawer .btn{width:100%}
.err{color:#d70015;font-size:13px}.note{background:#e8f1fd;color:#0058b0;padding:10px 14px;border-radius:12px;font-size:13px}
dialog{border:0;border-radius:28px;padding:0;width:min(880px,94vw);background:#fff;margin:auto;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.35)}dialog::backdrop{background:rgba(0,0,0,.4);backdrop-filter:blur(6px)}
dialog[open]{animation:pop .45s cubic-bezier(.2,.8,.2,1)}@keyframes pop{from{opacity:0;transform:scale(.94)}}
.qvb{display:grid;grid-template-columns:1fr}@media(min-width:700px){.qvb{grid-template-columns:1fr 1fr}}
.qvb img{width:100%;height:100%;max-height:70vh;object-fit:cover}.qvb>div{padding:28px;display:grid;gap:14px;align-content:start}.qvb h3{font:700 34px/1.1 var(--f);letter-spacing:-.03em}.qvb>div>button[data-x]{color:var(--blue)!important;font:500 15px var(--f)!important}
.sz{display:flex;gap:8px;flex-wrap:wrap}.sz button{border:1px solid #d2d2d7;border-radius:12px;min-width:48px;min-height:44px;font-size:15px}.sz .on{border:2px solid var(--blue);color:var(--blue);font-weight:600}
.srch{position:fixed;inset:0;z-index:40;background:rgba(245,245,247,.94);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);padding:max(8vw,60px) max(6vw,20px);padding-top:calc(60px + env(safe-area-inset-top))}
.srch input{width:100%;max-width:800px;display:block;background:none;border:0;border-bottom:1px solid var(--line);font:600 clamp(28px,6vw,56px) var(--f);letter-spacing:-.03em;color:var(--ink);padding:8px 0;outline:0}
#sx{position:absolute;right:max(5vw,18px);top:calc(18px + env(safe-area-inset-top));color:var(--blue);font-size:17px}
#sug{margin-top:20px;max-width:800px;font-size:19px;color:var(--mut)}#sug button{display:block;padding:14px 0;text-align:left;width:100%;border-bottom:1px solid var(--line);color:var(--ink)}
#toast{position:fixed;left:50%;bottom:90px;transform:translate(-50%,30px);background:rgba(29,29,31,.92);backdrop-filter:blur(12px);color:#fff;padding:12px 22px;border-radius:980px;font-size:14px;opacity:0;transition:.35s;z-index:60;pointer-events:none}#toast.show{opacity:1;transform:translate(-50%,0)}
@media(prefers-reduced-motion:reduce){*,*:before{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}html{scroll-behavior:auto}}