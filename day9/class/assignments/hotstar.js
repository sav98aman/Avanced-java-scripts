

async function find_movies(movies_name){
    console.log(movies_name)
    try{
        let data=await fetch(url)
        let res=data.json()
        return res;

    }catch(error){
        console.log(error)
    }
}
//collecting by user input or search data accept
async function moviesearch(){
    let movies_name=document.getElementById("seacrh-box").value;
    let response=find_movies(movies_name) //return promise 
    let data=await response;
    appendsearch(data)
}
// appned searchsection on 
function appendsearch(data){


    let main_s__b=document.createElement("div")
    let s_t_b=document.createElement("div")
    let s_title=document.createElement('p')
    s_title.innerText=data.Title;
    s_t_b.append(s_t_b)
    let img_div=document.createElement("div")
    let se_img=document.createElement("img")
    se_img.src=data.Poster;
    img_div.append(se_img);
    main_s__b.append(img_div,s_t_b)

}





// function moviesearch(){
//     let moviessearch=document.getElementById("seacrh-box").value;
//     getdata(moviessearch)
//     console.log(moviessearch);
    
// }
// async function getdata(moviessearch){
//     let url;
//     if(moviessearch!==null){
//         url=`https://www.omdbapi.com/?t=${moviessearch}&apikey=60ac6740`;
//     }
//     else{
//         url="http://www.omdbapi.com/?i=tt3896198&apikey=60ac6740"
//         console.log("url",url)
//     }
//     // const url=`https://www.omdbapi.com/?t=${moviessearch}&apikey=60ac6740`;
//     // const url="http://www.omdbapi.com/?i=tt3896198&apikey=60ac6740"
//     let res=await fetch(url)
//     let movies=await res.json()
//     console.log(movies);
//     let Title=movies.Title;
//     if(Title){
//         displaymovies(movies)
//     }else{
//         moviesnotpersents("MOVIES Not Founds",moviessearch)
//     }
    
// }
// // resopnse false 

// function moviesnotpersents(notfound,ele){
//     let x;
//     let y;
//     if(ele==""){
//         x="Please Enter Movie Name";
//         y=""
//     }else{
//         x=ele;
//         y=notfound
//     }
    
//     document.querySelector("#notfound").innerHTML=null;
//     let alert_box=document.createElement("div")
//     let alert_box_txt=document.createElement('h4')
//     let span1=document.createElement("span")
//     span1.innerText=x+":";
//     let span2=document.createElement("span")
//     span2.innerText=" "+y;
//     alert_box_txt.append(span1,span2)
//     alert_box.append(alert_box_txt)
//     console.log(alert_box)
//     document.querySelector("#notfound").append(alert_box)
// }

// // response is persents true 

// function displaymovies(ele){
//     document.querySelector("#notfound").innerHTML=null;
//     document.querySelector("#display1").innerHTML=null;
//     document.querySelector('#display2').innerHTML=null;
//     let img_box=document.createElement("div")
//     let img=document.createElement("img")
//     img.src=ele.Poster;
//     img_box.append(img)

//     let title_box=document.createElement("div")
//     let titletxt=document.createElement('h4')
//     titletxt.innerText="Title"+ele.Title;
//     title_box.append(img_box)

//     let acctors_box=document.createElement("div")
//     let actore_txt=document.createElement("h4")
//     actore_txt.innerText="Actors : "+ele.Actors;
//     acctors_box.append(actore_txt)

    
//     let Genre_box=document.createElement("div")
//     let Genre_txt=document.createElement('h4')
//     Genre_txt.innerText=ele.Genre;
//     Genre_box.append(Genre_txt)

//     let Language_box=document.createElement("div")
//     let Language_txt=document.createElement('h4')
//     Language_txt.innerText="Language : "+ele.Language;
//     Language_box.append(Language_txt)
    
//     let run_box=document.createElement("div")
//     let run_txt=document.createElement("h4")
//     run_txt.innerText="Runtime : "+ele.Runtime;
//     run_box.append(run_txt)

//     let relas_box=document.createElement("div")
//     let relas_txt=document.createElement("h4")
//     relas_txt.innerText="Released : "+ele.Released;
//     relas_box.append(relas_txt)

//     let Director_box=document.createElement("div")
//     let Director_txt=document.createElement("h4")
//     Director_txt.innerText="Director : "+ele.Director;
//     Director_box.append(Director_txt)

//     let Writer_box=document.createElement("div")
//     let Writer_txt=document.createElement("h4")
//     Writer_txt.innerText="Writer : "+ele.Writer;
//     Writer_box.append(Writer_txt)

//     let Country_box=document.createElement("div")
//     let Country_txt=document.createElement("h4")
//     Country_txt.innerText="Country : "+ele.Country;
//     Country_box.append(Country_txt)

//     let Awards_box=document.createElement("div")
//     let Awards_txt=document.createElement("h4")
//     Awards_txt.innerText="Awards : "+ele.Awards;
//     Awards_box.append(Awards_txt)

//     let imdbRating_box=document.createElement("div")
//     let imdbRating_txt=document.createElement("p")
//     imdbRating_txt.innerText="Rating : "+ele.imdbRating;
//     imdbRating_box.append(imdbRating_txt)
    
//     document.querySelector("#display1").append(img_box)
//     document.querySelector('#display2').append(title_box,Genre_box,acctors_box,Language_box,Country_box,run_box,relas_box,Director_box,Writer_box,Awards_box,imdbRating_box)
// }
