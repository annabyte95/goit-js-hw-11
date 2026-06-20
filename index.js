import{a as f,S as d,i as l}from"./assets/vendor-r3xvX9o-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="55235780-cc5bf4fbb6f37173e9416e03e";function p(s){return f.get("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
          <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b>${t.likes}</p>
            <p class="info-item"><b>Views</b>${t.views}</p>
            <p class="info-item"><b>Comments</b>${t.comments}</p>
            <p class="info-item"><b>Downloads</b>${t.downloads}</p>
          </div>
        </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){c.innerHTML=""}function b(){u.classList.remove("hidden")}function i(){u.classList.add("hidden")}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();o&&(h(),b(),p(o).then(t=>{if(t.hits.length===0){i(),l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits),i(),s.target.reset()}).catch(t=>{i(),l.error({message:"Something went wrong. Please try again later."}),console.log(t)}))});
//# sourceMappingURL=index.js.map
