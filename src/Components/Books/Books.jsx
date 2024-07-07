import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";


const Books = () => {
   const bookData = useLoaderData();
   return (
      <div className="my-16 container mx-auto">
         <p className="text-center font-semibold text-4xl mb-8">Books</p>
         <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-between items-center gap-4">
               {
                  bookData.map((book, idx) => <Book key={idx} BooksData={book}></Book>)
               }
            </div>
         </div>
      </div>
   );
};

export default Books;