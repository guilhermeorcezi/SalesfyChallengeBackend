export default function toWords(number: number) {
	const thousands = Math.trunc(number / 1000);
	const hundreds = Math.trunc((number / 100) % 10);
	const dozens = Math.trunc((number % 100) / 10);
	const unity = (number % 100) % 10;

	let word: String = '';

	if (number === 0) {
		return 'zero';
	}

	switch (thousands) {
		case 1:
			word += 'One ';
			break;
		case 2:
			word += 'Two ';
			break;
		case 3:
			word += 'Three ';
			break;
		case 4:
			word += 'Four ';
			break;
		case 5:
			word += 'Five ';
			break;
		case 6:
			word += 'Six ';
			break;
		case 7:
			word += 'Seven ';
			break;
		case 8:
			word += 'Eight';
			break;
		case 9:
			word += 'Nine ';
			break;
	}

	if (thousands >= 1) {
		word += 'Thousand ';
	}

	switch (hundreds) {
		case 1:
			if (dozens === 0 && unity === 0) {
				word += 'a hundred ';
			} else {
				word += 'a hundred ';
			}
			break;
		case 2:
			word += 'two hundred ';
			break;
		case 3:
			word += 'three hundred ';
			break;
		case 4:
			word += 'four hundred ';
			break;
		case 5:
			word += 'five hundred';
			break;
		case 6:
			word += 'six hundred ';
			break;
		case 7:
			word += 'seven hundred ';
			break;
		case 8:
			word += 'eight hundred ';
			break;
		case 9:
			word += 'nine hundred ';
			break;
	}

	if (hundreds !== 0 && dozens !== 0) {
		word += 'and ';
	}

	switch (dozens) {
		case 1:
			switch (unity) {
				case 1:
					word += 'eleven';
					break;
				case 2:
					word += 'twelve';
					break;
				case 3:
					word += 'thirteen';
					break;
				case 4:
					word += 'fourteen';
					break;
				case 5:
					word += 'fifteen';
					break;
				case 6:
					word += 'sixten';
					break;
				case 7:
					word += 'seventeen';
					break;
				case 8:
					word += 'eighteen';
					break;
				case 9:
					word += 'nineteen';
					break;
			}
			break;
		case 2:
			word += 'twenty ';
			break;
		case 3:
			word += 'thirty ';
			break;
		case 4:
			word += 'forty ';
			break;
		case 5:
			word += 'fifty ';
			break;
		case 6:
			word += 'sixty ';
			break;
		case 7:
			word += 'seventy ';
			break;
		case 8:
			word += 'eighty ';
			break;
		case 9:
			word += 'ninety ';
			break;
	}

	if (dozens !== 1) {
		switch (unity) {
			case 1:
				word += 'one';
				break;
			case 2:
				word += 'two';
				break;
			case 3:
				word += 'three';
				break;
			case 4:
				word += 'four';
				break;
			case 5:
				word += 'five';
				break;
			case 6:
				word += 'six';
				break;
			case 7:
				word += 'seven';
				break;
			case 8:
				word += 'eight';
				break;
			case 9:
				word += 'nine';
				break;
		}
	}

	return word;
}
