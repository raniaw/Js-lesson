rechteck(5, 10)
document.write("<br>");
document.write("<br>");
dreieck(10);
document.write("<br>");
document.write("<br>");
dreieckLinksUnten(7);
document.write("<br>");
document.write("<br>");
zweiLinien(6);
document.write("<br>");
document.write("<br>");
diffLinien(5);
document.write("<br>");
document.write("<br>");
dreieckRechtsUnten(4);
document.write("<br>");
document.write("<br>");
treeDown(10, 10);



/**
 * 
 * @param {Anzahl Zeilen} zeile 
 * @param {Anzahl Spalten} spalte 
 */
function rechteck(zeile, spalte) {

    for (let i = 0; i < zeile; i++) {

        if (i == 0 || i == zeile - 1) {
            for (let j = 0; j < spalte; j++) {
                document.write("*");
            }
        }
        if (i >= 1 && i <= zeile - 2) {
            for (let j = 0; j < spalte; j++) {
                if (j == 0 || j == (spalte - 1)) {
                    document.write("*");
                } else if (j >= 1 && j <= (spalte - 3)) {
                    document.write("&nbsp; ");
                }
            }
        }
        document.write("<br>");
    }
}

function dreieck(zeile) {

    for (let i = 0; i <= zeile; i++) {
        if (i == 0 || i == zeile) {
            for (let j = 1; j < i; j++) {
                document.write("*&nbsp; ");
            }
            document.write("<br>");
        } else if (i > 0 && i < zeile) {
            for (let j = 0; j <= i; j++) {
                if (j == 1 || j == i) {
                    document.write("* &nbsp;&nbsp;");
                } else if (j > 0 && j <= i) {
                    document.write("&nbsp; &nbsp;");
                }
            }
            document.write("<br>");
        }
    }
}
document.write("<br>");

function dreieckLinksUnten(zeile) {

    for (let i = zeile; zeile >= i; i--) {
        if (i === -1) { break; }
        if (i == 1 || i == zeile) {
            for (let j = 0; j < i; j++) {
                document.write("*&nbsp;&nbsp;");
            }
            document.write("<br>");
        } else if (i > 0 && i < zeile) {
            for (let j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    document.write("* ");
                } else if (j > 0 && j < i) {
                    document.write("&nbsp; &nbsp;");
                }
            }
            document.write("<br>");
        }
    }
}

function dreieckRechtsUnten(zeile) {

    for (let i = zeile; zeile >= i; i--) {
        if (i === -1) { break; }
        if (i == 1 || i == zeile) {
            for (let j = 0; j < zeile; j++) {
                if (j === -1) { continue; }
                document.write("*&nbsp;&nbsp;");
            }
            document.write("<br>");
        } else if (i > 0 && i < zeile) {
            for (let j = 0; j <= zeile; j++) {
                if (j === -1) { continue; }
                if (j == 0 && j < zeile) {
                    console.log("j: " + j);
                    document.write(" ");
                } else if (j == (zeile - 1) || j < zeile) {
                    document.write("* ");
                }
            }
            document.write("<br>");
        }
    }
}

function diffLinien(zeile) {

    for (let i = zeile; zeile >= i; i--) {
        if (i === -1) { break; }
        if (i == 1 || i == zeile) {
            for (let j = 0; j < zeile; j++) {
                if (j === -1) { continue; }
                document.write("*&nbsp;&nbsp;");
            }
            document.write("<br>");
        } else if (i > 0 && i < zeile) {
            for (let j = 0; j <= (zeile + 1); j++) {
                if (j === -1) { continue; }
                if (j == (zeile - 1) && j == zeile) {
                    document.write(" ");
                } else if (j > (zeile - i) || j < zeile) {
                    document.write("* ");
                }
            }
            document.write("<br>");
        }
    }
}

function zweiLinien(groesse) {

    for (let i = groesse; groesse >= i; i--) {
        if (i === -1) { break; }
        if (i == 1 || i == groesse) {
            for (let j = 0; j < groesse; j++) {
                if (j === -1) { continue; }
                document.write("*&nbsp;&nbsp;");
            }
            document.write("<br>");
        } else if (i > 0 && i < groesse) {
            for (let j = i; j >= groesse; j++) {
                if (j === -1) { continue; }
                if (j == (groesse - 1) && j == groesse) {
                    document.write("* ");
                } else if (j > (groesse - i) || j < groesse) {
                    document.write(" &nbsp; &nbsp;");
                }
            }
            document.write("<br>");
        }
    }
}
document.write("<br>");

function treeDown(zeile, spalte) {
    let index = spalte;

    for (let i = 0; i < zeile; i++) {
        for (let k = 0; k < (10 - index); k++) {
            document.write(" ");
        }
        for (let j = 0; j < index; j++) {
            document.write("*");
        }
        document.write("<br>");

        for (let k = 0; k < index; k++) {
            document.write("*");
        }
        index--;
    }
    document.write("<br>");
}


/**
 * 
 * @param {*zeile} h 
 * @param {*spalte} w 
 */
function p(h, w) {
    w = w || 1;
    if (h === 1) {
        return console.log('*'.repeat(w));
    } else {
        console.log(' '.repeat(h - 1) + '*'.repeat(w));
        p(h - 1, w + 2);
    }
}

p(6, 4);

function pyramid(n) {
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= (2 * n - 1); j++) { ////For every each counter     there exist 2*n-1 value
            (j >= n + 1 - i && j <= n - 1 + i) ? s += "*": s += " "; //Check   the work book image
        }
        console.log(s);
        document.write(s)
        document.write("<br>");
    }
}
pyramid(6);