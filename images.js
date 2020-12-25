const photo = document.getElementById("photo");

// 5-19 1914-1 Dinge für Bild resizing

 function big() {
   photo.height=photo.height*2;
   photo.width=photo.width*2;
 }

 function small() {
   photo.height=photo.height/2;
   photo.width=photo.width/2;

 }

 function fixPhoto() {
   photo.height=photo.height*1;
   photo.width=photo.width*1;
 }

 function myMove() {
   var elem = document.getElementById("animate");
   var pos = 0;
   var id = setInterval(frame, 5);
   function frame() {
     if (pos == 7000) {
       clearInterval(id);
     } else {
       pos++;
       // elem.style.top = pos + "px";
       elem.style.left = pos + "px";
     }
   }
   alert("You sent Aleksandar Obrenović on a 'Ride' ")
 }

 function myMove1() {
   var txt;
   if(confirm("Are you Sure that you want to assassinate Aleksandar Obrenović?")){
     var obj = document.getElementById("animate");
     obj.remove();
     alert("Aleksandar Obrenović is no more!")
   } else {
     alert("You spared him!");
   }
 }


 const img = document.getElementById("photo2");

 // 5-19 1914-1 Dinge für Bild resizing

  function big1() {
    img.height=img.height*2;
    img.width=img.width*2;
  }

  function small1() {
    img.height=img.height/2;
    img.width=img.width/2;

  }

  function fixPhoto1() {
    img.height=img.height*1;
    img.width=img.width*1;
  }
