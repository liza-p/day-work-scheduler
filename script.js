//Pseudocode
//1.

let rows = document.querySelectorAll(".row");
//console.log(rows);
// converting values from localStr into {} & assigning to schedule var 
let schedule = JSON.parse(localStorage.getItem('schedule')) || {};
// console.log(schedule);
// assigning a current timestamp using momentjs
var timestamp = moment().format('dddd, MMMM Do');
$('#currentDay').text(timestamp);





for(let i = 0; i < rows.length; i++) {
 
    let currentRow = rows[i];
   console.log(i, currentRow);

   let saveButton = currentRow.querySelector("button");
   let textArea = currentRow.querySelector("textarea")
   let rowTime = currentRow.getAttribute("data-hour");
   
   textArea.value = schedule[rowTime] || "";
//    console.log(schedule[rowTime]);
   if(rowTime == moment().hour()) {
      currentRow.querySelector(".event").classList.add("present");
   } else if( rowTime < moment().hour()){
   currentRow.querySelector(".event").classList.add("past");
   } else if(rowTime > moment().hour()) {
   currentRow.querySelector(".event").classList.add("future");
   } 
//
   saveButton.addEventListener('click', function(){
    let event = textArea.value.trim();
    schedule[rowTime]=event;
    //saving values to localstr converting obj to ""
    localStorage.setItem('schedule',JSON.stringify(schedule) );

     
     


   });


}
