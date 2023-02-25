import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { addBook, queryAuthors, queryBooks } from "../utils/queries";

function BookForm() {
  const [book, setBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const { loading, error, data } = useQuery(queryAuthors);

  const [createBookFunc, {data:bookData, error:bookError, loading:bookLoading}] = useMutation(addBook)
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("this is the new book", book)
    createBookFunc({
        variables:{
            name: book.name,
            genre: book.genre,
            authorId: book.authorId
        },
        refetchQueries:[{query: queryBooks}]
    })
    console.log("this is the book data",bookData)
  }

  return (
    <center>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name=""
              id="name"
              required
              placeholder="Enter book name"
              onChange={(e) => {
                setBook({
                    ...book, name:e.target.value
                })
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              id="genre"
              placeholder="enter book genre"
              required
              onChange={(e) => {
              setBook({
                ...book, genre:e.target.value
              })
              }}
            />
          </div>
          <div>
            <select name="" required id="" onChange={(e) => {
                setBook({
                    ...book, authorId: e.target.value
                })
            }}>
              <option>choose Author</option>
              {data ? (
                data.authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))
              ) : (
                <div>Loading Authors</div>
              )}
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </center>
  );
}

export default BookForm;
