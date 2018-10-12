$(function() {
    $(".tab li").on('click', function() {
        const $this = $(this);
        $this.closest('.tab').find('li').removeClass('select');
        $this.addClass('select');
        $(".content li").addClass('hide');
        const index = $(".tab li").index($this);
        $(".content li").eq(index).removeClass('hide');
    });
});
