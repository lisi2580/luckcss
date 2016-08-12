/**
 * Created by aaron on 2016/4/4.
 * 添加此代码后，可将rem作为动态单位使用。
 */
;
(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    var max = 540;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width > max) { // 最大宽度
            width = max;
        }
        var rem = width / 10; // 将屏幕宽度分成10份， 1份为1rem
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