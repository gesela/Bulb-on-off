function toggleBulb() {
    let bulb = document.getElementById('bulb')
    if(bulb.src.match('bulb-off')){
bulb.src ='bulb-on.png'
    }else{
        bulb.src = 'bulb-off.png'
    }
}
