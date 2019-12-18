const app = document.getElementById('content')

    function built(data,r,m)
    {
        for(var i=r;i<m;i++)
        {
            addElement(data[i]);
        
        }
    }
    function addElement(q){
            const card = document.createElement('div');
            card.setAttribute('class','card');

            const contet = document.createElement('contet');
            contet.setAttribute('class','container');

            if(q.picture){
                image = document.createElement('img');
                image.src = q.picture.large;
                image.setAttribute('class','img');
                card.appendChild(image);
            }
            else{
                no_image = document.createElement('div');
                temimg = document.createElement('div')
                temimg.setAttribute('class','inside');
                
                temimg.textContent = q.name.first[0]+q.name.last[0];
                no_image.setAttribute('class','propic');
                no_image.appendChild(temimg)
                contet.appendChild(no_image);
            }
            const h4 = document.createElement('h4');
            h4.textContent =q.name.title+' '+q.name.first+' '+q.name.last;

            const p1 = document.createElement('p');
            p1.textContent = q.id.name+' : '+q.id.value;

            const p = document.createElement('p');
            p.setAttribute('class','IDE')
            p.textContent = q.email;

            contet.appendChild(h4)
            contet.appendChild(p)
            contet.appendChild(p1)
            card.appendChild(contet)
            app.appendChild(card)


        }
    