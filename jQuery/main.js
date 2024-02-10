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


    function widthandHeight(elem){
        let classname = elem;
        let w = $(classname).width()
        let h = $(classname).height()
        $('.receive h2').text('Width is '+w+'; Height is '+h);
    }
    widthandHeight('header');

    // $('.mainText').html('<p> New text </p>')
    $('.mainText').fadeOut(5000).fadeIn(3000)

})


$('#select1');
$('.text1')
$('.menu li')
$('.form  #select1 > option')
$('menu li:even')
$('img:not(.logo img)')
$('li:has(a)')
$('p:contains(client)')
$('li:first')
$('.menu li:last')
$('div:hidden')
$('div:visibility')