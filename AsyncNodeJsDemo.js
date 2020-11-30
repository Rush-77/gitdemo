var fs=require("fs");

fs.readFile("Os_Info.txt",function(err,data){ console.log(data.toString()); })
fs.readFile("demofile.txt",function(err,data1){ console.log(data1.toString()); })

console.log("====================");
var fact=1;
var n=5;
for(var i=1;i<=n;i++){
	fact = fact*i;
}
console.log("Factorial :"+fact);