(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,":root,\n:root::before,\n:root::after {\n\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #9CA49B;\n}\n\nheader {\n    display: flex;\n    place-content: center;\n}\n\nnav {\n    display: flex;\n    width: clamp(300px, 75%, 100%);\n    justify-content: space-between;\n    gap: 20px;\n}\n\nheader .navButton {\n    padding: 10px 20px;\n    margin-top: 1em;\n    border: none;\n    background-color: #33170D;\n    color: #fff;\n    border-radius: 8px 8px 0px 0px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: background-color 0.2s;\n    flex: 0 1 150px;\n}\n\nheader .navButton:hover {\n    background-color: #714434;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 1em;\n}\n\n#content img:first-child {\n    width: clamp(300px, 100%, 100%);\n    place-self: center;\n    margin-bottom: 1em;\n    transition: width 0.2s;\n}\n\n#content > * {\n    margin-bottom: 1em;\n    padding: 0 12.5%;\n}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;const r=n.p+"5ca151dc7195fa171b29.webp";let o=0;function a(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("img");t.src=r;const n=document.createElement("h1");n.textContent="Escape to Tranquility: A Hidden Beachside Dining Haven";const a=document.createElement("p");a.textContent="Nestled on a pristine, secluded beach, our boutique restaurant offers an intimate dining experience like no other. Surrounded by lush tropical greenery and the soothing sound of waves gently lapping at the shore, you’ll find the perfect escape from the ordinary. Savor gourmet dishes crafted from fresh, local ingredients, all while enjoying breathtaking views of the turquoise sea. Whether you're seeking a peaceful lunch under the palms or a romantic sunset dinner, our hidden gem promises an unforgettable experience in paradise.",e.appendChild(t),e.appendChild(n),e.appendChild(a),console.log(`Home page loaded ${++o} time(s)`)}let i=0,c=0;var s=n(72),d=n.n(s),l=n(825),u=n.n(l),p=n(659),h=n.n(p),f=n(56),m=n.n(f),g=n(540),y=n.n(g),v=n(113),b=n.n(v),w=n(365),x={};x.styleTagTransform=b(),x.setAttributes=m(),x.insert=h().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=y(),d()(w.A,x),w.A&&w.A.locals&&w.A.locals;const C=document.getElementById("homeButton"),E=document.getElementById("aboutButton"),k=document.getElementById("menuButton");a(),C.addEventListener("click",(()=>a())),E.addEventListener("click",(()=>function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("h1");t.textContent="Where Nature Meets Culinary Excellence";const n=document.createElement("p");n.textContent="At Azure Drift, we believe that the best dining experiences are those that nourish both the body and soul. Tucked away on a secluded stretch of beach, we created this intimate haven to offer a peaceful retreat where guests can indulge in the freshest flavors of the region, while surrounded by the beauty of nature. Our passion for exceptional cuisine, combined with our love for the ocean and tropical landscapes, led us to craft a space where every meal becomes a memorable experience.";const r=document.createElement("p");r.textContent="Our menu is thoughtfully curated to showcase the finest local ingredients, blending traditional and modern culinary techniques. Whether you’re savoring a carefully prepared seafood dish or enjoying a refreshing tropical cocktail, each bite reflects our commitment to quality, sustainability, and the unique spirit of this beautiful locale. Join us at Azure Drift, and let us take you on a journey of flavors, relaxation, and unforgettable moments by the sea.",e.appendChild(t),e.appendChild(n),e.appendChild(r),console.log(`Aboud page loaded ${++i} time(s)`)}())),k.addEventListener("click",(()=>function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("h1");t.textContent="Azure Drift Menu: A Journey of Coastal Flavors";const n=document.createElement("p");n.textContent="Our menu celebrates the vibrant, fresh flavors of the sea and the land. Each dish is inspired by our coastal surroundings, thoughtfully crafted using locally sourced ingredients, and presented with care to enhance your dining experience. Dive into our selection of seafood delicacies, tropical-inspired dishes, and handcrafted desserts, all while soaking in the tranquil beachside atmosphere.";const r=document.createElement("ul");[{name:"Grilled Lobster with Coconut-Lime Butter",description:"Perfectly charred lobster served with a tropical twist of coconut-lime butter, complemented by fresh, local greens."},{name:"Seared Sea Bass with Mango Salsa",description:"A light, flavorful dish featuring tender sea bass topped with a refreshing mango salsa, served with jasmine rice."},{name:"Tropical Ceviche",description:"Freshly caught fish marinated in citrus juices, mixed with avocado, cilantro, and a burst of tropical fruits."},{name:"Crispy Coconut Shrimp",description:"Succulent shrimp coated in a crispy coconut crust, paired with a sweet and tangy pineapple dipping sauce."},{name:"Island-Style Grilled Chicken",description:"Grilled chicken marinated in a blend of island spices, served with roasted plantains and coconut rice."},{name:"Pineapple and Chili-Glazed Ribs",description:"Slow-cooked ribs with a sticky pineapple-chili glaze, served with crispy yucca fries."},{name:"Tropical Fruit Sorbet",description:"A refreshing end to your meal, with flavors like passionfruit, guava, and pineapple, crafted from the freshest island fruits."},{name:"Key Lime Cheesecake",description:"Creamy cheesecake infused with zesty key lime, on a buttery graham cracker crust, topped with whipped cream."},{name:"Coconut Watermelon Cooler",description:"A refreshing, chilled drink made with coconut water, watermelon, and a splash of lime, perfect for cooling off by the beach."},{name:"Sunset Margarita",description:"A tropical blend of fresh mango, lime, and premium tequila, served with a chili-salted rim to add a touch of heat."}].forEach((e=>{const t=document.createElement("li"),n=document.createElement("h3");n.textContent=e.name;const o=document.createElement("p");o.textContent=e.description,t.appendChild(n),t.appendChild(o),r.appendChild(t)})),e.appendChild(t),e.appendChild(n),e.appendChild(r),console.log(`Menu page loaded ${++c} time(s)`)}()))})();