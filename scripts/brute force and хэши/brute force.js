let S = 'abbbfbbb';
let T = 'bb'; //1 2 5 6
let n = S.length, m = T.length;
let answer = new Array();
let i, j;

i = 0;
while (i <= n - m) {
    j = 0;
    while (S[i + j] == T[j]) {
        j++;
        
        if (j == m) {
            answer.push(i);
            break;
        }
    }
    i++;
}

console.log(answer);
