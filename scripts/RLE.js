let fs = require('fs');
let inText, outText,uncText;
let i = 0, n = 1;
let bufer = ""


inText = fs.readFileSync('input.txt');
inText = inText.toString();
console.log(inText);



while (i < inText.length){
		while (inText.charAt(i) == inText.charAt(i + n))
			n++;
		console.log(inText.charAt(i), " - ", n)
		i += n;
		
		if ((n > 3) || (inText.charAt(i-1) == '#')){
		bufer += ("#" + String.fromCharCode(255) + inText.charAt(i-1)).repeat(Math.floor(n / 255));
		bufer += "#" + String.fromCharCode(n % 255) + inText.charAt(i-1)
		}
		else {
		bufer += inText.charAt(i-1).repeat(n);
		}
		n = 1;
	}
//write our code string in cmd
fs.writeFileSync('code.txt', bufer);
outText = fs.readFileSync('code.txt');
outText = outText.toString();
console.log(outText);

//uncode
let unbufer;
unbufer = ""
for (let j = 0; j  < outText.length; j++) {
	if (outText.charAt(j) == "#") {
		unbufer += outText.charAt(j + 2).repeat(outText.charCodeAt(j+1));
		j += 2;
		}
	else {
		unbufer += outText.charAt(j);
	}
}
fs.writeFileSync('decode.txt', unbufer);
uncText = fs.readFileSync('decode.txt');
uncText = uncText.toString();
console.log(uncText);
