function startDrag(event){
    event.dataTransfer.setData("text/html", event.target.id);
    event.dataTransfer.effectAllowed="move";
}

function enterDrag(event){
    event.prevendDefault();
    event.dataTransfer.dropEffect="move";
    event.target.attributes;
}
function stopDrag(event){
   
}