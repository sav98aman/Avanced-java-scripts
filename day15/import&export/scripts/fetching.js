   
let getdata=async(url)=>{
    // const url='https://fakestoreapi.com/products/category/electronics'

    let res=await fetch(url)
    let data=await res.json()
    // console.log(data)

    return data
}

let  display=(data,container)=>{

    data.forEach(element => {
        let div1=document.createElement("div")

        let img=document.createElement("img")
        img.src=element.image
        img.style.width="100px"
        let name=document.createElement("p")
        name.innerText=element.title

        let price=document.createElement("p")
        price.innerText=element.price
        
        div1.append(img,name,price)
        container.append(div1)
    });
}

export {getdata,display};