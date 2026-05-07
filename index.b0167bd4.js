var a,r=document.querySelector("ul");function e(a){return Number(a.dataset.salary)}(a=Array.from(r.children)).sort(function(a,r){return e(r)-e(a)}),a.forEach(function(a){r.append(a)}),Array.from(r.children).map(function(a){return{salary:Number(a.dataset.salary),age:Number(a.dataset.age),name:a.dataset.name,position:a.dataset.position}});
//# sourceMappingURL=index.b0167bd4.js.map
