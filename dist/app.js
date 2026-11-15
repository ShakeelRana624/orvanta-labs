const menu=document.querySelector('.menu-toggle');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));document.getElementById('site-nav').classList.toggle('is-open',open);menu.textContent=open?'Close −':'Menu +';});
if(document.getElementById('enquiry-form')){
document.getElementById('enquiry-form').addEventListener('submit',e=>{e.preventDefault();if(!e.currentTarget.reportValidity())return;const data=new FormData(e.currentTarget);const name=String(data.get('name')||'').trim().slice(0,100);const brief=String(data.get('brief')||'').trim().slice(0,2000);if(!name||brief.length<15){document.getElementById('brief').setCustomValidity('Please describe the problem in at least 15 characters.');document.getElementById('brief').reportValidity();return;}document.getElementById('brief').setCustomValidity('');const company=String(data.get('company')||'').trim().slice(0,150);const message=`Hi Shakeel, I'm ${name}${company?' from '+company:''}.\n\nI'm interested in: ${data.get('service')}.\n\nProblem: ${brief}\n\nCan we discuss a focused pilot?`;window.open('https://wa.me/923198492624?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');});
document.getElementById('brief').addEventListener('input',e=>e.target.setCustomValidity(''));

}
const filterButtons=[...document.querySelectorAll('[data-filter]')];
if(filterButtons.length){
 const search=document.getElementById('project-search');const cards=[...document.querySelectorAll('.project-card')];
 const params=new URLSearchParams(location.search);let category=['vision','ml','agents'].includes(params.get('category'))?params.get('category'):'all';search.value=(params.get('q')||'').slice(0,100);
 function update(){const term=search.value.trim().toLowerCase();let shown=0;cards.forEach(card=>{card.hidden=!((category==='all'||card.dataset.category===category)&&card.dataset.title.includes(term));if(!card.hidden)shown++;});filterButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));document.getElementById('project-count').textContent=`Showing ${shown} ${shown===1?'project':'projects'}`;document.getElementById('no-projects').hidden=shown!==0;const p=new URLSearchParams();if(category!=='all')p.set('category',category);if(term)p.set('q',search.value.trim());history.replaceState(null,'',location.pathname+(p.size?'?'+p.toString():''));}
 filterButtons.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;update();}));search.addEventListener('input',update);update();
}
// Only these reviewed project IDs may create a third-party frame.
const allowedLinkedInPosts=new Set(['7408115374870798337','7525612135318630400']);
document.querySelectorAll('.linkedin-load').forEach(button=>button.addEventListener('click',()=>{
 const id=button.dataset.post;if(!allowedLinkedInPosts.has(id))return;
 const slot=button.parentElement.querySelector('.linkedin-slot');if(slot.querySelector('iframe'))return;
 const frame=document.createElement('iframe');frame.src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:'+id;
 frame.title='Original LinkedIn project showcase';frame.loading='lazy';frame.referrerPolicy='no-referrer';frame.setAttribute('sandbox','allow-scripts allow-same-origin allow-popups');frame.setAttribute('allow','fullscreen');frame.allowFullscreen=true;slot.appendChild(frame);button.disabled=true;button.textContent='Showcase loaded below';
}));
