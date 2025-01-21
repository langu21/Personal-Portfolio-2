const button=document.getElementById('changeTextButton');

button.addEventListener('click',()=>
{
    console.log("Button clicked!");
    document.querySelector('h1').innerText='Hello I am a full Stack Developer!';});



