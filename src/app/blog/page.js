// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const Blog = () => {
//   const router = useRouter();
//   const [data, setData] = useState([1, 2, 3, 4]);
//   return (
//     <div>
//       <h1>Blog Page</h1>
//       <Link href="/">Home</Link>
//       <button>Add Blog</button>

//       <div>
//         <p>Testing id route</p>

//         {data.map((item, index) => {
//           return (
//             <>
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => router.push(`/blog/${item}`)}
//               >
//                 blog {item}
//               </button>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Blog;
