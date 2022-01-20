// window.onload=function(){
// 	zsobj=document.getElementById('zs');

// 	window.onscroll=function(){
// 		st=document.documentElement.scrollTop;
		
// 		if(st>=100){
// 			zsobj.style.display='inline';

// 		}else{
// 			zsobj.style.display='none';
// 		}
// 	}
// 	zsobj.onclick=function(){
// 		cf=confirm('确认回到顶部？');
// 	    return cf;
// 		document.documentElement.scrollTop=0;



// }

// }
window.onload=function(){
	cc=document.getElementById('cc');
	dd=document.getElementById('dd');
	cc.onclick=function(){
		document.getElementById('sy').style.display='block';
	}
	dd.onclick=function(){
		document.getElementById('sy').style.display='none';
		document.getElementById('sy1').style.display='block';

	}
}

