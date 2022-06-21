// fetch api
const printLocation = document.querySelector('#location');
const printMessage = document.querySelector('#message');
const greetMessage = document.querySelector('#greet');
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    printLocation.textContent ='';
    printMessage.textContent ='Loading....';
    greetMessage.textContent = '';
    const location = search.value;
    
    fetch('/weather?address=' + encodeURIComponent(location)).then((response)=>{
        response.json().then((data) =>{
            if(data.error){
                printMessage.textContent = data.error;
            }
            else{
                printLocation.textContent =`Location : ` + data.location;
                printMessage.textContent = data.message;
                greetMessage.textContent = data.greet;
            }
        })
    })
    

    
})