//your JS code here. If required.
let DivElement=document.getElementById("output");
let prom=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000);
});
prom.then((data)=>{
	DivElement.innerText=data;
})