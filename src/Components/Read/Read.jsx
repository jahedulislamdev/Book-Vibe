import { useEffect, useState } from 'react';
import { getReadBooks } from '../Utility/utility';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Helmet } from 'react-helmet-async';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Read = () => {
   const BooksData = useLoaderData();
   const [readBookPages, setReadBookPages] = useState([]);

   useEffect(() => {
      // Ensure getReadBooks is awaited if it's asynchronous
      const fetchReadBooks = async () => {
         const readBooks = await getReadBooks();
         const findReadBooks = BooksData.filter(book => readBooks.includes(book.id));
         setReadBookPages(findReadBooks.map(book => ({ name: book.bookName, pages: book.totalPages })));
      };

      fetchReadBooks();
   }, [BooksData]);

   const getPath = (x, y, width, height) => {
      return `M${x},${y + height}
      C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} 
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} 
      ${x + width}, ${y + height}
      Z`;
   };

   const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
   };

   return (
      <div className="mt-6 px-2 md:px-0  mx-auto">
         {
            readBookPages.length > 0 ?
               <div className='w-full h-[350px]'>
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={readBookPages} margin={{ top: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                           {readBookPages.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                           ))}
                        </Bar>
                     </BarChart>
                  </ResponsiveContainer>
               </div> :
               <div className=" md:text-center">
                  <p className='text-yellow-700'>You haven&apos;t finished a book yet !</p>
                  <p >If you compleate any books and want to show of a bar chart, click on the Read button.</p>
               </div>
         }
         <Helmet>
            <title>Book Vibe | Pages to read</title>
         </Helmet>
      </div>
   );
};

export default Read;
