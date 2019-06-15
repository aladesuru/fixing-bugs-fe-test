let cardContainer = document.querySelector('#card-container');
let modal = document.querySelector('.modal');
let cancelBtn = document.querySelector('.cancel-btn');
let deleteBtn = document.querySelector('.delete-btn');
let productToDelete = null;

// Handle heart icon click
const handleCardControllers = (e) => {
    if(e.target.tagName.toLowerCase() === 'path' && e.target.style.fill !== 'red'){
             e.target.style.fill = 'red';
        }else{
         e.target.style.fill = 'black'
        }  
}
cardContainer.addEventListener('click' , handleCardControllers);

//Handle delete icon click
const handleProductDelete = (e) => {
   if(e.target.tagName.toLowerCase() === 'span'){
    productToDelete = e.target.parentNode.parentNode.parentNode.parentNode;
    modal.style.display = 'block';
   }
}
cardContainer.addEventListener('click' , handleProductDelete);

//Handle delete and cancel button click
const handleDeleteBtn = (e) => {
    if(e.target.tagName.toLowerCase() === 'button' && e.target.className === 'delete-btn'){
        modal.style.display = 'none';
    cardContainer.removeChild(productToDelete);
    }else{
        modal.style.display = 'none';
    }
    
}
deleteBtn.addEventListener('click' , handleDeleteBtn);
cancelBtn.addEventListener('click' , handleDeleteBtn);