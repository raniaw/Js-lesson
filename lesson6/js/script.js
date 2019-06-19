document.write('<br>');
for (let i = 1; i <= 8; i++) {
    for (k = 1; k <= (8 - i); k++) {
        document.write('&nbsp;');
    }
    for (let j = 1; j < i; j++) {
        document.write('* ');
    }
    document.write('<br>');
}

document.write('<br>');
// print triangle of stars form 9 line and  columns
for (let i = 0; i < 9; i++) {
    for (let j = i; j < 9; j++) {
        // document.write('i=' + i + ' and j= ' + j);
        document.write(' 0 ');
    }
    document.write('<br>');
}