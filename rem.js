/**
 * Created by aaron on 2016/4/4.
 * 添加此代码后，可将rem作为动态单位使用。
 */
;
(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    var max = 640;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width > max) { // 最大宽度
            width = max;
        }
        var rem = width / 6.4; //  在640设计稿中，rem:px = 1:100
        docEl.style.fontSize = rem + 'px';
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();

})(window);

var w = document.documentElement.getBoundingClientRect().width;
document.documentElement.style.fontSize = ( w > 640 ? 640 : w ) / 6.4 + 'px';