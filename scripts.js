function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function calculate() {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);

    if (isNaN(n) || isNaN(r)) {
        alert('Please enter valid numbers for n and r');
        return;
    }

    if (n < 0 || r < 0 || r > n) {
        alert('Please ensure that n and r are non-negative, and r is less than or equal to n');
        return;
    }

    const array = factorial(n) / factorial(n - r);
    const combination = factorial(n) / (factorial(r) * factorial(n - r));

    document.getElementById('array-result').innerText = `Arranjos | P(n, r): ${array}`;
    document.getElementById('combination-result').innerText = `Combinações | C(n, r): ${combination}`;
}
