const items = document.querySelectorAll('.box');
const sortDiv = document.querySelector('.boxes');
let container = document.querySelector('.container')
items.forEach(item =>{
    item.addEventListener('dragstart', () =>{
        item.classList.add('dragging');
        console.log(item.textContent);
    })
    item.addEventListener('dragend', () =>{
        item.classList.remove('dragging');
        console.log(item.textContent);
    })
});
const initSortBox = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');
    if (!draggingItem) return;
    const siblings = [...sortDiv.querySelectorAll('.box:not(.dragging)')];
    let nextSibling = siblings.find(sibling => {
        const rect = sibling.getBoundingClientRect();
        return e.clientY <= rect.top + rect.height / 2;
    });
    if (nextSibling) {
        sortDiv.insertBefore(draggingItem, nextSibling);
    } else {
        sortDiv.appendChild(draggingItem);
    }
};

sortDiv.addEventListener('dragover', initSortBox);


