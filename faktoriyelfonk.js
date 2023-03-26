function FirstFactorial(num) { 
//1-18 arası kullanıcıdan alınan sayıların faktoriyelini hesaplayan fonsiyon
if (num <1 || num >18){ //sayı 1-18 arasında olup olmadığını kontrol ediyoruz
  var num=prompt()
  return "Lütfen 1 ile 18 arası sayı giriniz.";
}
var factorial=1;
for (var i=num;i>0;i--){//sayının döngü tamamlanana kadar eksilmesini sağlıyoruz
  factorial*=i;
}

  return factorial; 

}
   
// keep this function call here 
console.log(FirstFactorial(readline()));