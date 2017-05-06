var counter;
var a,b;
var count = 0;
var res = true;

function cWidth()
{
 a = window.innerWidth;
 if( a !== b ||  res == true) 
 {
	 console.log(a);
	 count+=1;
	 res = false;
	 console.log(count);
	if(count > 20)
	{ 
	 var choice = confirm('Do you want to stop the loop?');
       if (choice == true)
	   {
		   console.log('The interval has  stopped');
		   clearInterval(counter);
		   count = 0;
	   }   
		else
		{
			console.log('The interval continues');
			count = 0;
		}			
	}	
 }	
 b = a;	
	
}

counter = setInterval( cWidth,500);

/*(function(){

var lar = 1920;
var med = 1216;
var sma = 768;
var xsm = 320;

var time;
function sizeUp(){
	var win = window.innerWidth;
	switch(win)
{
	case lar:
	alert('The window has detected that your width is:'+ lar);	
	clearInterval(time);
	break;
	case med:
	alert('The window has detected that your width is:'+ med);
	clearInterval(time);	
	break;
	case sma:
	alert('The window has detected that your width is:'+ sma);	
	clearInterval(time);
	break;
	case xsm:
	alert('The window has detected that your width is:'+ xsm);	
	clearInterval(time);
	break;
	
}

}
time = setInterval(sizeUp,10);

document.getElementById('stop').onclick = function()
{
	clearInterval(time);
	console.log('The sizeUp function has stopped');
}
	
	
})();*/