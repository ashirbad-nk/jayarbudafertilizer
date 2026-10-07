// Mobile nav, product filters, FAQ deep-link, enquiry form -> WhatsApp/mailto fallback, footer year.
(function(){
  var t=document.querySelector('.nav-toggle'), n=document.querySelector('.site-nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});}
  // Product filters
  var chips=document.querySelectorAll('.chip');
  var cards=document.querySelectorAll('[data-cat]');
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('active');});c.classList.add('active');
    var f=c.getAttribute('data-filter');
    cards.forEach(function(card){
      var show = f==='all' || card.getAttribute('data-cat')===f;
      card.style.display = show?'':'none';
    });
  });});
  // Enquiry form -> WhatsApp + mailto
  var form=document.getElementById('enquiry-form');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    var fd=new FormData(form);
    var msg='Namaste Jay Arbuda!%0AName: '+encodeURIComponent(fd.get('name')||'')+
      '%0APhone: '+encodeURIComponent(fd.get('phone')||'')+
      '%0ANeed: '+encodeURIComponent(fd.get('need')||'')+
      '%0AMessage: '+encodeURIComponent(fd.get('message')||'');
    var wa='https://wa.me/917978601417?text='+msg;
    var mail='mailto:tripathychinmayee1@gmail.com?subject='+encodeURIComponent('Enquiry: '+(fd.get('need')||'fertilizer'))+'&body='+decodeURIComponent(String(msg).replace(/%0A/g,'\n'));
    document.getElementById('form-alt').innerHTML='<p class="notice">Choose how to send:<br><a class="btn btn-wa" href="'+wa+'" target="_blank" rel="noopener">Send on WhatsApp</a> <a class="btn btn-ghost" href="'+mail+'">Send via Email</a></p>';
    window.open(wa,'_blank');
  });}
  var y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear();}
})();
