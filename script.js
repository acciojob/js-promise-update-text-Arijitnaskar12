//your JS code here. If required.
let DivElement=document.getElementById("output");
let prom=new Promise((resolve)=>{
	setTimeOut(()=>{
		DivElement.innerText="Hello,world";
	},1000);
});