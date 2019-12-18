
var r = 0;
var m = 20;

function respo(info){
    if(info !== null){
        built(info,r,m);
        console.log(r+" "+m)
        r = m;
       
        if( r == 100)
        {
            r = 0;
            m = 20;
            alert("new call")
            load()
        }
        m = m+20;
       
        
       
        window.onscroll = function() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // you're at the bottom of the page
                respo(info)
               
            }
        };
        
        
    }
    else{
        alert("no data")
    }
    
}

function load()
{
    var request = new XMLHttpRequest();
    
    var url = 'https://randomuser.me/api/?results=100'
    console.log(url)
    request.open('GET',url,true)

    request.onload = function (){
        var data  = JSON.parse(this.response);
        var info = data["results"];
        
        
        if(r<info.length)
        {
            respo(info)
        }
        
        
    
    }
    request.send()

}
