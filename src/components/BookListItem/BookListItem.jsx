import css from './BookListItem.module.css';

export const BookListItem = ({ book }) => {
  return <p className={css.itemTExt}>{book.name}</p>;
};
