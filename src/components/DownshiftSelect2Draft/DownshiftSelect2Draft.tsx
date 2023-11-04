import { useCombobox } from "downshift";
import { useRef, useState } from "react";

import "@acab/reset.css";
import cx from "classnames";
import * as styles from "./style.css";

const ChevronDownIcon = () => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
  </svg>
);

export function DownshiftSelect2Draft() {
  type Book = {
    id: string;
    author: string;
    title: string;
  };
  const books: Book[] = [
    { id: "book-1", author: "Harper Lee", title: "To Kill a Mockingbird" },
    { id: "book-2", author: "Lev Tolstoy", title: "War and Peace" },
    { id: "book-3", author: "Fyodor Dostoyevsy", title: "The Idiot" },
    { id: "book-4", author: "Oscar Wilde", title: "A Picture of Dorian Gray" },
    { id: "book-5", author: "George Orwell", title: "1984" },
    { id: "book-6", author: "Jane Austen", title: "Pride and Prejudice" },
    { id: "book-7", author: "Marcus Aurelius", title: "Meditations" },
    {
      id: "book-8",
      author: "Fyodor Dostoevsky",
      title: "The Brothers Karamazov",
    },
    { id: "book-9", author: "Lev Tolstoy", title: "Anna Karenina" },
    {
      id: "book-10",
      author: "Fyodor Dostoevsky",
      title: "Crime and Punishment",
    },
  ];
  function getBooksFilter(inputValue?: string) {
    const lowerCasedInputValue = inputValue?.toLowerCase();

    return function booksFilter(book: Book) {
      return (
        !inputValue ||
        !lowerCasedInputValue ||
        book.title.toLowerCase().includes(lowerCasedInputValue) ||
        book.author.toLowerCase().includes(lowerCasedInputValue)
      );
    };
  }

  // items に create ボタン用のダミーデータが必要そう
  const [items, setItems] = useState(books);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
    inputValue,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      console.log({ inputValue });
      // setItems(books.filter(getBooksFilter(inputValue)));
    },
    items,
    itemToString(item) {
      return item ? item.title : "";
    },
  });

  const placeholder = "ショップ名";
  return (
    <div>
      <div className="">
        <label className="" {...getLabelProps()}>
          Choose your favorite book:
        </label>
        <div className={styles.inputWrapper}>
          <input
            placeholder={placeholder}
            className={styles.input}
            {...getInputProps()}
          />
          <div className={styles.buttonWrapper}>
            <div className={styles.separator}></div>
            <button
              aria-label="toggle menu"
              type="button"
              className={styles.expandButton}
              {...getToggleButtonProps()}
            >
              <ChevronDownIcon />
            </button>
          </div>
        </div>
      </div>
      <ul className={styles.content} {...getMenuProps()}>
        <>
          {isOpen &&
            items.map((item, index) => (
              <li
                className={cx(
                  highlightedIndex === index && styles.selectedItem,
                  selectedItem === item && styles.selectedItem,
                  styles.item
                )}
                key={item.id}
                {...getItemProps({ item, index })}
              >
                <span>{item.title}</span>
              </li>
            ))}
          {isOpen && (
            <li
              className={cx(
                highlightedIndex === items.length && styles.selectedItem,
                styles.item
              )}
            >
              <button>Create "{inputValue}"</button>
            </li>
          )}
        </>
      </ul>
    </div>
  );
}
