import React from 'react';

const Intro = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">HTML Introduction</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">What is HTML?</h2>
        <p className="mb-4">
          HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. With HTML, you can create structured documents with headings, paragraphs, lists, links, and more.
        </p>
        <h2 className="text-xl font-bold mb-4">Why learn HTML?</h2>
        <p className="mb-4">
          HTML is a fundamental skill for anyone who wants to create web pages or web applications. Even if you plan on using a visual website builder, understanding HTML will give you more control over your website and allow you to troubleshoot issues more effectively.
        </p>
        <h2 className="text-xl font-bold mb-4">Getting started with HTML</h2>
        <p className="mb-4">
          To get started with HTML, all you need is a text editor and a web browser. You can create an HTML document using a basic text editor like Notepad (Windows) or TextEdit (Mac), and then open it in a web browser to see how it looks. There are also many free text editors available specifically for coding, such as Visual Studio Code, Sublime Text, and Atom.
        </p>
      </main>
    </div>
  );
};

export default Intro;
