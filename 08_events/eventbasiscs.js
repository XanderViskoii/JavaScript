    //All events in JS is sequentially run except some exceptions
    //Events of a browser is also exception invokes on a activity
    // document.getElementById('four').onclick = function(){
    //     alert('Owl Clicked')
    // }
    //attachEvent() was used in early times
    // jQuert - on

    // Type, TimeStamp, preventDefault
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode


    // Event capturing

    // Event propagation : bubbling up (goes from down to up i.e. moving from inside to outside)
    // Capturing(use true for it) goes from top to bottom and it depends which case is important
    // by default is false
   /* document.getElementById('images').addEventListener('click', function(e){
        console.log('Clicked inside the ul');
        
    })

    document.getElementById('four').addEventListener('click', function(e){
        console.log('Four Clicked');
        // alert('Fourth position clicked')
    }) */
    

    // If we do not want bubbling than--->
    /*document.getElementById('five').addEventListener('click', function(e){
        console.log('Five Clicked');
        e.stopPropagation()
    }) 
    
    document.getElementById('google').addEventListener('click',function(e){
        console.log('google clicked');
        e.preventDefault()
        e.stopPropagation()
    },false) */

    //To vanish images on clicked
    document.querySelector('#images').addEventListener('click',function(event){
        console.log(event.target.tagName);
        if (event.target.tagName === 'IMG'){
            let removeIt = event.target.parentNode;
            console.log(event.target.id);
            removeIt.remove();
        }
        // removeIt.parentNode.removeChild(removeIt);
    })