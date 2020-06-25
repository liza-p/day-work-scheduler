//Pseudocode
//1.

let rows = document.querySelectorAll(".row");
//console.log(rows);
let schedule =JSON.parse(localStorage.getItem('schedule')) || [];;



for(let i = 0; i < rows.length; i++) {
    let currentRow = rows[i];
   // console.log(i, currentRow);
   let saveButton = currentRow.querySelector("button");
   saveButton.addEventListener('click', function(){
    let event = currentRow.querySelector("textarea").value.trim();
    let hour = currentRow.getAttribute("data-hour");
    schedule[hour]=$(event).value.trim();
    localStorage.setItem('schedule',JSON.stringify(schedule) );


   });


}
