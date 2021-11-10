var st = new Date();
window.requestAnimationFrame(draw);
function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var h = canvas.height;
    var w = canvas.width;
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(f(3, 120, 1), f(980, 1090, 2));
    ctx.lineTo(f(1900, 1950, 2), f(1040, 1100, 3));
    ctx.lineTo(f(1910, 1980, 3), f(4, 100, 2));
    ctx.lineTo(f(30, 60, 2), f(5, 80, 2.5));
    ctx.fill();
    window.requestAnimationFrame(draw);
}
function f(n, m, s) {
    var t = (new Date() - st) / 1000;
    // console.log(t);
    console.log((m - n) * ((1 + Math.sin(t * s)) / 2) + n);
    return (m - n) * ((1 + Math.sin(t * s)) / 2) + n;
}

//# sourceMappingURL=index.d25ee831.js.map
