(()=>{
 const wechatNumber='18535963396';
 async function copyWechat(){
  try{await navigator.clipboard.writeText(wechatNumber);toast('微信号已复制：'+wechatNumber);}
  catch{openDialog('复制卫律师微信号','<div class="wechat-copy-fallback"><p>请长按或选中下方号码复制：</p><code tabindex="0">18535963396</code><p>电话、微信同号。</p></div>');}
 }
 document.querySelectorAll('[data-copy-wechat]').forEach(button=>button.addEventListener('click',copyWechat));
 document.querySelector('[data-wechat-qr]').addEventListener('click',()=>{
  openDialog('微信联系卫律师','<div class="wechat-dialog"><p>使用微信扫一扫，或保存二维码后在微信中识别。</p><img src="./assets/wei-hongliang-wechat.png" alt="卫律师微信联系二维码" width="914" height="914"><strong>卫宏亮律师</strong><span>电话 / 微信：18535963396</span><div class="dialog-actions"><button class="button primary" type="button" id="dialog-copy-wechat">复制微信号 <span>⧉</span></button><a class="button secondary" href="./assets/wei-hongliang-wechat.png" download="卫律师微信二维码.png">保存二维码 <span>↓</span></a></div></div>');
  document.querySelector('#dialog-copy-wechat').addEventListener('click',copyWechat);
 });
})();
