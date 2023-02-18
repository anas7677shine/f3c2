var addDataButton = document.getElementById('jsCreation');
const collection = document.getElementsByClassName("click");
var tbody = document.querySelector("tbody");
var n = 1;
var statuss = "Not Returned";





function fetchData() {
    var IssueTo = document.getElementById('Issue').value;
    var bookName = document.getElementById('BookName').value;
   
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hour = date.getHours();
    let min = date.getMinutes();



    tbody.innerHTML += `
    <tr>
        <td>${n}</td>
        <td id ="book">${bookName}</td>
        <td id ="Is">${IssueTo}</td>
        <td>${day} - ${month} - ${year} at ${hour}:${min}</td>



        <td class="sapa">
        <span style="        
        text-decoration:none;
        color:red; 
        " onclick="alert1()" id="change">${statuss}</span>

        <button" onclick="edit()" id ="red"><i class="fa-solid fa-pen-to-square"></i></button>
        </td>
    </tr>`

    n += 1;

    document.getElementById('Issue').value = "";
    document.getElementById('BookName').value = "";

}

function alert1(){
    if(confirm("Are want to return ?")){
        alert("Your book submitted successfully ");
        document.getElementById('change').innerHTML = "Returned";
        document.getElementById('change').style.color = "green";
    }else{
        alert("You didn't submitted yet ");
        document.getElementById('change').innerHTML = "Not Returned";
        document.getElementById('change').style.color = "red";
    }
}


addDataButton.addEventListener('click', fetchData);


function edit(){
    var book = prompt("Enter book name to update");
    var name = prompt("Enter book name to update");

    document.getElementById('book').innerHTML = book;
    document.getElementById('Is').innerHTML = name;
    
}
