// generate a random string of provided length
exports.randString = (numChars) => {  
    let iter = 0;
    // let cipher = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").sort( () => 0.5 - Math.random() );
    // just use a pre-randomized cipher instead of getting a new one at runtime since it gets randomly picked anyway 
    let cipher = "4jagnc0h7lpgvw6ye2w9p1sb8d2fsxye3qlkxa5osjqxze45wd0vqxl8tpsacyrru6mkiw3aem9dzzw7objcv1";
    randStr = []
    while (iter < numChars){
        randIndex =  Math.floor(Math.random() * (cipher.length) );
        randStr.push(cipher[randIndex]);
        iter += 1;
    }
    
    return randStr.join('')
} 