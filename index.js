import{a as c,S as l}from"./assets/vendor-BeoYb5-b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const u="55630526-f44120b4f4ecc6b1cd7cfb12b",f="https://pixabay.com/api/";function g(o){return c.get(f,{params:{key:u,q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits).catch(e=>{throw console.error("Error fetching images:",e),e})}const i=document.querySelector(".gallery");function m(o){return o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>

        <div class="info">
          <p>Likes ${e.likes}</p>
          <p>Views ${e.views}</p>
          <p>Comments ${e.comments}</p>
          <p>Downloads ${e.downloads}</p>
        </div>
      </li>
    `).join("")}function d(){i.innerHTML=""}const p=new l(".gallery a",{captionsData:"alt",captionDelay:250}),y=document.querySelector(".form");y.addEventListener("submit",h);function h(o){o.preventDefault(),d();const e=o.target.elements["search-text"].value.trim();e&&(console.log(e),g(e).then(n=>{if(console.log(e),n.length===0){alert("Sorry, there are no images matching your search query. Please try again!");return}i.insertAdjacentHTML("beforeend",m(n)),p.refresh()}).catch(()=>{alert("Something went wrong. Please try again later.")}),o.target.reset())}
//# sourceMappingURL=index.js.map
