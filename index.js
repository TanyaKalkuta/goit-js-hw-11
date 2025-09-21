import{a as h,S as y,i as n}from"./assets/vendor-CYMld6vM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="52375997-ed6a7f09fc050a8946ebeea10",L="https://pixabay.com/api/",b=a=>h.get(L,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",per_page:12}}).then(t=>(console.log(t.data.hits),t.data.hits)).catch(t=>{throw t}),l=document.querySelector("#gallery"),c=document.querySelector("#loader"),S=new y("#gallery a",{captionsData:"alt",captionDelay:250});function $(a){if(!l)return;const t=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:o,comments:p,downloads:m})=>`<li class="gallery-item">
  <a class="gallery-link" href='${i}'>
    <img
      class="gallery-image"
      src="${r}"
      alt="${e}"
    />
     <ul class="stats">
                <li class="stats-item">
                    <p class="stats-title">Likes</p>
                    <p class="stat-content">'${s}'</p>
                </li>
                <li class="stats-item">
                    <p class="stats-title">Views</p>
                    <p class="stat-content">'${o}'</p>
                </li>
                <li class="stats-item">
                    <p class="stats-title">Comments</p>
                    <p class="stat-content">'${p}'</p>
                </li>
                <li class="stats-title">
                    <p class="stats-text">Downloads</p>
                    <p class="stat-content">'${m}'</p>
                </li>
            </ul>

  </a>
</li>`).join("");l.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){l&&(l.innerHTML="")}function v(){c&&c.classList.add("is-active")}function f(){c&&c.classList.remove("is-active")}const d=document.querySelector("#search-form"),w=document.querySelector('input[name="search-text"]'),u=document.querySelector("#search-btn");d||console.error("Search form not found in DOM (expected #search-form).");d.addEventListener("submit",a=>{a.preventDefault();const t=w.value.trim();if(!t){n.warning({title:"Увага",message:"Введіть пошукове слово."});return}q(),v(),u.disabled=!0,b(t).then(r=>{if(f(),u.disabled=!1,!r||r.length===0){n.info({title:"Результат",message:`За запитом "${t}" нічого не знайдено.`});return}$(r),n.success({title:"Готово",message:`Знайдено ${r.length} зображень.`})}).catch(r=>{f(),u.disabled=!1,console.error("Fetch error:",r),n.error({title:"Помилка",message:"Проблема при завантаженні зображень. Спробуйте пізніше."})})});
//# sourceMappingURL=index.js.map
