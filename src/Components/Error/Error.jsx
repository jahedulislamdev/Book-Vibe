import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

const Error = () => {
   const Err = useRouteError()
   // console.log(Err)
   return (
      <div className="flex h-dvh justify-center items-center">
         <Helmet>
            <title>Book Vibe | Error</title>
         </Helmet>
         {
            Err.status === 404 ?
               < div >
                  <p className="text-red-600 text-2xl">{Err.status} page not found</p>
               </div> :
               <div>
                  <p className="text-yellow-400 bg-black p-5 rounded text-lg">
                     Opps! an unexpected error has been occurred
                  </p>
               </div>
         }
      </div>
   );
};

export default Error;