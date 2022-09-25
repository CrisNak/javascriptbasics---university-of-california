(function(){
    'use strict';
    const myimages = ['image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg','image5.jpg'];
    let currentimage =0;

    document.getElementById('next').onclick = nextphoto;
    document.getElementById('previous').onclick = previousphoto;

    function nextphoto(){
        currentimage++;
        if(currentimage > myimages.length-1){currentimage=0;}
        document.getElementById('myimage').src = myimages[currentimage];
    }

    function previousphoto(){
        currentimage--;
        if(currentimage <0 ){currentimage= myimages.length-1;}
        document.getElementById('myimage').src = myimages[currentimage];
    }

})();