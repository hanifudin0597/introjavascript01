const printSegitiga = 5
let tipedata = typeof printSegitiga;

let hasil="";

if(tipedata=="number"){
    for(i=printSegitiga; i>0; i--){
        for(k=1; k<=i; k++){
            hasil += k;
        }
        hasil += "\n";
    }
console.log(hasil);
}
else{
    console.log("Data harus number") 
}
