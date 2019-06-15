let cardContainer = document.querySelector('#card-container');
let modal = document.querySelector('.modal');
let cancelBtn = document.querySelector('.cancel-btn');
let deleteBtn = document.querySelector('.delete-btn');
let productToDelete = null;

const handleClickOnProductCard = (e) => {
    switch(e.target.tagName.toLowerCase()){
        case  'path': //Handle heart icon click
        if(e.target.style.fill !== 'red'){
            e.target.style.fill = 'red';
        }else{
             e.target.style.fill = 'black'
            }  
        break;

        case 'span': //Handle delete icon click
                productToDelete = e.target.parentNode.parentNode.parentNode.parentNode;
                modal.style.display = 'block';
        break;

        case 'button': //Handle delete and cancel button click
                if(e.target.className === 'delete-btn'){
                    modal.style.display = 'none';
                cardContainer.removeChild(productToDelete);
                }else{
                    modal.style.display = 'none';
                }
        default: 
        break;
    }
}
cardContainer.addEventListener('click' , handleClickOnProductCard);
deleteBtn.addEventListener('click' , handleClickOnProductCard);
cancelBtn.addEventListener('click' , handleClickOnProductCard);