//loginjs


let userdata=JSON.parse(localStorage.getItem("signupdata")) ||[];
console.log(userdata)
document.querySelector("#form").addEventListener("submit",login);



function login(){
    event.preventDefault()

    // let userdata=JSON.parse(localStorage.getItem("signupdata")) ||[];
    var current_user=[];
    let tp;;
    let te;
    let logincheckcount=0;
    userdata.forEach(element => {
        te=(element.email===document.querySelector("#email").value);
        // var ep=document.querySelector("#password").value
        var pas=element.password;
        tp=(document.querySelector("#password").value===pas);
        console.log(te,tp)
        if(tp==true && te==true){
            logincheckcount++;
            console.log(logincheckcount)
            current_user.push(element);
            localStorage.setItem("current_user",JSON.stringify(current_user))
        }

    });

    if(logincheckcount==1){
        console.log("yes you can login");
        window.location.href='index.html';
    }else{
        alert("invalid Credentials")
    }

}
