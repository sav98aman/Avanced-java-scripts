** oops topic **

**3 way of creating objects**

* 1st way  -- object literal
* 2nd way --- Object.create()
* 3 constrcuter function 
* 4 classes improved version of constructer function 

**creating a login/signup system**
    
    user
    Admin
    Author

    functionalites
    1. user can signup {Checkusername,Checkpassword}
    2. user can Login`

`class User{
        #password;//priveted
        constructor(name){
            this.name=name;
        }

        #validatedUserName(username){
            //checking  validating uUserName through if else
            //by defaults , we simulating all username arr corrects
            return true;
        }

        #validatedUserPassword(password){
            //checking  validating uUserName through if else
            //by defaults , we simulating all username arr corrects
            return true;
        }

        // 1 sigup part 

        signUp(UserNmae,password){
            let isValidated=false;//in begining

            // when use input valid username and password

            isValidated=this.#validatedUserName(UserNmae) && this.#validatedUserPassword(password)

            if(isValidated){
                this.UserNmae==UserNmae;///creating UeserName=
                this.#password=password;// for privited used #
                console.log("signup succesfully")
            }else{
                console.log("Singup failure")
            }
        }

        // 2 login part 

        login(username,password){
            if(username===this.UserNmae && password===this.#password){
                console.log("succesfull login")
            }else{
                console.log("Authenticato]ion failed")
            }
        }
    }

    let u1=new User("aman")
    console.log(u1)
    u1.signUp()
// u1.#validatedUserName()//privite function if use # u can access only acces in class 

// 2 PART ENCAPUSULATION ->> HIDING THE internal data 
u1.password`
