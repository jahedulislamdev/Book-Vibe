import { useLoaderData, Link } from "react-router-dom";
import { getReadBooks } from "../Utility/utility";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
   const BooksData = useLoaderData();
   const [readBooks, setReadBooks] = useState([]);
   useEffect(() => {
      const getsavedBooks = getReadBooks();
      if (BooksData) {
         const findBook = BooksData.filter(book => getsavedBooks.includes(book.id));
         setReadBooks(findBook);
      }
   }, [])
   const handletabs = () => {
      alert("clicked")
   }
   // const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = FindBookId;
   return (
      <div className="mt-4 px-2 md:px-0">
         <p className="text-center rounded-lg text-3xl bg-purple-200 mb-6 p-2">Listed Books</p>
         <Tabs>
            <TabList className="">
               <Tab onClick={handletabs}>Read Books</Tab>
               <Tab>WishList Books</Tab>
            </TabList>

            <TabPanel>
               <h2>Any content 5</h2>
            </TabPanel>
            <TabPanel>
               <h2>Any content 6</h2>
            </TabPanel>
         </Tabs>
         {
            readBooks.map(book =>
               <div key={book.id}>
                  <div className="grid grid-cols-3 mb-8 gap-5 mt-8">
                     <div className="flex justify-center col-span-1 bg-purple-100"><img src={book.image} className="w-[50px]" /></div>
                     <div className="col-span-2">
                        <p className="font-semibold text-2xl">{book.bookName}</p>
                        <p className=""> <span>By :</span> {book.author}</p>
                        <div className="md:flex mt-3">
                           <p> <span className="font-semibold me-3">Tag : </span>
                              {
                                 book.tags.map((tag, idx) => <span key={idx} className="me-6 text-lime-600"> #{tag}</span>)
                              }
                           </p>
                           <div className="flex mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                              </svg>
                              <p>Year of Loaction {book.yearOfPublishing}</p>
                           </div>
                        </div>
                        <div className="flex text-gray-500 mt-1">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                           </svg>
                           <p >Publisher : {book.publisher}</p>
                        </div>
                        <div className="md:flex mt-2 text-sm">
                           <p className="me-12 text-purple-600 bg-purple-200 py-1 px-2 rounded">Caragory {book.category}</p>
                           <p className="me-12 text-yellow-500 bg-yellow-100 py-1 px-2 rounded">Rating {book.rating}</p>
                           <Link to={`/book/${book.id}`}><button className="bg-lime-200 px-2 py-1 rounded">View Details</button></Link>
                        </div>
                     </div>
                  </div>
               </div>)
         }

      </div>
   );
};

export default ListedBooks;