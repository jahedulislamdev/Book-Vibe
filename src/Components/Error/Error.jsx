import { Link, useRouteError } from "react-router-dom";

const Error = () => {
   const Err = useRouteError()
   // console.log(Err)
   return (
      <div className="flex h-dvh justify-center items-center">
         {
            Err.status === 404 ?
               < div >
                  <p className="text-red-600 text-2xl">{Err.status} | page not found</p>
               </div> :
               <div>
                  <p className="text-red-500 bg-black p-5 rounded text-lg">
                     Opps! an unexpected error has been occurred
                     <p className="text-purple-300 text-center"> Can&apos;t Load Resources <Link to={'/'} className="bg-gray-200 text-black px-1 ms-2 rounded">Back</Link></p>
                  </p>

               </div>
         }
      </div>
   );
};

export default Error;