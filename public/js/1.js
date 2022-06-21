// fetch api
const printLocation = document.querySelector('#location');
const printMessage = document.querySelector('#message');
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    printLocation.textContent ='';
    printMessage.textContent ='Loading....';
    
    const location = search.value;
    
    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(location)).then((response)=>{
        response.json().then((data) =>{
            if(data.error){
                printMessage.textContent = data.error;
            }
            else{
                printLocation.textContent = data.location;
                printMessage.textContent = data.message;
            }
        })
    })
    

    
})