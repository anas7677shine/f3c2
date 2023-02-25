

var arr = [];
var data = {};
var n = 0;

var studentName = document.getElementById('name');
var roll = document.getElementById('roll');
var subject = document.getElementById('Subject');
var marks = document.getElementById('marks');
var email = document.getElementById('email');

console.log();
var n2 = 1;

document.getElementById('incre').innerHTML = n2;    
function storeData() {
    document.getElementById('incre').innerHTML = n2;    
    var Student_Name = studentName.value;
    var student_roll = roll.value;
    var student_subject = subject.value;
    var student_marks = marks.value;
    var student_email = email.value;
    var email1 = student_email.split('@');
    var email2 = email1[0];

    n2 += 1;
    n += 1;
    data = { "ID": n , "Student Name": Student_Name, "Student Roll": student_roll, "Subject": student_subject, "Marks": student_marks, "Marked By": email2 };

    tableData(data);
    studentName.value = "";
    roll.value = "";
    subject.value = "";;
    marks.value = "";;
    email.value = "";


    document.getElementById('name').style.display = "none"
    document.getElementById('roll').style.display = "none"
    document.getElementById('Subject').style.display = "none"
    document.getElementById('marks').style.display = "none"
    document.getElementById('email').style.display = "none";
    document.getElementById('save').style.display = "none";
    document.getElementById('incre').style.display = "none";


}

var p = 1
function addInfo() {
    document.getElementById('name').style.display = "block"
    document.getElementById('roll').style.display = "block"
    document.getElementById('Subject').style.display = "block"
    document.getElementById('marks').style.display = "block"
    document.getElementById('email').style.display = "block";
    document.getElementById('save').style.display = "block";
    document.getElementById('incre').style.display = "block";

    p += 1;
    document.getElementById('incre').innerHTML = p;
}



function tableData(gg) {
    arr.push(gg)
    hhhhhhh();
}
function hhhhhhh() {
    console.log(arr);
}
