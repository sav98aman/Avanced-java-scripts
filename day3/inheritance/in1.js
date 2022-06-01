// const cat={
//     name:"cat",
//     leg:4,
//     tail:true,
//     type:"animal"
// }
// console.log(cat)

// // create proto type objects in unheraitance
// const tiger=Object.create(cat)
// console.log(tiger);
// console.log(tiger.name)//..cat
// tiger.name="tiger"
// // tiger.leg=cat.leg
// console.log(tiger)// name is tiger in objects and other properties in prototype
// console.log(tiger.name)

// 2

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// const student={
//     batch:"web-18",
//     institute:"masai school",
//     unit:2,
//     course:"FSW"
// }
// const s1=Object.create(student)
// console.log(s1)//inheritance propertites 

// s1.name="AMAN"
// console.log(s1)

// // 2nd method  *-*-*-*-*-
// const s2= Object.create(student, {name:{value:"SONU"}});
// console.log(s2)

// 3 create a products type Nike
// common things  >>>  barnd,logo,seller---form_flipkart

// const products={
//     brand:"Nike",
//     logo:"@@@@",
//     seller:"flipkart",
// }
// console.log(products)
// const p1=Object.create(products)

// console.log(p1)
// p1.brand="addidas"
// p1.logo="$$$"
// p1.seller="Amazon"
// console.log(p1)

// const p2=Object.create(products)
// console.log(p2)
// p2.brand="Reboke"
// p2.logo="###"
// p2.seller="mytra"
// console.log(p2)


// 4*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// constructor function 
// create a construct function to create the blue print 

// function Product(type){
//     this.type=type;
//     this.brand="Nike";
//     (this.seller="AMAZon"),(this.logo="url")
// }
// // add discount all products
// Product.prototype.discount=function(){
//     console.log("50% discounts")
    
// }

// Product.prototype.changetype=function(type){
//     this.type=type;
// }

// let p1 =new Product("shoe");
// p1.changetype("t-shirts")
// console.log(p1)
// // create new products by contsructer 
// let p2= new Product("shaneker");
// p2.changetype("hoodies")  // shaneker change to hoodies by using prototype function

// p1.discount()
// console.log(p2)

// // *-*-*-*-*-*-*- call , apply  is Temporary
// // *-*-*-*-*-*-*- prototype        permanet

 let arr=[1,2,3,4,5] // creating own array
 console.log(arr)

let arr1= new Array(1,3,4,4,5,5) // creating by java scripts array
console.log(arr1);



function myarr(ar){
    //arrguments

    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    });


    this.length=arguments.length

    for(let i=0;i<arguments.length;i++){
        this[i]=arguments[i];
    }
}
let arr3=new myarr(1,2,3,4,54,5,65,67,5);
console.log(Object.values(arr3))


myarr.prototype.pushss=function(value){

    this[this.length]=value;
    this.length++;
}
arr3.pushss(466)
console.log(Object.values(arr3))

arr3.pushss(477)
console.log(Object.values(arr3))

arr3.pushss(887)
console.log(Object.values(arr3))

//pop
myarr.prototype.poppop=function(value){

    delete this[this.length-1];
    this.length--;
}
arr3.poppop()
console.log(Object.values(arr3))

myarr.prototype.poppop=function(value){

    delete this[this.length-1];
    this.length--;
}
arr3.poppop()
console.log(Object.values(arr3))

arr3.poppop()
console.log(Object.values(arr3))

arr3.poppop()
arr3.poppop()
arr3.poppop()
arr3.poppop()
console.log(Object.values(arr3))



