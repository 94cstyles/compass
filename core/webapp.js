(function () {
    var dpr = Math.min(Math.ceil(window.devicePixelRatio || 1), 3),
        doc = document.documentElement;

    doc.classList.add('dpr' + dpr);

    if (dpr > 1) {
        var div = document.createElement('div');
        div.style.border = '.5px solid transparent';
        doc.appendChild(div);
        if (div.offsetHeight === 1) doc.classList.add('hairlines');
        doc.removeChild(div);
    }

    function _() {
      document.documentElement.style.fontSize = (Math.min(document.documentElement.clientWidth, 540) / 10) + 'px'
    }
    window.addEventListener('resize', _)
    _()

    document.addEventListener('touchstart', function () {
    }, false);
})();
