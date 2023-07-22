export const auth$ = {
  subscribe: jest.fn(() => ({
    unsubscribe: jest.fn(),
  })),
};

export const isTokenValid = jest.fn();
