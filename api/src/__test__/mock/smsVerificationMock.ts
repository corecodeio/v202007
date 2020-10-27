export const smsVerificationMock = {
  send: jest.fn(() => Promise.resolve(true)),
  verify: jest.fn(() => Promise.resolve(true)),
};
