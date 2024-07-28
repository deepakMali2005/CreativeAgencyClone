let autoText = document.querySelector(".auto-text");


let arr = [
`“I don't like people, but I make an exception for ABC Agency. They're pretty damn cool.”<br>
Brian Jones,  America Big Corporation`,
`“ABC Agency our the best. Not only did they deliver my work on time, they even walked my dog when I was out of town”<br>
    A Smith - Neighbour`
]

autoText.innerHTML = arr[1];

let index = 0;

setInterval(()=>{
    if(index > 1){
        index = 0;
    }
    autoText.innerHTML = arr[index];
    index++;
    
}, 8000);