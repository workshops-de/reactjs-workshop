import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from "react-router-dom"
import { BookDetails } from '../containers/BookDetails';

describe("A BookDetails component", function() {
  it('fetches a book on mount', () => {
    const fetchBook = jasmine.createSpy('fetchBook');
    const wrapper = shallow(<BookDetails match={{ params: { isbn: 1 } }} fetchBook={fetchBook} />);
    const component = wrapper.instance();

    component.componentDidMount();

    expect(fetchBook).toHaveBeenCalledWith(1);
  });

  it('fetches a book on mount (tested with mount)', () => {
    const fetchBook = jasmine.createSpy('fetchBook');
    mount(
      <Router>
        <BookDetails match={{ params: { isbn: 1 } }} fetchBook={fetchBook} />
      </Router>
    );

    expect(fetchBook).toHaveBeenCalledWith(1);
  });
});
