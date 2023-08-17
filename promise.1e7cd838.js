new Promise(((e,o)=>{const t=Math.round(3*Math.random())+1;setTimeout((()=>{t<=2?e(t):o(t)}),1e3*t)})).then((e=>console.log(`✅ Resolved after ${e} sec`))).catch((e=>console.log(`❌ Rejected after ${e} sec`)));
//# sourceMappingURL=promise.1e7cd838.js.map
