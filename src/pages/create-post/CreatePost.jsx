import React from "react";
import CreatePostNav from "./CreatePostNav";
import CreatePostForm from "./CreatePostForm";
import CreatePostSidebar from "./CreatePostSidebar";

const CreatePost = () => {
  return (
    <div className="min-h-screen bg-[#eef3f1] text-[#111918] font-sans">

      <CreatePostNav />

      {/* Main content — 2 column layout */}
      <div className="max-w-[960px] mx-auto px-5 sm:px-8 py-12 flex flex-col lg:flex-row gap-12">
        <CreatePostForm />
        <CreatePostSidebar />
      </div>
    </div>
  );
};

export default CreatePost;