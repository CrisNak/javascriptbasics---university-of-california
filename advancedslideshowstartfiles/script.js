(function(){
    "use strict"
    let currentimage = 0
    const myphotos = ['image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg','image5.jpg'];

    const container = document.getElementById('content');
    const nextbtn = document.getElementById('next');
    const prevbtn = document.getElementById('previous');

    nextbtn.addEventListener('click', function(event){
       event.preventDefault();

       currentimage++;
       if(currentimage>(myphotos.length-1)) {currentimage = 0; }
   
       swapimage();
       
   });

   prevbtn.addEventListener('click', function(event){
       event.preventDefault();

       currentimage--;
       if(currentimage<0) {currentimage = (myphotos.length-1)}

       swapimage();
   });

   function swapimage(){
       const newslide = document.createElement('img');
       newslide.src = `slides/${myphotos[currentimage]}`; //pega o próximo slide
       newslide.className = 'fadeinimg';//a nova imagem fica atras quando fadein
       container.appendChild(newslide);

       if(container.children.length > 2){
           container.removeChild(container.children[0]); //remove a imagem debaixo da que apareceu
       }
   }

   

})();