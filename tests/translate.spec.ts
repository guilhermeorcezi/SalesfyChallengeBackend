import app from '../src/app';
import 'mocha';
import chai from 'chai';

import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('Validations ', () => {
	it('Must allow the translation of an integer', (done) => {
		chai
			.request(app)
			.get('/?translate=1')
			.end((err, res) => {
				chai.expect(res.status).to.eql(200);
				chai.expect(res.body).not.to.be.empty;
				chai.expect(res.body).to.be.an('object');
				done();
			});
	});

	it('Must not allow the translation of a decimal number', (done) => {
		chai
			.request(app)
			.get('/?translate=1.5')
			.end((err, res) => {
				chai.expect(res.status).to.eql(400);
				done();
			});
	});

	it('Must not allow the translation of a string', (done) => {
		chai
			.request(app)
			.get('/?translate=test')
			.end((err, res) => {
				chai.expect(res.status).to.eql(400);
				done();
			});
	});
});

describe('Minimum and maximum number validation', () => {
	it('Does not allow to translate a number less than one', () => {
		chai
			.request(app)
			.get('/?translate=-1')
			.then((res: any) => {
				chai.expect(res.status).to.eql(400);
			});
	}).timeout(8000);

	it('Does not allow translating more than 999999999999', (done) => {
		chai
			.request(app)
			.get('/?translate=1000000000000')
			.end((err, res) => {
				chai.expect(res.status).to.eql(400);
				done();
			});
	});
});

describe('Testing numbers translation', () => {
	it('Translate the number 10', () => {
		chai
			.request(app)
			.get('/?translate=10')
			.then((res: any) => {
				chai.expect(res.status).to.eql(200);
				chai.expect(res.body).not.to.be.empty;
				chai.expect(res.body).to.be.an('object');
			});
	}).timeout(8000);

	it('Translate the number 100', () => {
		chai
			.request(app)
			.get('/?translate=100')
			.then((res: any) => {
				chai.expect(res.status).to.eql(200);
				chai.expect(res.body).not.to.be.empty;
				chai.expect(res.body).to.be.an('object');
			});
	}).timeout(8000);

	it('Translate the number 127', () => {
		chai
			.request(app)
			.get('/?translate=127')
			.then((res: any) => {
				chai.expect(res.status).to.eql(200);
				chai.expect(res.body).not.to.be.empty;
				chai.expect(res.body).to.be.an('object');
			});
	}).timeout(8000);

	it('Translate the number 2523', () => {
		chai
			.request(app)
			.get('/?translate=2523')
			.then((res: any) => {
				chai.expect(res.status).to.eql(200);
				chai.expect(res.body).not.to.be.empty;
				chai.expect(res.body).to.be.an('object');
			});
	}).timeout(8000);

	it('Translate the number 156655', () => {
		chai
			.request(app)
			.get('/?translate=156655')
			.then((res: any) => {
				chai.expect(res.status).to.eql(200);
				chai.expect(res.body).not.to.be.empty;
				chai.expect(res.body).to.be.an('object');
			});
	}).timeout(8000);

	it('Translate the number 87654321', () => {
		chai
			.request(app)
			.get('/?translate=12345678')
			.then((res: any) => {
				chai.expect(res.status).to.eql(200);
				chai.expect(res.body).not.to.be.empty;
				chai.expect(res.body).to.be.an('object');
			});
	}).timeout(8000);

	it('Translate the number 999999999999', () => {
		chai
			.request(app)
			.get('/?translate=999999999999')
			.then((res: any) => {
				chai.expect(res.status).to.eql(200);
				chai.expect(res.body).not.to.be.empty;
				chai.expect(res.body).to.be.an('object');
			});
	}).timeout(8000);
});
