import { IDependencies } from '@corecodeio/libraries/di';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export interface IContext extends ExpressContext {
	dependencies: IDependencies;
}
