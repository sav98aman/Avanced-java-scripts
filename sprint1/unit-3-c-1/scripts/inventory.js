

document.getElementById('add_more_product').addEventListener("click",addmoreprodfun)

function addmoreprodfun(){
    window.location.href='index.html'
}


let products=JSON.parse(localStorage.getItem("products"))
console.log(products)
display();

function display(){

    products.forEach(function(ele,index){

        let main_box=document.getElementById("all_products");

        var div1=document.createElement("div")
        var t1=document.createElement('p')
        var t2=document.createElement('p')
        var img=document.createElement('img')
        var t3=document.createElement('p')
        t1.innerText=ele.type;
        t2.innerText=ele.desc;
        t3.innerText=ele.price;
        img.setAttribute('src',ele.image)
        img.style.width="150px"
        img.style.height="150px"
        var remove1=document.createElement('button')
        remove1.innerText='Remove product'
        remove1.setAttribute("id","remove_product");
        remove1.style.cursor='pointer'
        remove1.addEventListener("click",function(){
            deffunc(ele,index)
        })
        div1.append(img,t1,t2,t3,remove1)
        main_box.append(div1)
        
    })
}
function  deffunc(ele,index){
    products.splice(index,1);
    localStorage.setItem('products',JSON.stringify(products))
    window.location.reload();
}
