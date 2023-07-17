"use client";
import Link from "next/link";
import React from "react";

const Page = () => {
  // fetch
  return (
    <div className="w-full h-screen bg-yellow-100 p-10">
      <Link href={"/"}>
        <button class="inline-flex m-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Back
        </button>
      </Link>
      <div>
        <div className="flex justify-center shadow-xl">
          <img className="w-full rounded h-96 " src="blog.jpg" alt="blg" />
        </div>
        <h5 class="mb-2 text-3xl my-5 font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et
          Malorum The Extremes of Good and Evil by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem IpsumLorem ipsum dolor sit
          amet. comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et by
          Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H. Rackham
        </p>
      </div>
    </div>
  );
};

export default Page;
