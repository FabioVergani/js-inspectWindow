//noprotect
console.clear();
(function(win){'use strict';
 var p,j, i, e, w=win, O=w.Object, r=O.create(null),  k=O.getOwnPropertyNames(w), l=k.length+0;
 for(i=0; i<l; ++i){
	p=k[i];
	if(p!=='window'){
		e=w[p];
		j=typeof(e);
		((j in r)?r[j]:(r[j]=O.create(null)))[p]=e;
	};
 }/*;*/
 console.dir(r);
})(window);
