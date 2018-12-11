$(document).ready(function(){
  $(".btn").click(function(){
var answer1 = $("input:radio[name=btn1]:checked").val();
var answer2 = $("input:radio[name=btn2]:checked").val();
var answer3 = $("input:radio[name=btn3]:checked").val();
var answer4 = $("input:radio[name=btn4]:checked").val();
var answer5 = $("input:radio[name=btn5]:checked").val();

var mark1,mark2,mark3,mark4,mark5 = 0;

if (answer1.toString() === "JavaScript")
{
  mark1 =20;
} else
{
 mark1 =0;
}
if (answer2.toString() === "object-based")
{
  mark2 =20;
} else
{
 mark2 =0;
}
if (answer3.toString() === "Declaration statements")
{
  mark3 =20;
} else
{
 mark3 =0;
}
if (answer4.toString() === "Classes")
{
  mark4 =20;
} else
{
 mark4 =0;
}
if (answer5.toString() === "Functions are values, and there is no hard distinction between methods and fields")
{
  mark5 =20;
} else
{
 mark5 =0;
}
add(mark1,mark2,mark3,mark4,mark5);

});
});

function add (num1,num2,num3,num4,num5)
{
  var result = num1+num2+num3+num4+num5;
  alert(result);
};
