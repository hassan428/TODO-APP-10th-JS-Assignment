
var input = document.getElementById("input");
var inputValue = input.value;

function add(){

    if(input.value != "" ){

        if(input.value[0] != " " ){

            //================list ==============
            var ul = document.getElementById("list");
            var liEle = document.createElement("li" );
            var liText = document.createTextNode(input.value);
            liEle.appendChild(liText);
            
            
            //================Edit Button ==============
            var editBtn = document.createElement("button");
            editBtn.setAttribute("class", "btn btnDisplay");
            editBtn.setAttribute("onclick", "edit(this)");
            var editText = document.createTextNode("Edit");
            editBtn.appendChild(editText);
            liEle.appendChild(editBtn);
        
        
            //================Edit Button ==============
            var deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", "btns");
            deleteBtn.setAttribute("onclick", "delParticular(this)");
            var deleteText = document.createTextNode("Delete");
            deleteBtn.appendChild(deleteText);
            liEle.appendChild(deleteBtn);
            
            // console.log(liEle);
        
            ul.appendChild(liEle);
            input.value = "";
           
            }
            else{
                alert('The first Letter must not be the "Space"');
            }
    
        }
        else{
            alert("Input field is empty");
        }
    }
    


function del(){
    var ul = document.getElementById("list");
    ul.innerHTML = "";
}


function edit(e){
    var update = prompt("Enter Updated list");
    if(update != "" ){

        if(update[0] != " " ){
            e.parentNode.firstChild.nodeValue = update;
        }
        else{
            alert('The first Letter must not be the "Space"');
        }
    }
    else{
        alert("Input field is empty");
    }

}

function delParticular(e){
    e.parentNode.remove();
}

