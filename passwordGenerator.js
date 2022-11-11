function solve(input) {

    let password = (input[0] + input[1]).toLocaleLowerCase();
    let key = input[2].toLocaleUpperCase();
    const letters = ['a', 'e', 'i', 'o', 'u'];
    let currentKeyIndex = 0;

    for (const char of password) {
        if (letters.includes(char)) {
            password = password.replace(char, key[currentKeyIndex++]);
            if (key[currentKeyIndex] === undefined) {
                currentKeyIndex = 0;
            }
        }
    }
    let finalPassword = password.split('').reverse().join('');
    console.log(`Your generated password is ${finalPassword}`);
}
solve([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ])