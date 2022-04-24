import { Context, VMContext } from 'near-sdk-as';
import { getString } from '../index';


const setCurrentAccount = (): void => {
  VMContext.setCurrent_account_id('alice');
};

  describe('', () => { 
  beforeEach(() => {
    setCurrentAccount;    
  });
    
  it('returns the input string', () => { 
    expect(getString("hello world")).toBe("hello world", "should have returned the input string");
  });      
});