import { sign, verify } from 'jsonwebtoken';

interface Isign {
	payload: any;
	options: {
		subject: string;
		expiresIn: string;
	};
}

export default class jwtAuth {
	verify(token: string) {
		return verify(token, process.env.SC_KEY);
	}
	sign({ payload, options }: Isign) {
		return sign(payload, `${process.env.SC_KEY}`, options);
	}
}
