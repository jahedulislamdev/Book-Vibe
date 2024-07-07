
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Book = ({ BooksData }) => {
   const { id, bookName, author, image, tags, category, rating } = BooksData;
   return (
      <Link to={`/books/${id}`}>
         <div className="text-center border border-gray-400 rounded p-7 md:max-h-[390px]">
            <div className="flex justify-center rounded">
               <img src={image} className="h-[200px] w-[150px] object-cover py-3 drop-shadow-2xl" />
            </div>
            <div className='flex-row md:flex justify-around my-3'>
               {
                  tags.map((tag, idx) => <p key={idx} className='text-lime-500  mb-1 py-1 px-2 rounded text-xs'>#{tag}</p>)
               }
            </div>
            <p className='font-semibold my-2'>{bookName}</p>
            <p className='font-light'>By : {author}</p>
            <div className='flex justify-between mt-4'>
               <p>{category}</p>
               <p className='flex'>{rating}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ms-1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
               </p>
            </div>
         </div>
      </Link>
   );
};
Book.propTypes = {
   BooksData: PropTypes.object
}
export default Book;