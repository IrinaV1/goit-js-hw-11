import{a as c,S as l,i as u}from"./assets/vendor-Do60_h77.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const p="55630526-f44120b4f4ecc6b1cd7cfb12b",f="https://pixabay.com/api/";function g(s){return c.get(f,{params:{key:p,q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits).catch(e=>{throw console.error("Error fetching images:",e),e})}const i=document.querySelector(".gallery"),m=new l(".gallery a",{captionsData:"alt",captionDelay:250});function d(s){const e=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
        </a>

        <div class="info">
          <p>Likes<span>${r.likes}</span></p>
          <p>Views <span>${r.views}</span></p>
          <p>Comments <span>${r.comments}</span></p>
          <p>Downloads <span>${r.downloads}</span></p>
        </div>
      </li>
    `).join("");i.insertAdjacentHTML("beforeend",e),m.refresh()}function h(){i.innerHTML=""}const y=document.querySelector(".form");y.addEventListener("submit",b);function b(s){s.preventDefault(),h();const e=s.target.elements["search-text"].value.trim();e&&(console.log(e),g(e).then(r=>{if(console.log(e),r.length===0){u.show({titleColor:"white",position:"topRight",title:"Error",backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"});return}d(r)}).catch(()=>{alert("Something went wrong. Please try again later.")}),s.target.reset())}
//# sourceMappingURL=index.js.map
