let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click',incrementCounter);
lowerCount.addEventListener('click',decrementCounter);


function incrementCounter (){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = '#4caf50';
    }
    else if(counter.innerHTML == '0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.4'},{opacity:1.0}],
    {duration:200,fill:"forwards"})
}


function decrementCounter (){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML,'0'){
        counter.style.color = 'chocolate';
    }
    else if(counter.innerHTML == '0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'},{opacity:1.0}],
    {duration:200,fill:'forwards'})
}




