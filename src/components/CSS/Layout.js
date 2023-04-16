import React from 'react';

const Layout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">CSS Layout</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          CSS (Cascading Style Sheets) is used to style and layout web pages. With CSS, you can control the visual appearance of HTML elements, including their size, position, color, and more. In this section, we will cover some of the key concepts of CSS layout.
        </p>
        <h2 className="text-xl font-bold mb-4">Box Model</h2>
        <p className="mb-4">
          The CSS Box Model is the foundation of CSS layout. It describes the rectangular boxes that surround every HTML element, and includes properties like width, height, padding, border, and margin. Understanding the Box Model is essential for creating responsive and flexible layouts.
        </p>
        <h2 className="text-xl font-bold mb-4">Positioning</h2>
        <p className="mb-4">
          CSS provides several ways to position elements on a web page. The most common positioning options are static, relative, absolute, and fixed. Each of these options has its own advantages and drawbacks, depending on the layout requirements.
        </p>
        <h2 className="text-xl font-bold mb-4">Flexbox</h2>
        <p className="mb-4">
          Flexbox is a CSS layout mode that provides a more efficient way to arrange elements on a web page. With Flexbox, you can easily create flexible and responsive layouts that adapt to different screen sizes and devices.
        </p>
        <h2 className="text-xl font-bold mb-4">Grid</h2>
        <p className="mb-4">
          CSS Grid is another CSS layout mode that allows you to create complex and dynamic layouts. With Grid, you can define rows and columns and place elements in specific grid cells, creating sophisticated designs that were difficult to achieve with previous CSS layout methods.
        </p>
      </main>
    </div>
  );
};

export default Layout;
