import React from "react";

const Books = (props) => {
  return (
    <div>
      <h1>These books are from the Api</h1>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
