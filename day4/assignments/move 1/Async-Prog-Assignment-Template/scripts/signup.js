
//siginup data
    let user=JSON.parse(localStorage.getItem("signupdata")) ||[];
    let u1;

    document.querySelector("#form").addEventListener("submit",signup);
    
    function Userdata(n,m,e,p){
        this.name=n;
        this.mobile=m;
        this.email=e;
        this.password=p;
    }
    function signup(){
        event.preventDefault();

        let name=form.name.value;
        let mobile=form.mobile.value;
        let email=form.email.value;
        let password=form.password.value;

        p1=new Userdata(name,mobile,email, password);
        
        user.push(p1)
        localStorage.setItem("signupdata",JSON.stringify(user))
        // console.log(user)
        console.log("signup");
        singupfunction()
    }

    function singupfunction(){
        alert('singup succesfull')
        window.location.href="login.html"
    }