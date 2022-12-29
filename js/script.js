$(function() {
    $('#menu-btn').on('click', function() {
        $('#menu-btn').toggleClass('open');
        $('#menu').toggleClass('flex');
        $('#menu').toggleClass('hidden');
    })
})