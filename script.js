function saveLead() {
    console.log("Button clicked from onclick attribute")
}

let myleads=[]
const inputEl=document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn");
const deletebtn=document.getElementById("delete-btn");

// const tabs=[
//     {url:"www.linkedin.com/in/ravi-kumar-yadav-a0388a24b"}
// ]
tabBtn.addEventListener("click",function(){
   
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads) )
            render(myLeads)
        })

 
})

deletebtn.addEventListener('dblclick',function(){
    console.log("double clicked");
    localStorage.clear();
    myleads=[];
    render(myleads);
})

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myleads"));
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myleads)
}

inputbtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
    myleads.push(inputEl.value);
    inputEl.value="";

    localStorage.setItem("myleads",JSON.stringify(myleads));
    console.log(myleads);
    render(myleads);


})
function render(leads){
let listItem="";
for(let i=0;i<leads.length;i++){
    console.log(leads[i]);
    // listItem+= "<li><a  target='_blank' href='" + myleads[i]+"'>" +myleads[i]+"</a></li"+"<br>";
    listItem+= `
    <li>
    <a  target='_blank' href = ${leads[i]}>${leads[i]}</a>
    </li"+"<br>
    
    `

}
ulEl.innerHTML=listItem;

}