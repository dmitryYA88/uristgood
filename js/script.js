$('.header__burger').on('click',(e)=> {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
});
$('.clients__button').on('click', ()=> {
    $('.formWrap').css('display','flex');
    $('body').addClass('lock');
})
$('.btn__close').on('click', ()=> {
    $('.formWrap').fadeOut(100);
    $('body').removeClass('lock');
})

$('#form').submit((e)=> {
    e.preventDefault();
    // let data = new FormData(form);
    $.ajax ({
        url: '/nordic/dima/uristgood/php/send.php',
        // url: '/php/send.php',
        type: 'POST',
        processData: false,
        contentType: false,
        data: new FormData(form),
        success: function (response,status) {
            alert(response);
            document.getElementById('form').reset();
        },
       error: function (response,status) {
        alert(response);
    },


    })
}) ;
