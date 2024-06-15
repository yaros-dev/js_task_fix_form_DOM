document.querySelectorAll("form input").forEach(function(e){var t,r=document.createElement("label");r.classList.add("field-label"),r.setAttribute("for",e.id);var a=(t=e.name.replace(/([a-z])([A-Z])/g,"$1 $2")).charAt(0).toUpperCase()+t.slice(1);r.textContent=a,e.placeholder=a,e.parentNode.insertBefore(r,e)});
//# sourceMappingURL=index.708a27cb.js.map
