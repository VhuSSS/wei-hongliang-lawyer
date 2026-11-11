(()=>{
 const tabs=[...document.querySelectorAll('[data-dossier]')];
 function selectDossier(index,focus=false){tabs.forEach((tab,i)=>{const selected=i===index;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;document.getElementById(tab.getAttribute('aria-controls')).hidden=!selected;});if(focus)tabs[index].focus();}
 tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectDossier(index));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();selectDossier(next,true);});});
 const topics=[...document.querySelectorAll('.practice-item')];
 topics.forEach(item=>item.addEventListener('toggle',()=>{if(!item.open)return;topics.forEach(other=>{if(other!==item)other.open=false;});document.querySelector('#practice-scene-title').textContent=item.dataset.scene;document.querySelector('#practice-scene-index').textContent=`${item.dataset.sceneIndex} / CIVIL & COMMERCIAL`;}));
 const articleGrid=document.querySelector('.article-grid');
 document.querySelectorAll('[data-insight]').forEach(button=>button.addEventListener('click',()=>articleGrid.classList.toggle('is-filtered',button.dataset.insight!=='all')));
})();
