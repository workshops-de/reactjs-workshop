import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from "react-router-dom"
import BookListItem from '../components/BookListItem';

const book = {
  title: "Design Patterns",
  subtitle: "Elements of Reusable Object-Oriented Software",
  isbn: "978-0-20163-361-0",
  abstract: "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.",
  numPages: 395,
  author: "Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides",
  publisher: {
    name: "Addison-Wesley",
    url: "http://www.addison-wesley.de/"
  },
  id: "978-0-20163-361-0"
}

describe("A BookListItem component", function() {
  it('renders a book item correctly', () => {
    const tree = ReactTestRenderer.create(
      <Router>
        <BookListItem data={book} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
