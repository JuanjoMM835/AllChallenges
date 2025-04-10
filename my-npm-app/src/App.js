// App.js
import React, { useState } from 'react';
import './App.css';
import Stack from './Stack';

function App() {
  const [bookStack] = useState(new Stack());
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ // variables de estado para el nuevo libro con su respectiva estrucutura 
    name: '',
    isbn: '',
    author: '',
    editorial: ''
  });

  // se inicializa el mock data , tambien hago un arreglo de objetos para los libros iniciales 
  React.useEffect(() => {
    const initialBooks = [
      { name: 'Aventura', isbn: '123', author: 'PepitoJr', editorial: 'Scribner' },
      { name: 'Sin nombre', isbn: '321', author: 'el saiyajin ', editorial: 'J. B. Lippincott & Co.' },
      { name: 'Estos challenges estan dificiles ', isbn: '456', author: 'Juan Jose ', editorial: 'Secker & Warburg' },
      { name: 'Ojala el parcial no este tan complejo  ', isbn: '2244', author: 'Goku  ', editorial: 'Secker & Warburg' }
    ];
    
    initialBooks.forEach(book => bookStack.push(book)); // recorro el arreglo con un foreach y en el stack pongo un nuevo libro  
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
    <div className="app">
      <h1>Pila de Libros </h1>
      
      <div className="container">
        <div className="form-section">
          <h2>Add a New Book</h2>
          <form onSubmit={handleAddBook}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newBook.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>ISBN:</label>
              <input
                type="text"
                name="isbn"
                value={newBook.isbn}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Author:</label>
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
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
          
          <button onClick={handleRemoveBook} className="remove-btn">
            Remove Top Book
          </button>
        </div>
        
        <div className="stack-section">
          <h2>Book Stack ({bookStack.size()} books)</h2>
          <div className="stack-container">
            {books.length > 0 ? (
              books.map((book, index) => (
                <div key={`${book.isbn}-${index}`} className="book-card">
                  <h3>{book.name}</h3>
                  <p><strong>ISBN:</strong> {book.isbn}</p>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Editorial:</strong> {book.editorial}</p>
                  {index === 0 && <div className="top-label">TOP</div>}
                </div>
              ))
            ) : (
              <p>El stack esta vacio </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Lo hice todo en el main porque lo estaba haciendo en un archivo books.js para manejar mejor el orden pero jaja no me estaba funcionando 
// asi que por eso lo hice todo junto 
