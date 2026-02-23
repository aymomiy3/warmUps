let main=document.querySelector(".notes-block");
let btnn=document.querySelector(".btn");
let inputs=document.querySelectorAll(".input-box")

function updateStorage(){
    localStorage.setItem("inputs",main.innerHTML);
}

function showNotes(){
    main.innerHTML=localStorage.getItem("inputs");
}
showNotes();

btnn.addEventListener("click",()=>{
    let new_box=document.createElement("p");
    let new_img=document.createElement("img");
    new_box.className="input-box";
    new_box.setAttribute("contenteditable","true");
    new_img.src="delete_img.png";
    main.appendChild(new_box).appendChild(new_img);

})
main.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="p"){
        inputs.document.querySelectorAll(".input-box");
        inputs.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
});

document.addEventListener("keydown",event=>{
    if(event.key=="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
