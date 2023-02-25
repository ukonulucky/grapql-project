import { gql, useQuery} from '@apollo/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { queryBooks } from '../utils/queries'
import BookForm from './BookForm'



function Book() {
  const navigate = useNavigate()

    const {error, loading , data} = useQuery(queryBooks)
    console.log(error, loading, data)
    return <div>
     {
       loading ? (
        <div>Loading...</div>
       ) : (
        error ? (
          <div>{error.message}</div>
        ):(
         <ul>
          {
             data.books.map((book) => (<li style={{
              cursor:"pointer"
             }} key={book.id} onClick={() => {
               navigate("/bookDetails", {state:{id: book.id} })
             }}>
              {book.name}
            </li>))
          }
         </ul>
        )
       )
      
     }
    <div>
      <BookForm />
    </div>
    </div>
}

export default Book