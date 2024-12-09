import React from 'react';
import Blog1 from "../../assets/1.png";
import Blog2 from "../../assets/2.png";
import Blog3 from "../../assets/3.png";
import Blog4 from "../../assets/4.png";
import { Fade, Zoom } from "react-awesome-reveal";

const BlogsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    img: Blog1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    img: Blog2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    img: Blog3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    img: Blog4,
  },
];

const Blogs = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-800 to-black py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center pb-10">
          <Zoom>
            <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
              BLOGS
            </h1>
          </Zoom>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BlogsData.map((item) => (
            <Fade triggerOnce duration={500} key={item.id}>
              <div className="flex flex-col items-center justify-center gap-6 p-6 max-w-[320px] mx-auto shadow-2xl rounded-lg bg-gray-800 hover:bg-gray-700 transform transition-transform duration-500 hover:scale-105">
                <img src={item.img} alt="" className="rounded-md" />
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold line-clamp-2">{item.title}</h1>
                  <p className="line-clamp-3">{item.desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/more-blogs#top"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            More Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
