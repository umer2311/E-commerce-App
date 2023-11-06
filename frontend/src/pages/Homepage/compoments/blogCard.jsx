import React from 'react';
import pic from "../../assets/images/catLoading.png"

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
      <img src={pic} alt={blog.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-gray-600">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;