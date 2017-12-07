function calc_number(){
var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for(i=0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        document.write("<b>");
    }else{
        document.write("");
    }

}
}
console.log(calc_number());
