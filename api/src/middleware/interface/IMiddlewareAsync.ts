export interface IMiddlewareAsync<Input> {
    isValid: (input: Input) => Promise<boolean>;
}