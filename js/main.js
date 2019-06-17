document.addEventListener('DOMContentLoaded', function(){
    let players = document.querySelectorAll('[data-js="video-player"]');
    let timeout = 0;

    const playVideo = () => {
        [...players].map( (element, index) =>{
            
            if(index == 0 ){
                element.classList.add('visible');
            } 

            setTimeout(()=>{
                element.play();
                
                setTimeout(()=>{
                    element.classList.add('visible');
                }, 250);
            }, timeout);

            timeout+=500;
        });

        setTimeout(()=>{
            [...players].map( (element, index) =>{
                element.classList.remove('visible');
            });

        }, 23250);
    }

    window.playVideo = playVideo;
}); 