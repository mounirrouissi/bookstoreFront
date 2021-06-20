import { InitKeycloak } from './keycloak/init-keycloak';

describe('InitKeycloak', () => {
  it('should create an instance', () => {
    expect(new InitKeycloak()).toBeTruthy();
  });
});
