var navButton=document.querySelector(".nav-button");
var panelHolder=document.querySelector(".panel-holder");
var tabs=document.querySelectorAll(".tab");
navButton.addEventListener("click",transform);
var homeContent=document.querySelector(".home-content");
var introText=document.querySelector(".introText");
var homeHi=document.querySelector(".home-hi");
var tabName=document.querySelector(".tab-name");
var home=document.querySelector(".home");
var skillsTabs=document.querySelectorAll(".skills-tab");
var skillsTabContent=document.querySelectorAll(".skillsTab-content");
var allContents = document.querySelectorAll('.main-content');

function transform(){
    panelHolder.classList.toggle("transformed");
    navButton.classList.toggle("transformed");
}

for(var i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click",markCurrentTab);
}

for(var i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click",displayTabContent);
}


function markCurrentTab(e){
    if(e.target.tagName==="LABEL"||e.target.tagName=="I"){
        var target=e.target;
        var tab=e.target.parentElement;
        markTab(tab);
        unmarkOtherTabs(tab);   
    }
    else if(e.target.tagName==="DIV"){
    var tab=e.target;
    markTab(tab);
    unmarkOtherTabs(tab)
   }

}

function markTab(tab){
    if(tab===null){
        return ;
    }
    tab.style.background="black";
    tab.style.color="#d1c4e9";
}

function unmarkOtherTabs(tab){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]!=tab){
            tabs[i].style.color="black";
            tabs[i].style.background="#d1c4e9";
        }
    }
}

function displayTabContent(e){
    var target=e.target;
    if(target.tagName==="DIV"){
        var elements=Array.from(target.children);
        var element=elements[1];
        tabName.innerText=element.innerText;
        displayElementContent(element);
        hideContentOfOtherTabs(element);
    }
    else if(target.tagName==="LABEL"){
       var element=target;
       tabName.innerText=element.innerText;
       displayElementContent(element);
       hideContentOfOtherTabs(element);
    }
    else if(target.tagName==="I"){
       var element=target.nextElementSibling;
       tabName.innerText=element.innerText;
       displayElementContent(element);
       hideContentOfOtherTabs(element);
    }
    }
    function displayElementContent(element){
        if(element===null){
            return ;
        }
        var labelFor=element.getAttribute("for");
        var content=document.getElementById(labelFor);
        content.style.display="flex";
    }
    
    function hideContentOfOtherTabs(element){
        if(element===null){
            return ;
        }
        var labelFor=element.getAttribute("for");
        for(i=0;i<tabs.length;i++){
            var otherLabelFor=tabs[i].querySelector("label").getAttribute("for");
            var otherElement=document.getElementById(otherLabelFor);
            if(otherLabelFor!==labelFor){
                otherElement.style.display="none";
            }
        }
    }

function displayDefaultTabContent(){
    for(var i=0;i<tabs.length;i++){
        hideCurrentTabContent(tabs[i]);
    }

    homeContent.style.display="flex";
    home.style.background="black";
    home.style.color="#d1c4e9";
    tabName.innerText=home.innerText;
    
}

displayDefaultTabContent();

function hideCurrentTabContent(element){
    var LabelForCurrentElement=element.querySelector("label").getAttribute("for");
    var content=document.getElementById(LabelForCurrentElement);
    content.style.display="none";
} 





const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function write(){ 
 var text="Hi there! I'm Mohammed Umar Farooq";
var insert="";
for(var i=0;i<text.length;i++){    
  insert+=text[i];
  if(i!=text.length-1){
  introText.innerText=insert+"_";}
  if(i==text.length-1){
  introText.innerText=insert;
  homeHi.classList.toggle("wave");
}
  if(text[i]===" "){introText.innerText+="\xa0"}
    await sleep(70);
}}
write();

for(var i=0;i<skillsTabs.length;i++){
    skillsTabs[i].addEventListener("click",markSkillsTab);
    skillsTabs[i].addEventListener("click",displaySkillsContent);
    }
    
    function markSkillsTab(e){
    if(e===null){
        return ;
    }
    var target=e.target;
    target.style.background="#FFA500"
    for(var i=0;i<skillsTabs.length;i++){
        if(skillsTabs[i]!==target){
        skillsTabs[i].style.background="";
    }}}
    
function displayDefaultSkillsTab(){
    skillsTabs[0].style.background="#FFA500";
    var element=document.getElementById(skillsTabs[0].getAttribute("for"));
    element.style.display="flex";
    }
    displayDefaultSkillsTab();
    function displaySkillsContent(e){
         var target=e.target;
         var id=target.getAttribute("for");
         var element=document.getElementById(id);
         element.style.display="block";
         if(element.id=="languages-known-content"){
            element.style.display="grid";
         }else{
         element.style.display="flex";
         element.style.border = '1px solid #333';
        }
         for(var i=0;i<skillsTabs.length;i++){
            if(id!==skillsTabs[i].getAttribute("for")){
                var anotherElement=document.getElementById(skillsTabs[i].getAttribute("for"));
                anotherElement.style.display="none";
            }
         }
        }

        


