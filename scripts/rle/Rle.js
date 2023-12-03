let fs = require('fs');
let inText, outText, uncText;
let i = 0, n = 1;
let bufer = "";
let actionn = (process.argv[2]);
inText = fs.readFileSync('input.txt');
inText = inText.toString();



	switch (actionn) { //через кейсы делаем разветвление, кодируем или декодируем мы

		case 'code': // кодируем наш текст
			while (i < inText.length) {
				while (inText.charAt(i) == inText.charAt(i + n))
					n++;
				i += n;

				if ((n > 3) || (inText.charAt(i - 1) == '#')) {
					bufer += ("#" + String.fromCharCode(255) + inText.charAt(i - 1)).repeat(Math.floor(n / 255));
					bufer += "#" + String.fromCharCode(n % 255) + inText.charAt(i - 1)
				}
				else {
					bufer += inText.charAt(i - 1).repeat(n);
				}
				n = 1;
			}
			//добавляем закодированное сообщение в файл code.txt
			fs.writeFileSync('code.txt', bufer);
			outText = fs.readFileSync('code.txt');
			outText = outText.toString();
			break;


		case 'decode':

			//декодируем наш текст
			let cText = fs.readFileSync('code.txt');
			cText = cText.toString();
			let unbufer;
			unbufer = ""
			for (let j = 0; j < cText.length; j++) {
				if (cText.charAt(j) == "#") {
					unbufer += cText.charAt(j + 2).repeat(cText.charCodeAt(j + 1));
					j += 2;
				}
				else {
					unbufer += cText.charAt(j);
				}
			}
			// добавляем декодированное сообщение в файл decode.txt
			fs.writeFileSync('decode.txt', unbufer);
			uncText = fs.readFileSync('decode.txt');
			uncText = uncText.toString();
			console.log(inText.length / cText.length); // вычисляем коэф сжатия
			break;

		default:
			console.log('Error, invalid action');
			break;
	}
