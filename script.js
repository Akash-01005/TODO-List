const ib=document.getElementById("input-box")
const li=document.getElementById('list')
let t=document.getElementById('task')
let task=document.getElementsByClassName("tasks")
let addtask=()=>{
    if(ib.value ===''){
        alert("Please Write Your Task!");
    }
    else{
        let l=document.createElement('li');
        l.textContent=ib.value;
        li.appendChild(l);
        t.style.display="block";
        let s=document.createElement('span')
        s.textContent="\u00d7";
        l.appendChild(s);
    }
}
li.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})
let list=document.getElementsByTagName('li')

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', (e) => {
        list.style.textDecoration = "line-through";
    })};