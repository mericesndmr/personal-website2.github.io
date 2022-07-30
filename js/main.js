function hsvToRGB (h, s, v) {
    h = h % 1;

    var c = v * s,
        hDash = h * 6;

    var x = c * (1 - Math.abs(hDash % 2 - 1));

    var mod = Math.floor(hDash);

    var r = [c, x, 0, 0, x, c][mod],
        g = [x, c, c, x, 0, 0][mod],
        b = [0, 0, x, c, c, x][mod];

    var m = v - c;

    r += m;
    g += m;
    b += m;

    return [r, g, b];
};

function rgbToString (color) {
    return 'rgb(' + (color[0] * 255).toFixed(0) + ',' + (color[1] * 255).toFixed(0) + ',' + (color[2] * 255).toFixed(0) + ')';
};

document.getElementById('dot').style.color = rgbToString(hsvToRGB(Math.random(), 0.75, 1));