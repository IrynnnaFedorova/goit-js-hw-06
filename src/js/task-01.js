//const categoriesEl=document.querySelector('ul');
//console.log(categoriesEl);
//const countOfChildren = categoriesEl.childElementCount;
//console.log(`Number of categories: ${countOfChildren}`);
///const firstElementEl = categoriesEl.firstElementChild;
//console.log(categoriesEl.children[0]);
//const categoryName = element.firstElementChild.textContent;
//console.log('Category:', categoryName);
//const SecondElementEl = categoriesEl.SecondElementChild;
//console.log(categoriesEl.children[1]);
//const ThirdElementEl = categoriesEl.lastElementChild;
//console.log(categoriesEl.children[2]);

const categoriesEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesEl.length);
categoriesEl.forEach(element => {
    const categoryNameEl = element.firstElementChild.textContent;
    console.log('Category:', categoryNameEl);

    const categoryTypesList = element.lastElementChild;
    const categoryTypesArray = categoryTypesList.children.length;
    console.log('Elements:', categoryTypesArray);
});
