let name1=document.querySelector('#name');
let description=document.querySelector('#description');
let save=document.querySelector('#save');
// let maintitle=document.querySelector('.maintitle');
let addtodo=main.addEventListener('.add-btn');
let popup=document.addEventListener('#popup');
save.addEventListener("click", () => {
    popup.classList.remove("d-none");
    console.log('click');
});
addtodo.addEventListener('click',()=>{
    popup.classList.remove("d-none");
})
// cancel.addEventListener("click", () => {
//     popup.classList.add("d-none");
//     console.log('click');
// });

save.addEventListener("click", () => {
    let info = {
        name1: name1.value,
        description: description.value,
    }
    let userlist=localStorage.getItem("users");
    userlist=userlist===null?[]:JSON.parse(userlist);
    let isuserexist=userlist.find(value)=>{
        return value.name===info.name1;
    }
 
});
