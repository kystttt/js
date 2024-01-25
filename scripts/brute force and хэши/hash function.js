let S = 'abbbfbbb';
let T = 'bb'; //1 2 5 6
let n = S.length, m = T.length;
let answer = new Array();
let i, j;

function hash(string) {
    let summa = 0;
    for (let k = 0; k < string.length; k++) {
        summa += string.charCodeAt(k);
 
    }
    return summa;

}
let hashT = hash(T);
i = 0;
while (i <= n - m) {
    j = 0;
    if (hash(S.slice(i, i + m)) == hashT) {
        while (S[i + j] == T[j]) {
            j++;

            if (j == m) {
                answer.push(i);
                break;
            }
        }
    }
    
    
    i++;
}
if (answer.length > 0) {
    console.log(answer);
}
else {
    console.log('no matches found');
}
