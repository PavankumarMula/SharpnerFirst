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
/*
var li=document.getElementsByTagName('li');
li[0].style.color='tomato';
//get element by class name
var liclass=document.getElementsByClassName('list-group-item active');
liclass[0].style.backgroundColor='#820000'*/

//Query Selector
//var header=document.querySelector('#main-header');
//header.style.border='solid 4px black';
//var input=document.querySelector('input[type="text"]');
//input.value="Number Of Items";
//var submit=document.querySelector('input[type="submit"]');
//submit.value="Send";
//var item=document.querySelector('.list-group-item');
//item.style.color='orange';
//var lastitem=document.querySelector('.list-group-item:last-child');
//lastitem.style.color=' red';
var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display='none';
//query selector All
//var titles=document.querySelectorAll('.title');

var second=document.querySelectorAll('li:nth-child(2)');
second[0].style.color='red';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}