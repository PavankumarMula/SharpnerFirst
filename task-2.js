/* Get Element by Id;
var title=document.getElementById('header-title');
title.style.fontWeight='bold'
title.style.color='yellow';*/
//get Element By Class name
/*var additems=document.getElementsByClassName('title');
additems[0].style.color='brown';*/
//making 3rd element in the list green background color
/*var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor='green';
//making all the elements in the list bold font;
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}*/

//get Element by tagname
var li=document.getElementsByTagName('li');
li[0].style.color='tomato';
//get element by class name
var liclass=document.getElementsByClassName('list-group-item active');
liclass.color='yellow'