let enter_text = document.getElementById('enter_text');
let li = document.getElementById('list');
let item = document.getElementsByTagName('li');
let it= item.getElementsByTagName('li');
array[x] = document.getElementById("enter_text").value;
tab = [];
text = enter_text.value;
function submit() {
    if(enter_text.value!= ''){
        
    
    let node = document.createElement("li");
        let textnode = document.createTextNode(enter_text.value);
        node.appendChild(textnode);
       let v= li.appendChild(node);
       let btn = document.createElement("button");   
       btn.innerHTML = " x ";                  
     let b= v.appendChild(btn); 
     b.style.background="red";
     b.style.borderColor="grey";
     b.style.float="right";
     b.style.width="20px";
        }
        else{
            alert("enter the text and numerics are not allowed");
    
        }
}
function reverse() {
    var  num=document.getElementsByTagName('li').length;
          var kids = li.childNodes;  
          for(var i = num-1; i >= 0; i--) {  
              var c = li.removeChild(kids[i]);   
              li.appendChild(c);    
                        }              
  }

  function fd() {
    var  num=document.getElementsByTagName('li').length;
    var kids = li.childNodes;
      
    if(item.length>0){
     if(confirm("do you want to delete")) {
       
     li.removeChild(li.lastElementChild);
    }      
else{
  alert("cancelled");
}
    }
          
      }