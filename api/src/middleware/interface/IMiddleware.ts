export interface IMiddleware<Input> {
  isValid: (input: Input) => boolean;
  isValidAsync: (input: Input) => Promise<boolean>;
}
