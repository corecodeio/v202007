import { MutationResolvers } from '@corecodeio/libraries/api';
import { IContext } from '../../../server/interface/IContext';

export const registerStore: MutationResolvers<IContext>['registerStore'] = async (
	parent,
	{ input },
	{ dependencies, req }
) => {
	try {
		req.headers.authorization;
	} catch (error) {
		return error;
	}
};
