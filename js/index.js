const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

function sqrCalc(a, b, c) {
    const d = b * b - 4 * a * c;
    if (d < 0) {
        return "No valid solutions";
    }
    else if (d == 0) {
        return + -b / (2 * a);
    }
    const x1 = (-b + Math.sqrt(d)) / 2 * a;
    const x2 = (-b - Math.sqrt(d)) / 2 * a;
    return 'x1 = ' + x1 + ' x2 = ' + x2
}
// I really don't understand why browser don't see my js. 
