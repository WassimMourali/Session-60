//output html 'Hello from Mars !'
//output console '<h1>Hello from Mars !</h1>
/*
<!DOCTYPE html>
<html lang="en">
 <head>
   <title>Document</title>
 </head>
 <body>
   <h1>Hello from Mars!</h1>
   <script>
     var el = document.querySelector('h1');
     console.log("this is the querySelector", el);
   </script>
 </body>
</html>
*/


//output html 'balise span'
//output console 'balise span total'
/*
<!DOCTYPE html>
<html lang="en">
 <head>
   <title>Document</title>
 </head>
 <body>
   <h1>Hello from Mars!</h1>
   <span
     >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quos
     eveniet.
   </span>
   <span id="middleSpan">
     Quisquam veritatis, quam velit quos eligendi perferendis fugiat eveniet
   </span>
   <span>
     sapiente ratione assumenda iste repudiandae quidem dicta aliquid.
     Voluptatibus, error?
   </span>
   <script>
     var el = document.getElementById('middleSpan');
     console.log('el:', el);
   </script>
 </body>
</html>
*/

//output html 'affichage span total simpmle(même balise de html)'
//output console 'affichage total de spoan (tous les span selecter avec Id et notId)
/*
<!DOCTYPE html>
<html lang="en">
 <head>
   <title>Document</title>
 </head>
 <body>
   <h1>Hello from Mars!</h1>
   <span
     >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quos
     eveniet.
   </span>
   <span id="middleSpan">
     Quisquam veritatis, quam velit quos eligendi perferendis fugiat eveniet
   </span>
   <span>
     sapiente ratione assumenda iste repudiandae quidem dicta aliquid.
     Voluptatibus, error?
   </span>
   <script>
     var el = document.querySelectorAll('span');
     console.log('el:', el);
   </script>
 </body>
</html>
*/

//output html ' '
//out console ' '

function add(){
    var parag = document.createElement("p");
    parag.textContent="Hello Word";
    document.body.appendChild(parag);
  }
  
  function deleteee (){
  var suppr = document.querySelector("#remove");
  if (suppr) {
    suppr.parentNode.removeChild(suppr)
  }else {
    console.log("vide");
  }
  }
  
  function replacee () {
    var Div = document.querySelector("#remove");
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "this a new replacement";
    Div.parentNode.replaceChild(newDiv,Div);
  }
  