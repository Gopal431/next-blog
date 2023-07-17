"use client";
import addData from "@/firebase/firestore/addData";
import React, { useState } from "react";

const Page = () => {
  const [blog, setBlog] = useState({
    title: "",
    publishDate: "",
    summary: "",
    img: "",
  });
  const sumbitHandler = (e) => {
    e.preventDefault();
    addDataToFirebase();
  };

  const addDataToFirebase = async () => {
    const { result, error } = await addData("users", "user-id", data);
    console.log("testing here ");
    if (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <div className="h-auto mb-5 lg:mx-64 mx-4 mt-10 flex flex-col">
        <h className="font-bold text-4xl ">Create an Post</h>
        <h className="mt-6 lg:text-xl text-sm">Create a new blog</h>
        <div className="flex flex-col mt-5">
          <label className="font-bold text-lg">Title</label>
          <input
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            className="border border-gray-400 mt-4 h-10 bg-[#FAFAFA] focus:outline-none px-4"
            type="text"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="font-bold text-lg">Publication Date</label>
          <input
            onChange={(e) => setBlog({ ...blog, publishDate: e.target.value })}
            className="border border-gray-400 mt-4 h-10 bg-[#FAFAFA] focus:outline-none px-4"
            type="date"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="font-bold text-lg">image Url</label>
          <input
            onChange={(e) => setBlog({ ...blog, img: e.target.value })}
            className="border border-gray-400 mt-4 h-10 bg-[#FAFAFA] focus:outline-none px-4"
            type="text"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="font-bold text-lg">Summary</label>
          <textarea
            onChange={(e) => setBlog({ ...blog, summary: e.target.value })}
            className="border border-gray-400 mt-4 h-10 bg-[#FAFAFA] focus:outline-none px-4"
            rows="4"
            cols="50"
          />
        </div>
        <div className="mt-5 space-x-10">
          <button
            onClick={(e) => sumbitHandler(e)}
            className="w-28 h-12 bg-[#8EACD0] font-semibold"
          >
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
