import { Request, Response } from 'express';
import translateNumbers from '../functions/convertNumber';

class TranslateController {
	async show(req: Request, res: Response) {
		const { translate } = req.query;

		if (isNaN(Number(translate))) {
			return res.status(400).json({ error: 'You must type a number only' });
		}
		if (!Number.isInteger(Number(translate))) {
			return res
				.status(400)
				.json({ error: 'Number must be a positive intenger.' });
		}

		if (Number(translate) < 0 || Number(translate) > 999999999999) {
			return res
				.status(400)
				.json({ error: 'Number must be between 0 and 999999999999' });
		}

		const translated = translateNumbers(Number(translate));
		return res.status(200).json( {translated: translated, number: translate} );
	}
}

export default new TranslateController();
