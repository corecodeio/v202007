import React from 'react';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '../../store/model/Store';

enum StoreKeyName {
	authToken = 'authToken',
}

export class AuthToken {
	private store: Store;
	private observable: Observable<string> = new Observable();

	constructor(store: Store) {
		this.store = store;
	}

	async set(token: string) {
		const behavior = new BehaviorSubject<string>(token);
		this.observable = behavior.asObservable();
		await this.store.set(StoreKeyName.authToken, token);
		behavior.next(token);
	}

	async get() {
		return await this.store.get(StoreKeyName.authToken);
	}

	useAuthToken() {
		const [token, setToken] = React.useState<string>('');
		this.observable.subscribe(setToken);
		return token;
	}
}
