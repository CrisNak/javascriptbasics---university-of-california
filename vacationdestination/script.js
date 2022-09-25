(function(){

    "use strict";

    const detailsform = document.querySelector("destination_details_form");

    detailsform.addEventListener("submit", handleformsubmit);

    function handleformsubmit(event){
        event.preventDefault();

        
        const destname = event.target.elements["name"].value;
        const destlocation = event.target.elements["location"].value;
        const destphoto = event.target.elements["photo"].value;
        const destdesc = event.target.elements["description"].value;

        for(let i=0;i<detailsform.lenght;i++){
            detailsform.elements[i].value ="";
        }

        const destcard = createdestinationcard(destname, destlocation, destphoto, destdesc);

        const wishlistcontainer = document.getElementById("destinationscontainer");
        if(wishlistcontainer.children.length ===0){
            document.getElementById("title").innerHTML = "My Wish List";
        }
        
        document.querySelector('destinationscontainer').appendChild(destcard);
    }
        
    function createdestinationcard(name, location, photourl, description){
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.setAttribute('alt', name);

        const constantphotourl = "images/signpost.jpg";

        if(photourl.lenght === 0){
                img.setAttribute('src', constantphotourl);
        }
        else{
            img.setAttribute('src', photourl);
        }

        card.appendChild(img);

        const cardbody = document.createElement('div');
        cardbody.className = "card-body";

        const cardtitle = document.createElement('h3');
        cardtitle.innerText = name;
        cardbody.appendChild(cardtitle);

        const cardsubtitle = document.createElement('h4');
        cardsubtitle.innerText = location;
        cardbody.appendChild(cardsubtitle);

        if(description.lenght !==0){
            const cardtext = document.createElement('p');
            cardtext.className = 'card-text';
            cardtext.innerText = description;
            cardbody.appendChild(cardtext);
        }

        const carddeletebtn = document.createElement('button');
        carddeletebtn.innerText = "Remove";

        carddeletebtn.addEventListener('click', removedestination);
        cardbody.appendChild(carddeletebtn);

        card.appendChild(cardbody);

        return card;
    }

    function removedestination(event){
        const card = event.target.parentElement.parentElement; //quando clica remove, vai para o "parent" e se clicar de novo, vai p o "parent" do "parent"
        card.remove()
    }

})();