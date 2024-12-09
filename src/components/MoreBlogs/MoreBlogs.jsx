import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.png";
import { Fade, Zoom, Slide, Bounce } from "react-awesome-reveal";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MoreBlogs = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [newBlog, setNewBlog] = useState({ title: '', desc: '', img: null });
  const [blogsData, setBlogsData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const element = document.getElementById('top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleImageUpload = (e) => {
    setNewBlog({ ...newBlog, img: URL.createObjectURL(e.target.files[0]) });
  };

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setBlogsData([...blogsData, { ...newBlog, id: blogsData.length + 1, section: activeSection }]);
    setIsOpen(false);
    setNewBlog({ title: '', desc: '', img: null });
    setCurrentStep(1);
  };

  const handleView = (blog) => {
    setSelectedBlog(blog);
    setIsOpen(true);
  };

  return (
    <section id="top" className="bg-gradient-to-br from-black via-gray-800 to-black min-h-screen text-white">
      <div className="fixed w-full bg-gradient-to-br from-black via-gray-800 to-black shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Zoom>
            <img
              src={logo}
              alt="Logo"
              className="h-12 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => navigate('/')}
            />
          </Zoom>
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
            More Blogs
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32">
        {[1, 2, 3, 4].map((section) => (
          <div key={section} className="py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Section {section}</h2>
            <div className="overflow-x-auto flex space-x-4">
              {blogsData.filter(blog => blog.section === section).map((item) => (
                <Fade triggerOnce duration={500} key={item.id}>
                  <div className="flex-none flex flex-col items-center justify-start gap-4 p-6 w-64 shadow-lg rounded-lg bg-gray-900 hover:bg-gray-800 transform transition-transform duration-500 hover:scale-105 cursor-pointer overflow-hidden">
                    <img src={item.img} alt="" className="rounded-md w-full h-48 object-cover mb-4" />
                    <div className="space-y-2 text-center text-gray-300">
                      <h1 className="text-2xl font-bold line-clamp-2">{item.title}</h1>
                      <p className="line-clamp-3 max-h-24 overflow-hidden text-ellipsis">
                        {item.desc.split('\n').slice(0, 2).join(' ')}
                      </p>
                      <button
                        onClick={() => handleView(item)}
                        className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-2 px-4 rounded-full hover:from-green-500 hover:to-blue-500 transition-all mt-2"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => { setIsOpen(true); setSelectedBlog(null); setCurrentStep(1); setActiveSection(section); }}
                className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-2 px-4 rounded-full hover:from-green-500 hover:to-blue-500 transition-all"
              >
                Create Blog in Section {section}
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-auto">
          <div className="bg-gray-900 p-6 rounded-lg shadow-2xl w-full h-full text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <Slide direction="up" triggerOnce>
              <div className="prose prose-lg prose-invert mx-auto p-6 min-h-screen flex flex-col">
                <img src={selectedBlog.img} alt="Blog" className="w-full h-auto mb-6 rounded" />
                <h2 className="text-4xl font-bold mb-4">{selectedBlog.title}</h2>
                <p className="text-lg whitespace-pre-line flex-grow">{selectedBlog.desc}</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-2 px-4 rounded-full hover:from-green-500 hover:to-blue-500 transition-all mt-4"
                >
                  Close
                </button>
              </div>
            </Slide>
          </div>
        </div>
      )}

      {isOpen && !selectedBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-2xl w-full max-w-md text-white relative overflow-auto max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <Bounce triggerOnce>
              <>
                {currentStep === 1 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={newBlog.title}
                      onChange={handleChange}
                      className="w-full p-2 mb-4 border rounded bg-gray-800 border-gray-700 text-white"
                    />
                    <textarea
                      name="desc"
                      placeholder="Description"
                      value={newBlog.desc}
                      onChange={handleChange}
                      className="w-full p-2 mb-4 border rounded bg-gray-800 border-gray-700 text-white"
                      rows="4"
                    ></textarea>
                    <button
                      onClick={handleNextStep}
                      className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-2 px-4 rounded-full hover:from-green-500 hover:to-blue-500 transition-all"
                    >
                      Next
                    </button>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full p-2 mb-4 border rounded bg-gray-800 border-gray-700 text-white"
                    />
                    {newBlog.img && <img src={newBlog.img} alt="Preview" className="w-full h-auto mb-4 rounded" />}
                    <div className="flex justify-between">
                      <button
                        onClick={handlePreviousStep}
                        className="bg-gray-600 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700 transition-all"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-2 px-4 rounded-full hover:from-green-500 hover:to-blue-500 transition-all"
                      >
                        Submit
                      </button>
                    </div>
                  </>
                )}
              </>
            </Bounce>    
          </div>
        </div>
      )}

      <footer className="bg-gray-800 py-6 mt-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center mb-4">
            <a href="#" className="text-white mx-2 hover:text-gray-400">Home</a>
            <a href="#" className="text-white mx-2 hover:text-gray-400">About</a>
            <a href="#" className="text-white mx-2 hover:text-gray-400">Contact</a>
            <a href="#" className="text-white mx-2 hover:text-gray-400">Privacy Policy</a>
          </div>
          <div className="flex justify-center mb-4">
            <a href="https://www.linkedin.com/company/researchinflyingmotion" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-gray-400">
            <FaFacebook />
            </a>
          </div>
          <p className="text-gray-400">© 2024 RESEARCH IN FLYING MOTION. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default MoreBlogs;
