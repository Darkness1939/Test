let but = document.querySelector("but");
if(but){
    but.addEventListener("click", ()=>{
    if(but.classList.contains("pushed"))
    {
    but.classList.remove("pushed");
    }
    else
    {
    but.classList.add("pushed")
    }
    });
} 