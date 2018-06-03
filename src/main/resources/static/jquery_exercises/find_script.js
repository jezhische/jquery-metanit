$(function(){
    // поиск по селектору
    var array0 = $('body').find('.menu');
    array0.css('color', 'red');

    // поиск по элементу
    // получаем первый элемент выборки
    var elem = $('ul.submenu')[0];
    var array1= $('ul').find(elem);
    array1.css('background-color', 'gray');
    // еще попытка:
    $('ul').find($('ul.submenu')[1]).css('font-size', '200%');

    // Поиск объекта jQuery
    var jQueryObject = $('ul.submenu');
    var array2= $('ul').find(jQueryObject);
    array2.css('color', 'blue');
    // еще попытка бе find:
    $('ul.submenu').css('font-weight', 'bold');

    //-----------------------------------

    // дочерние узлы без селектора
    var lists = $('li').children('');
    lists.each(function(index, elem){
        console.log(elem.innerHTML);
    });

//дочерние узлы по селектору
    var lists2 = $('li').children('.count');
    lists2.each(function(index, elem){
        console.log(elem.innerHTML);
    });

    lists = $('li').closest('ul.menu');
    lists.each(function(index, elem){
        console.log(elem.innerHTML + index.toString());
    });

    console.log('next sibling for \'ul.count\' array length: ' + $('ul.count').next().length);

    $('li').next().each(function (index, elem) {
        console.log(elem.innerHTML);
    });

    var parents = $("li").parents();
    console.log("------------------parents for \'li\'--------------");
    parents.each(function (index, elem) {
        console.log(elem.innerHTML);
    });
    console.log("------------------parent for \'ul.count\'--------------");
    var countParent = $(".count").parent();
    countParent.each(function (index, elem) {
        console.log(elem.innerHTML);
    });
    console.log("------------------parent parent for \'ul.count\'--------------");
    var countParentParent = $(".count").parent().parent();
    countParentParent.each(function (index, elem) {
        console.log(elem.innerHTML);
    });
    console.log("------------------parent parent parent for \'ul.count\'--------------");
    var countParentParentParent = $(".count").parent().parent().parent();
    countParentParentParent.each(function (index, elem) {
        console.log(elem.innerHTML);
    });
console.log("------------------parent parent parent parent for \'ul.count\'--------------");
    var countParentParentParentParent = $(".count").parent().parent().parent().parent();
    countParentParentParentParent.each(function (index, elem) {
        console.log(elem.innerHTML);
    });

    console.log("------------------children for \'ul.count\'--------------");
    var countChildren = $(".count").children();
    countChildren.each(function (index, elem) {
        console.log(elem.innerHTML);
    });

});