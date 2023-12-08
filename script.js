/*let but = document.querySelector("but");
if(but){
    but.addEventListener("click", (e) => {
    if(but.classList.contains("pushed"))
    {
    but.classList.remove("pushed");
    }
    else
    {
    but.classList.add("pushed");
    }
    });
}*/

function addTusk(event)
{
input=document.querySelector("input");
Tusk=document.getElementById("Tusk");
Tusk.insertAdjacentHTML("Beforeend", 
`<li class = "Project">
 <b>${input.value}</b>
 <button class = "yes"></button>
 <button class = "no"></button>
 </li>`)
 input.value="";
}


