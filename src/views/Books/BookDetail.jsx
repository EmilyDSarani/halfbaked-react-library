import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  // Done
  const [book, setBook] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book...</h3>

  return (
    <>
      <Book book={book} showDetail />
      <p>
        <Link to="/teams" className="App-link">
          Back to Teams
        </Link>
      </p>
    </>
  )
}

export default BookDetail
