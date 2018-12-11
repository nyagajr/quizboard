$(document).ready(function(){
  $(".btn").click(function(){
var answer1 = $("input:radio[name=btn1]:checked").val();
var answer2 = $("input:radio[name=btn2]:checked").val();
var answer3 = $("input:text[name=btn3]:").val();

if (answer1.toString() === "no" && answer2.toString()==="America" && answer3.toString()==="moringa prep cohort 14")
{
  alert ("You are right");
} else {
  alert("You are wrong");

// if(answer2.toString() === "America")
// {
//   alert ("You are right");
// } else {
//   alert("You are wrong");
// }
});
});
