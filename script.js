
const hourhand = document.querySelector(".hour");
const minutehand = document.querySelector(".minute");
const secondhand = document.querySelector(".second");
const objectmap_clock = {
    s : "sound\\sound_tick.mp3" 
}
const cache = {} ;
for ( const key in objectmap_clock){
    cache[key]= new Audio(objectmap_clock[key]) ;
}



function updateclock() { 
    const now = new Date(); 
    const hourhand_deg = 30*(now.getHours()) + (1/2)*(now.getMinutes()) ;
    const minutehand_deg = 6*(now.getMinutes()) + (1/10)*(now.getSeconds());
    const secondhand_deg = 6*(now.getSeconds()) 
    rotate(hourhand , hourhand_deg);
    rotate(minutehand , minutehand_deg);
    rotate(secondhand , secondhand_deg);


}

setInterval(updateclock, 1000); 
updateclock();

function rotate(element , deg){
    element.style.setProperty("--rotation" , deg);
}

secondhand.addEventListener("transitionend",(e)=>{
    if (e.propertyName.includes("transform")) {
        const audio = cache.s;
        if (!audio) return; 
        audio.currentTime = 0; 
        audio.play().catch(() => { /* Handle autoplay block */ });
    }
})
