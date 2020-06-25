//Pseudocode
//1.

let rows = document.querySelectorAll(".row");
//console.log(rows);
// converting values from localStr into {} & assigning to schedule var 
let schedule = JSON.parse(localStorage.getItem('schedule')) || {};
// console.log(schedule);


for(let i = 0; i < rows.length; i++) {
 
    let currentRow = rows[i];
   // console.log(i, currentRow);

   let saveButton = currentRow.querySelector("button");
   let textArea = currentRow.querySelector("textarea")
   let rowTime = currentRow.getAttribute("data-hour");
   
   textArea.value = schedule[rowTime] || "";
//    console.log(schedule[rowTime]);

//
   saveButton.addEventListener('click', function(){
    let event = textArea.value.trim();
    schedule[rowTime]=event;
    //saving values to localstr converting obj to ""
    localStorage.setItem('schedule',JSON.stringify(schedule) );


   });


}
