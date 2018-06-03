$(function () {
    var array = $(".header_first").filter("tr > td");
    array.css('background-color', 'green').css('font-weight', 'bold');
    var array_second = $(".second").not("tr > td");
    array_second.css('font-size', '300%').css('color', 'blue');

    var array_third = $(".third");
    array_third.filter(document.getElementsByTagName("tr")[1]).css('color', '#761c19').css('font-size', '150%');
    array_third.filter(document.getElementsByTagName("tr")[2]).css('color', 'red').css('font-size', '100%').css('font-weight', 'bold');

    var array_fourth = $("tr").filter(function () {
        // can be simplified:
        // return !!$(this.hasClass(".fourth"));
        if($(this).hasClass("fourth")) {return true;}
        else {return false;}
    });
    array_fourth.css('background-color', 'blue').css('color', 'orange');

    $("tr").slice(2, 4).css('font-family', 'Arial Narrow');

    $('tr').has('#third_td0').css('background-color', 'silver');
    // или:
    $('tr').has('td').has('#third_td0').css('background-color', 'orange');
});

$(function () {
    var array = $('li').map(function(index,elem){
        return $(elem).children()[0];
    });
    array.each(function(index, elem){
        console.log(elem.innerHTML);
    });
    array.css('background-color', 'silver');
    // array[1].css('background-color', 'red');

    // var array_ch = array.filter(function () {
    var array_ch = $("li").filter(function () {
        return !!$(this).has("ol"); // if ($(this).has("ol")) {return true;} else {return false;}
    });
    array_ch.css('background-color', 'red');

    // var array2 = $('tr').map(function (elem, index) {
    //     var array = $(elem).children();
    //     return array;
    // });
    // array2.each(function (index, elem) {
    //     elem.css('background-color', 'green');
    // });
    // array2.css('background-color', 'green');

    var lists = $('ul');
    if (lists.is('.submenu')) {lists.css('background-color', 'yellow')}

    $("li:last-child").css('background-color', 'orange');
});