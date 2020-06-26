export default function translateNumbers(number: number) {
	const baseNumbers = {
		base: [
			'zero',
			'one',
			'two',
			'three',
			'four',
			'five',
			'six',
			'seven',
			'eight',
			'nine',
			'ten',
			'eleven',
			'twelve',
			'thirteen',
			'fourteen',
			'fifteen',
			'sixteen',
			'seventeen',
			'eighteen',
			'nineteen',
		],
		dozens: [
			'zero',
			'ten',
			'twenty',
			'thirty',
			'forty',
			'fifty',
			'sixty',
			'seventy',
			'eighty',
			'ninety',
		],
	};

	let word: String = '';

	if (number === 0) {
		return word = 'zero';
	}

	if (number < 20) {
		if (number > 0) {
			return baseNumbers.base[number];
		} else {
			return (word = '');
		}
	}

	if (number < 100) {
		const ten = baseNumbers.dozens[Math.trunc(number / 10)];
		const unit = number % 10;

		word = unit ? ten + '-' + baseNumbers.base[unit] : ten;
	} else if (number < 1000) {
		const hundreds = baseNumbers.base[Math.trunc(number / 100)] + ' hundred';
		const restDozen = number % 100;
		const dozens = translateNumbers(restDozen);

		word = dozens ? hundreds + ' ' + dozens : hundreds;
	} else if (number < 1000000) {
		const thousands = translateNumbers(Math.trunc(number / 1000)) + ' thousand';
		const restHundreds = number % 1000;
		const hundreds = translateNumbers(restHundreds);

		word = hundreds ? thousands + ' ' + hundreds : thousands;
	} else if (number < 1000000000) {
		const millions =
			translateNumbers(Math.trunc(number / 1000000)) + ' million';
		const restThousands = number % 1000000;
		const thousands = translateNumbers(restThousands);

		word = thousands ? millions + ' ' + thousands : millions;
	} else if (number < 1000000000000) {
		const billions =
			translateNumbers(Math.trunc(number / 1000000000)) + ' billion';
		const restMillions = number % 1000000000;
		const millions = translateNumbers(restMillions);

		word = millions ? billions + ' ' + millions : billions;
	}

	return word;
}
