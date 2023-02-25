import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSingleBook } from '../utils/queries'

function BookDetails() {
    const [book, setBook] = useState("")
    const location = useLocation()
    console.log(location.state.id)
    const bookId = location.state.id

    const {loading, error, data }  = useQuery(getSingleBook, {
        variables: {
           id:bookId
        }
    })
     console.log("this is the book data: " + data?.book)
    // 3071639779
  return (
    <div>
        {
            loading ? (<div>Loading...</div>) : (
                error ? <div>{error.message
                    }</div> : <div>
                        <p>Book Name: {data.book.name}</p>
                        <p>Book Genre: {data.book.genre}</p>
                        <p>Book Author: {data.book.authorId.name}</p>
                        <p>Book Author Age: {data.book.authorId.age}</p>
                        <h2>List Of Books Writen By Author</h2>
                        <ul>
                            {
                              
                               data.book.authorId.books.map((item) => ( <div>
                                <li>Book Name:{item.name}</li>
                               <li>Book Genre:{item.genre}</li>

                              </div>
                              ))
                            }
                        </ul>
                    </div>
            )
        }
    </div>
  )
}

export default BookDetails