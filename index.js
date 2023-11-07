$(function () {
    $('#formControlRange').on('change', set_bgOverlayOpacity);
});

function set_bgOverlayOpacity(e) {
    // console.log($(this).val());
    // 使用更改custom property的方式達成
    // bg-overlay:before
    $(this).parent().find('label span').first().text($(this).val());
    let root = document.documentElement;
    root.style.setProperty('--bg-overlay-opacity-rainy', $(this).val());
}