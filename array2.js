function balikKata (string) {
 var hasilKata = '';
 for (var i=string.length-1; i>=0; i--){
   hasilKata += string[i];
 }
 return hasilKata; 
}
console.log(balikKata('hello world'));
//input "hello world!"
//output
"!dlrow olleh";
