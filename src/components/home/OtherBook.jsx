import { useState, useEffect } from "react";
import BookCards from "../BookCards";

const OtherBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-api-three-peach.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0, 8));
      });
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Book" />
    </div>
  );
};

export default OtherBook;
