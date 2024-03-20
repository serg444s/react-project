import { BookListItem } from '../BookListItem/BookListItem';
import css from './BookList.module.css';

export const BookList = ({ books }) => {
  return (
    <>
      <h1 className={css.bookTitle}>Books</h1>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} className={css.bookItem}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
