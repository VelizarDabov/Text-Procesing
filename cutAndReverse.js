function solve(text) {
    const middle = text.length / 2;
    let firstPart = text.substring(0, middle)
    .split('')
    .reverse()
    .join('');
    let secondPart = text.substring(middle)
    .split('')
    .reverse()
    .join('');

    console.log(firstPart);
    console.log(secondPart);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')