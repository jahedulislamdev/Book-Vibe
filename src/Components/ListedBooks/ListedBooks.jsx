import { useLoaderData, Link } from "react-router-dom";
import { getReadBooks, getWishList } from "../Utility/utility";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
   const BooksData = useLoaderData();
   const [readBooks, setReadBooks] = useState([]);
   const [wishList, setWishList] = useState([]);
   const [displaySortBooks, setDisplaySortBooks] = useState([]);
   const [displaySortWishList, setDisplaySortWishList] = useState([]);

   useEffect(() => {
      if (BooksData) {
         // Load read books data
         const getsavedBooks = getReadBooks();
         const findBook = BooksData.filter(book => getsavedBooks.includes(book.id));
         setReadBooks(findBook);
         setDisplaySortBooks(findBook);

         // Load wishlist data
         const wishListBooks = getWishList();
         const findWishListBook = BooksData.filter(book => wishListBooks.includes(book.id));
         setWishList(findWishListBook);
         setDisplaySortWishList(findWishListBook);
      }
   }, [BooksData]);

   const handleSort = (filterTxt) => {
      if (filterTxt === "Rating") {
         // Sort wishlist books according to ratings
         const sortedWishList = [...wishList].sort((a, b) => b.rating - a.rating);
         setDisplaySortWishList(sortedWishList);

         // Sort read books according to ratings
         const sortedReadBooks = [...readBooks].sort((a, b) => b.rating - a.rating);
         setDisplaySortBooks(sortedReadBooks);
      } else if (filterTxt === "Number of pages") {
         // Sort wishlist books according to number of pages
         const sortedWishList = [...wishList].sort((a, b) => b.totalPages - a.totalPages);
         setDisplaySortWishList(sortedWishList);

         // Sort read books according to number of pages
         const sortedReadBooks = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
         setDisplaySortBooks(sortedReadBooks);
      } else if (filterTxt === "Published Year") {
         // Sort wishlist books according to publishing year
         const sortedWishList = [...wishList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
         setDisplaySortWishList(sortedWishList);

         // Sort read books according to publishing year
         const sortedReadBooks = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
         setDisplaySortBooks(sortedReadBooks);
      }
   }
   return (
      <div className="mt-4 px-2 md:px-0">
         {/* Filtering books with descending order */}
         <div className="flex justify-end mb-5">
            <div className="dropdown dropdown-bottom dropdown-end">
               <div tabIndex={0} role="button" className="bg-yellow-700 text-xs md:text-base text-white p-2 md:py-1 md:px-2 rounded flex">Sort By
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5 md:m-1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                  </svg>
               </div>
               <ul tabIndex={0} className="dropdown-content rounded-lg bg-yellow-200 z-[1] w-48 p-2 shadow">
                  <button onClick={() => handleSort("Rating")} className="hover:bg-gray-50 transition-colors p-1 rounded">Rating</button>
                  <button onClick={() => handleSort("Number of pages")} className="hover:bg-gray-50 transition-colors p-1 rounded">Number of pages</button>
                  <button onClick={() => handleSort("Published Year")} className="hover:bg-gray-50 transition-colors p-1 rounded">Published Year</button>
               </ul>
            </div>
         </div>
         <Tabs>
            <TabList className="bg-lime-100 p-1 px-3 rounded">
               <Tab>Read Books</Tab>
               <Tab>WishList Books</Tab>
            </TabList>
            <TabPanel>
               {displaySortBooks.map(book =>
                  <div key={book.id}>
                     <div className="md:grid grid-cols-3 mb-8 gap-5 mt-8">
                        <div className="flex justify-center rounded-lg items-center col-span-1 bg-purple-100"><img src={book.image} className="w-1/3 h-[150px] p-3" /></div>
                        <div className="col-span-2 bg-lime-100 p-3 rounded">
                           <p className="font-semibold text-2xl">{book.bookName}</p>
                           <p><span>By :</span> {book.author}</p>
                           <div className="md:flex mt-3">
                              <p><span className="font-semibold me-3">Tag : </span>
                                 {book.tags.map((tag, idx) => <span key={idx} className="me-6 text-lime-600"> #{tag}</span>)}
                              </p>
                              <div className="flex mt-1">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                 </svg>
                                 <p>Year of Publishing: {book.yearOfPublishing}</p>
                              </div>
                           </div>
                           <div className="flex text-gray-500 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                              </svg>
                              <p>Publisher: {book.publisher}</p>
                           </div>
                           <div className="flex mt-2 text-xs md:text-sm">
                              <p className="me-2 md:me-12 text-purple-600 bg-purple-200 py-1 px-2 rounded">Category: {book.category}</p>
                              <p className="me-2 md:me-12 text-yellow-500 bg-yellow-100 py-1 px-2 rounded">Rating: {book.rating}</p>
                              <Link to={`/books/${book.id}`}><button className="bg-lime-200 px-2 py-1 rounded">View Details</button></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </TabPanel>
            <TabPanel>
               {displaySortWishList.map(book =>
                  <div key={book.id}>
                     <div className="md:grid grid-cols-3 mb-8 gap-5 mt-8">
                        <div className="flex justify-center items-center col-span-1 bg-purple-100 rounded-lg"><img src={book.image} className="w-1/3 h-[150px] p-3" /></div>
                        <div className="col-span-2 bg-lime-100 p-3 rounded">
                           <p className="font-semibold text-2xl">{book.bookName}</p>
                           <p><span>By :</span> {book.author}</p>
                           <div className="md:flex mt-3">
                              <p><span className="font-semibold me-3">Tag : </span>
                                 {book.tags.map((tag, idx) => <span key={idx} className="me-6 text-lime-600"> #{tag}</span>)}
                              </p>
                              <div className="flex mt-1">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                 </svg>
                                 <p>Year of Publishing: {book.yearOfPublishing}</p>
                              </div>
                           </div>
                           <div className="flex text-gray-500 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                              </svg>
                              <p>Publisher: {book.publisher}</p>
                           </div>
                           <div className="md:flex mt-2 text-sm">
                              <p className="me-12 text-purple-600 bg-purple-200 py-1 px-2 rounded">Category: {book.category}</p>
                              <p className="me-12 text-yellow-500 bg-yellow-100 py-1 px-2 rounded">Rating: {book.rating}</p>
                              <Link to={`/books/${book.id}`}><button className="bg-lime-200 px-2 py-1 rounded">View Details</button></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </TabPanel>
         </Tabs>
         <Helmet>
            <title>Book Vibe | Listed Books</title>
         </Helmet>
      </div>
   );
};

export default ListedBooks;
