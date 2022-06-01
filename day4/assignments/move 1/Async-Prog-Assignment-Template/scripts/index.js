// index js
    let user_login=JSON.parse(localStorage.getItem("current_user"))||[]
    user_login.forEach(element => {
        console.log(element.name)
        if(user_login!=null){
            console.log('home page with user')
            let cart=document.querySelector("#login");
            cart.setAttribute('id','cart')
            cart.style.cursor='pointer'
    
            let my_account=document.querySelector("#signup");
            my_account.setAttribute('id','myaccount')
            my_account.style.cursor="pointer";
            
            document.querySelector("#cart").innerHTML='cart';
            document.querySelector("#myaccount").innerHTML=element.name;

            // var order=document.createElement("div")
            // var otxt=document.createElement('a')
            // otxt.setAttribute('href',"#order")
            // otxt.innerText="order"
            // order.append(otxt)
            // // console.log(order)
            // document.querySelector("#navbar>div:last-child").append(order)
        }
    });
    let movies_data=JSON.parse(localStorage.getItem("movies"))||[];
    function Movies_collection(n,reldate,p,r){
        this.name=n;
        this.release_data=reldate;
        this.poster=p;
        this.rating=r;
    }
    let m0=new Movies_collection('Docter Stranger in the Multiverse of madness',)



    