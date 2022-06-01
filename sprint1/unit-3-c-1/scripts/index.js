//store the products array in localstorage as "products"

let products= JSON.parse(localStorage.getItem("products"))||[];




document.querySelector("#add_product").addEventListener("click",addproductsfun)

function product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;

}
function addproductsfun(){

    event.preventDefault();
    let type=document.getElementById("type").value;
    let desc=document.getElementById('desc').value;
    let price=document.getElementById('price').value
    let image=document.getElementById('image').value

    p1=new product(type,desc,price,image)

    products.push(p1)
    localStorage.setItem("products",JSON.stringify(products))

    document.getElementById("type").value=null;
    document.getElementById('desc').value=null;
    document.getElementById('price').value=null;
    document.getElementById('image').value=null;
}

document.getElementById("show_products").addEventListener("click",showprodfun)

function showprodfun(){
    window.location.href="inventory.html"
}

