// const p = document.querySelector('p')
// p.css('font-size', '30px')


$(function(){

    // const textP = $('.mainText p').hide(5000);
    // $('.mainText p').show(5000)


    // const heroTitle = $('.mainText h2').text('Ya lamav steklo!')
    // const oNas = $('a[href = portfolio]').text('Ne o nas')
    // const oNas = $('header > nav > menu > li:nth-child(2) > a').text('Ne o nas')
    // const submit = $('button[type="submit"]').hide();
    // const option = $('')
    // const what = $('.receive h2')
    // what.hide(4000).text('Hi I am Susi').show(4000)

    // const select2 = $('#select2 > option').hide(5000)
    // $('.icons > div').hide(4000)
    // const a = $('button[type=submit]')
    // a.width(200)
    // alert(a.width())


    // function widthandHeight(elem){
    //     let classname = elem;
    //     let w = $(classname).width()
    //     let h = $(classname).height()
    //     $('.receive h2').text('Width is '+w+'; Height is '+h);
    // }
    // widthandHeight('header');

    //Changing html tags
    // $('.mainText').html('<p> New text </p>')


    // $('.mainText').fadeOut(5000).fadeIn(3000)
    // $('img').fadeOut(5000)

    // $('header').fadeTo(4000, 0.1).fadeTo(2000, 0.8)
    // $('.mainText').slideUp(3000).slideDown(3000)


//!!!
// $('.icons > div:first img').removeAttr('src');
// $('nav > menu').addClass('border')
// $('nav > menu').addClass('border')
// $('nav > menu > li > a').css('color', 'green');
// $('.receive p').animate({
//     'font-size': '30px',
//     'color': 'green',
//     // 'padding': '210px'
// }, 5000)

//Changing one element in a list
// $('header > nav > menu > li > a').each(function(){
//     if($(this).attr('href')=='portfolio'){
//         $(this).fadeOut(5000)
//     }
// })


//length of an element/elements
// console.log($('div').length)

//Clone elements
// const clone = $('.mainText').remove();
// $('.receive p').append(clone);
// $('nav').before(clone)

//Choose different elements
// $('li, a, p').css('color', 'purple')


//Adding new tags in HTML doc
// $('.mainText').before('<p class=hello>Hello World!!!</p>');
// $('.hello').css({'color': 'white', 'margin-left': '600px'})
// $('.mainText').prepend('<p class=howareyou>How are you World!!!</p>');
// $('.howareyou').css({'color': 'green', 'margin-left': '0px'});
// $('.mainText').append('<p class=seeya>See ya World!!!</p>');
// $('.seeya').css({'color': 'blue', 'margin-left': '0px'});
// $('.mainText').after('<p class=bye>Bye World!!!</p>');
// $('.bye').css('color', 'pink').css('margin-left', '600px');


//!!!Events
// $(window).scroll(function(){
//     alert('Click')
// })
// $('.arrowDown').click(function(){
//     let clone = $(this).clone();
//     $(this).after(clone)
// })


// let i = $('menu li a');
// i.mouseover(function(){
//     $(this).addClass('border')
// })
// i.mouseout(function(){
//     $(this).removeClass('border')
// })
// i.hover(function(){
//     $(this).addClass('border')
// },function(){
//     $(this).removeClass('border') 
// })


// $('.mainText').click(function(e){
//     alert(e.target)
// })
// $('menu li a').click(function(e){
//     e.preventDefault();
// })

//Selecting form elements
// $(':input').fadeOut(3000);
// $(':checkbox').fadeOut(3000);
// $(':radio').css( {'-webkit-appearance': 'none', 'width': '1.15em', 'height': '1.15em', 'border': '0.15em solid currentColor'});
$('.form1 :checkbox:checked').fadeOut(3000)
$('.form1 :radio:checked').fadeOut(3000)
$('.form1 :selected').remove();

})
//mouseover, mouseout, click, mousemove, mouseup, submit, focus, blur, change, reset, keypress, keydown, keyup, load, resize, scroll

//Selectors
// $('#select1');
// $('.text1')
// $('.menu li')
// $('.form  #select1 > option')
// $('menu li:even')
// $('img:not(.logo img)')
// $('li:has(a)')
// $('p:contains(client)')
// $('li:first')
// $('.menu li:last')
// $('div:hidden')
// $('div:visibility')