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