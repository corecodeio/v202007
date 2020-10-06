export interface IMiddleware<Input> {
  isValid: (input: Input) => boolean;
}
