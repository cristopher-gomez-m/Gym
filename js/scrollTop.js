const ScrollToOptions=()=>{
    
    const scrollBtn = document.querySelector(".scroll-top-btn")
    window.addEventListener("scroll",()=>{
        let scrollDistanceTop = window.scrollY
        if(scrollDistanceTop>280){
            scrollBtn.classList.remove("hidden")
        }else{
            scrollBtn.classList.add("hidden")
        }
    });
    
    document.addEventListener("click",(e)=>{
        if(e.target.matches(".scroll-top-btn")){
            window.scrollTo({
                behavior: "smooth",
                top:0, 
            });
        }
    });
}


ScrollToOptions();