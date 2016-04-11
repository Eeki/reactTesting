import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component; // let --> will be changed
  
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has class comment-box', () => {
    expect(component).to.have.class('comment-box')
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist; // to.exist (or any other to.blaa.blaa) comes from chai-jquery library
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment')
    });

    it ('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});