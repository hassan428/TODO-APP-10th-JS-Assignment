var firebaseConfig = {
    apiKey: "AIzaSyDfe_rK6x0mU9kYN2-xVtN5Mrh0T4JGmFQ",
    authDomain: "todoapp-c4391.firebaseapp.com",
    databaseURL: "https://todoapp-c4391-default-rtdb.firebaseio.com",
    projectId: "todoapp-c4391",
    storageBucket: "todoapp-c4391.appspot.com",
    messagingSenderId: "39525377963",
    appId: "1:39525377963:web:a5aa50119240fb6369d4ee",
    measurementId: "G-RCGZEV7YXQ"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
console.log(app);
console.log(app.database);





var input = document.getElementById("input");
var inputValue = input.value;
var key = Math.random() * 123456;

function add(){

    if(input.value != "" ){

        if(input.value[0] != " " ){

            //================list ==============
            var ul = document.getElementById("list");
            var liEle = document.createElement("li" );
            var liText = document.createTextNode(input.value);
            liEle.appendChild(liText);
            var obj = {
                todo: input.value,
            }

            firebase.database().ref("users/Todo List/" + Math.round(key)).set(obj);
            
            
            //================Edit Button ==============
            var editBtn = document.createElement("button");
            editBtn.setAttribute("class", "btn btnDisplay");
            editBtn.setAttribute("onclick", "edit(this)");
            var editText = document.createTextNode("Edit");
            editBtn.appendChild(editText);
            liEle.appendChild(editBtn);
        
        
            //================delete Button ==============
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
    firebase.database().ref("users/Todo List").remove();
}


function edit(e){
    var update = prompt("Enter Updated list");
    if(update != "" ){

        if(update[0] != " " ){
            e.parentNode.firstChild.nodeValue = update;
            var updateObj = {
                updateTodo: update
            }
            firebase.database().ref("users/Todo List/" + Math.round(key)).set(updateObj);

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
    firebase.database().ref("users/Todo List/" + Math.round(key)).remove();
}

