const palindromes = require('./palindromes');

describe('palindromes()', () => {
  it('correctly identifies one-word palindromes', () => {
    expects(palindromes('madam')).toEqual(['madam']);
  });
});

