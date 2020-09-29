import prisma from '@corecodeio/database';
import { VerifyPhoneNumberCodeInput } from '@corecodeio/libraries/api';
import { formatPhoneNumber } from '@corecodeio/libraries/transform';
import { IMiddlewareAsync } from '../interface/IMiddlewareAsync';

export class PhoneNumberExistMiddleware implements IMiddlewareAsync<VerifyPhoneNumberCodeInput> {
	async isValid(input) {
		const number = formatPhoneNumber(input.phoneNumber);

		const phoneNumbers = await prisma.phoneNumber.findMany({
			where: {
				number,
			},
			select: {
				verifiedAt: true,
			},
		});

		const isPhoneNumberVerified = phoneNumbers.filter((phoneNumber) => phoneNumber.verifiedAt !== null);

		return isPhoneNumberVerified.length === 0;
	}
}
