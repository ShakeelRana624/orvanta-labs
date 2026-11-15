const menu=document.querySelector('.menu-toggle');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));document.getElementById('site-nav').classList.toggle('is-open',open);menu.textContent=open?'Close −':'Menu +';});
const enquiryForm=document.getElementById('enquiry-form');
if(enquiryForm){
 const serviceField=document.getElementById('service');
 const serviceChoices={vision:'Computer vision',ml:'Applied machine learning',automation:'Workflow automation',knowledge:'Knowledge assistant',agency:'Agency partnership',discovery:'Help me scope an idea'};
 const requestedService=new URLSearchParams(location.search).get('service');
 if(serviceField&&Object.prototype.hasOwnProperty.call(serviceChoices,requestedService))serviceField.value=serviceChoices[requestedService];
 const submitButton=document.getElementById('send-enquiry');
 const status=document.getElementById('form-status');
 let sending=false;
 const showStatus=(message,type)=>{status.hidden=false;status.textContent=message;status.dataset.state=type;};
 document.getElementById('brief').addEventListener('input',e=>e.target.setCustomValidity(''));
 enquiryForm.addEventListener('submit',async event=>{
  event.preventDefault();if(sending||!enquiryForm.reportValidity())return;
  const data=new FormData(enquiryForm);
  if(String(data.get('_honey')||'').trim()){showStatus('Please email us directly to discuss your project.','error');return;}
  const name=String(data.get('name')||'').trim().slice(0,100);
  const email=String(data.get('email')||'').trim().slice(0,254);
  const message=String(data.get('message')||'').trim().slice(0,2000);
  if(!name||!email||message.length<15){document.getElementById('brief').setCustomValidity('Please describe the problem in at least 15 characters.');enquiryForm.reportValidity();return;}
  const payload={name,email,company:String(data.get('company')||'').trim().slice(0,150),service:String(data.get('service')||'').slice(0,100),message,_subject:'New project enquiry | Orvanta Labs',_template:'table',_url:'https://orvanta-labs.sociableanchovy16.chatgpt.site/contact.html'};
  sending=true;submitButton.disabled=true;submitButton.textContent='Sending…';enquiryForm.setAttribute('aria-busy','true');showStatus('Sending your enquiry…','pending');
  const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),25000);
  try{
   const response=await fetch('https://formsubmit.co/ajax/shakeelrana6240@gmail.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload),signal:controller.signal});
   const result=await response.json();
   if(!response.ok||!(result.success===true||result.success==='true'))throw new Error('Submission not accepted');
   enquiryForm.reset();showStatus('Thank you. Your enquiry has been submitted. We will reply to the email address you provided.','success');status.focus();
  }catch(error){showStatus('We could not confirm your submission. Your details are still here. Please try again or email shakeelrana6240@gmail.com directly.','error');status.focus();}
  finally{clearTimeout(timeout);sending=false;submitButton.disabled=false;submitButton.textContent='Send enquiry ↗';enquiryForm.removeAttribute('aria-busy');}
 });
 if(new URLSearchParams(location.search).get('submitted')==='1'){showStatus('The email service has returned you to this page. If it requested a confirmation step, complete that step before relying on delivery.','info');}
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
