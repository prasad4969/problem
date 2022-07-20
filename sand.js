const userCardTemplate=document.querySelector("[data-user-template]")
const moviecontainer=document.querySelector("[data-movie]")
const searchbar=document.querySelector("[search-data]");
const API_KEY='api_key=abd7a021dc8d0b6b0e6be07a7769b41e';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL=BASE_URL +'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL ='https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
let movies=[];

        searchbar.addEventListener("input",(e)=>{
                const value=e.target.value.toLowerCase();
                //console.log(value);
                movies.forEach(user=>{
                        const isVisible=user.title.toLowerCase().includes(value);
                        user.element.classList.toggle("hide",!isVisible)
                        console.log( user.element.classList);
                });
        })
                
        fetch(API_URL)
            .then((response) => response.json())
          .then(data=>{
                        movies=  data.results.map(user => {
                        const card=userCardTemplate.content.cloneNode(true).children[0]
                         //console.log(card);
                        const title=card.querySelector("[data-title]")
                        //console.log(user.original_title);
                        const image=card.querySelector("[data-image]")
                        title.textContent=user.original_title;
                        image.src=`${IMG_URL+user.poster_path}`;
                        moviecontainer.append(card);
                        return{title:user.original_title, element:card}

                      
                        
                }); 
                });
              
        
                
                
       

            
          
                    
        
    
   








            
          

