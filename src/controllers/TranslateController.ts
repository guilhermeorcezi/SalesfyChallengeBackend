import { Request, Response } from 'express';
import toWords from '../functions/convertNumber';

class TranslateController {
	async show(req: Request, res: Response) {
		const { translate } = req.query;

		if (Number(translate) < 0 || Number(translate) > 9999) {
			return res
				.status(400)
				.json({ error: 'number must be between 0 and 9999' });
		}

		const translated = toWords(Number(translate));
		return res.json({ resposta: translated });
	}
}

export default new TranslateController();
