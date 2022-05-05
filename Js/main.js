var num =45;
var name="AP203";
var check=true;
console.log(typeof num)
console.log(typeof name)
console.log(typeof check)
let nums=[10,15,21,"AP203"]
console.log(typeof nums)
console.log("Nums:")
for(let i=0;i<nums.length;i++){
    console.log(nums[i])
}


// console.log("Items;")
// for(let items of nums){
//     console.log(items)
// }


// if(checkAge){
//        alert(`${name1} ${surname1}, siz giris ede bilersiniz`)
//      }
//      else{
//          alert(`${name1} ${surname1}, siz giris ede bilmezsiniz`)
//      }
    
    
//    let checkAge;
//      let name1;
//      let surname1;
//      do{
//          name1 = prompt("Ad:");
//          surname1 = prompt("Surname:")
//          checkAge = confirm(name1+" "+surname1 +", yasiniz 18+ dirmi?")
//      }
//     while(!checkAge)
    


    
//  alert(`${name1} ${surname1}, siz giris ede bilersiniz`)

//  let guestType;

//  if(confirm("Muellimsinizmi?")){
//     guestType = "teacher"
//  }
// else if(confirm("Iscisinizmi?")){
//     guestType = "worker"
//  }
//  else if(confirm("Telebesinizmi?")){
//      guestType = "student"
//  }

//  switch(guestType){
//      case "student":
//         alert("Giris ede bilmezsiniz!")
//         break;
//      case "teacher":
//          alert("1 saatliq daxil oal bilersiniz!")
//         break;
//      case "worker":
//         alert("Buyurun kecin!")
//          break;
//     default:
//          alert("Ne azarin var burda?")
//         break;
//  }
 function MakeFullname(name, surname){
    return `${name} ${surname}`
}
function sum(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(!isNaN(numbers[i])){
            sum+=Number(numbers[i])
        }
    }
    return sum;
}
function SumOfEven(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0)
            sum+=numbers[i];
    }
    return sum;
}
function SumOfOdd(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==1)
            sum+=numbers[i];
    }
    return sum;
}
function SumOfBy3(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%3==0)
            sum+=numbers[i];
    }
    return sum;
}
function isOdd(number){
    return number%2==1;
}
function isEven(number){
    return number%2==0;
}
class User{
    constructor(name,surname,age){
        this.Name = name;
        this.Surname = surname;
        this.Age = age;
        this.showInfo = function(){
            console.log(`FullName: ${this.Name} ${this.Surname} - Age: ${this.Age}`)
        }
    }
}

let std1 = new User('Shukran','Sirinov',21);
let std2 = new User('Kenan ','Eliyev',19);
let std3 = new User('Mesmexanim ','Haciyeva',40);

