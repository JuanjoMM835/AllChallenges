import React, { useState } from 'react';
import styles from './App.module.scss'; // Importa el módulo SASS
import Stack from './Stack';

function App() {
  const [bookStack] = useState(new Stack());
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    name: '',
    isbn: '',
    author: '',
    editorial: ''
  });

  React.useEffect(() => {
    const initialBooks = [
      { name: 'Aventura', isbn: '123', author: 'PepitoJr', editorial: 'Scribner' },
      { name: 'Sin nombre', isbn: '321', author: 'el saiyajin ', editorial: 'J. B. Lippincott & Co.' },
      { name: 'Estos challenges estan dificiles ', isbn: '456', author: 'Juan Jose ', editorial: 'Secker & Warburg' },
      { name: 'Ojala el parcial no este tan complejo  ', isbn: '2244', author: 'Goku  ', editorial: 'Secker & Warburg' }
    ];

    initialBooks.forEach(book => bookStack.push(book));
    setBooks(bookStack.getAllBooks());
  }, [bookStack]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prev => ({ ...prev, [name]: value }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.name && newBook.isbn && newBook.author && newBook.editorial) {
      bookStack.push(newBook);
      setBooks(bookStack.getAllBooks());
      setNewBook({
        name: '',
        isbn: '',
        author: '',
        editorial: ''
      });
    }
  };

  const handleRemoveBook = () => {
    const removedBook = bookStack.pop();
    if (removedBook) {
      alert(`Removed book: ${removedBook.name}`);
      setBooks(bookStack.getAllBooks());
    } else {
      alert('La stack esta vacia !');
    }
  };

  return (
    <div className={styles.app}>
      <h1>Pila de Libros</h1>

      <div className={styles.container}>
        <div className={styles['form-section']}>
          <h2>Add a New Book</h2>
          <form onSubmit={handleAddBook}>
            <div className={styles['form-group']}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newBook.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles['form-group']}>
              <label>ISBN:</label>
              <input
                type="text"
                name="isbn"
                value={newBook.isbn}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles['form-group']}>
              <label>Author:</label>
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles['form-group']}>
              <label>Editorial:</label>
              <input
                type="text"
                name="editorial"
                value={newBook.editorial}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit">Add Book</button>
          </form>

          <button onClick={handleRemoveBook} className={styles['remove-btn']}>
            Remove Top Book
          </button>
        </div>

        <div className={styles['stack-section']}>
          <h2>Book Stack ({bookStack.size()} books)</h2>
          <div className={styles['stack-container']}>
            {books.length > 0 ? (
              books.map((book, index) => (
                <div key={`${book.isbn}-${index}`} className={styles['book-card']}>
                  <h3>{book.name}</h3>
                  <p><strong>ISBN:</strong> {book.isbn}</p>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Editorial:</strong> {book.editorial}</p>
                  {index === 0 && <div className={styles['top-label']}>TOP</div>}
                </div>
              ))
            ) : (
              <p>El stack esta vacio</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
