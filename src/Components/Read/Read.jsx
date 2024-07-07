import { useEffect, useState } from 'react';
import { getReadBooks } from '../Utility/utility';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
      <div className="mt-6 px-2 md:px-0 w-full h-[300px] mx-auto">
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
      </div>
   );
};

export default Read;
