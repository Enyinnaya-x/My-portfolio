const hambar = document.querySelector(".hambar");
const hamlist = document.querySelector(".hamlist");
const close =  document.getElementById("close");

hambar.addEventListener("click", () =>{
    hambar.classList.toggle("active");
    hamlist.classList.toggle("active");
})
close.onclick = function(){
    hambar.classList.remove("active");
    hamlist.classList.remove("active");
}
