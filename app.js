let joke = document.querySelector('.joke');
let btn = document.querySelector('.btn');

btn.addEventListener('click', getjoke);
getjoke();
async function getjoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    let url = await fetch( 'https://icanhazdadjoke.com', config);
    let data = await url.json();
    let apijoke = data.joke;
    joke.innerText = apijoke;
}
