
let str = 'abracadabra';
let alph = new Array();
let strlen = str.length;
for (let i = 0; i < strlen; i++) {
    if (alph[str.charAt(i)]) {
        alph[str.charAt(i)]++;
    }
    else {
        alph[str.charAt(i)] = 1;
    }

}
console.log(alph)

power = 0;
for (let i in alph) {
    alph[i] /= strlen;
    power++;
    console.log(i);
}
console.log(alph)
let entropy = 0;

if (power > 1) {
    for (let i in alph) {
        entropy += alph[i] * Math.log(alph[i]);
    }
    entropy /= Math.log(power);
}
entropy = -entropy;
console.log(entropy);
