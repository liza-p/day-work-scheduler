//Pseudocode
//1.

let rows = document.querySelectorAll(".row");
//console.log(rows);
let schedule = JSON.parse(localStorage.getItem('schedule')) || {};



for(let i = 0; i < rows.length; i++) {
    let currentRow = rows[i];
   // console.log(i, currentRow);
   let saveButton = currentRow.querySelector("button");
   let textArea = currentRow.querySelector("textarea")
   let rowHour = currentRow.getAttribute("data-hour");
   textArea.value = schedule[rowHour] || "";
    
   saveButton.addEventListener('click', function(){
    let event = textArea.value.trim();
    schedule[rowHour]=event;
    localStorage.setItem('schedule',JSON.stringify(schedule) );


   });


}
