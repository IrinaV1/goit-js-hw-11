import{a as u,S as p,i as n}from"./assets/vendor-Do60_h77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="55630526-f44120b4f4ecc6b1cd7cfb12b",d="https://pixabay.com/api/";function g(s){return u.get(d,{params:{key:f,q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{console.log("Error fetching images:")})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper"),m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const t=s.map(r=>`
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
    `).join("");l.insertAdjacentHTML("beforeend",t),m.refresh()}function y(){l.innerHTML=""}function b(){c.classList.add("is-visible")}function w(){c.classList.remove("is-visible")}const L=document.querySelector(".form");L.addEventListener("submit",v);function v(s){s.preventDefault(),y();const t=s.target.elements["search-text"].value.trim();t&&(b(),g(t).then(r=>{if(r.length===0){n.show({titleColor:"white",position:"topRight",title:"Error",backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r)}).catch(()=>{n.show({titleColor:"white",position:"topRight",title:"Error",backgroundColor:"red",messageColor:"white",message:"Something went wrong. Please try again later."})}).finally(()=>{w(),s.target.reset()}))}
//# sourceMappingURL=index.js.map
