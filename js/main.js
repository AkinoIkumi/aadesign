$(function() {

    $('.sidebar').find('a').on('click', function() {
        setSidebarActice($(this).parent('li'));
    });

    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function() {
        var speed    = 300;
        var href     = $(this).attr("href");
        var target   = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 56;

        $('body,html').animate({scrollTop:position}, speed, 'swing');

        return false;
    });

    $("#header").load("./template/header.html", function() {
        $(".header-menu, .close").on('click', function() {
            spMenu();
        });
    });
    $("#footer").load("./template/footer.html");
});

function setSidebarActice($clicked)
{
    $('.sidebar').find('.active').removeClass('active');
    $($clicked).addClass('active');
}

function spMenu()
{
    $("header nav").slideToggle();
}
