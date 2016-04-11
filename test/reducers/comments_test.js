import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handle action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceOf(Array); //Both are the same test
    expect(commentReducer(undefined, {})).to.eql([]); //Both are the same test. This test is maybe slightly better because it will only accepts empty array.
  });

  it('handle action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'test comment 123'};
    expect(commentReducer([], action)).to.eql(['test comment 123']);
  });
});