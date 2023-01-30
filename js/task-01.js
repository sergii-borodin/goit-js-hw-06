const catigoriesElChildren = document.querySelectorAll('.item')

 function counterListEl(array) {
     let sum = 0;

     array.forEach((element, index) => {
         sum += index;
        });
        return `Number of categories: ${sum}`
        
        //  console.log(`Number of categories: ${array.length}`)
}

console.log(counterListEl(catigoriesElChildren))

catigoriesElChildren.forEach(el => {
    console.log(`Category:${el.firstElementChild.textContent},
    Elements: ${el.lastElementChild.children.length}`)
});