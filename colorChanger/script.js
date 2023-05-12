function changeColor(){
    var colors = 'rgb('+random(255)+','+random(255)+','+random(255)+')';

    document.getElementsByTagName("body")[0].style.background = colors;

}

function random(number){
    return Math.floor(Math.random()*(number+1))
}