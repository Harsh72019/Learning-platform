import React from 'react';

const Selectors = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">CSS Selectors</h1>
        
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">What are CSS Selectors?</h2>
        <p className="mb-4">
          CSS selectors are patterns used to select the HTML elements you want to style. They allow you to apply styles to specific elements or groups of elements based on their attributes, classes, IDs, and more.
        </p>
        <h2 className="text-xl font-bold mb-4">Types of CSS Selectors</h2>
        <p className="mb-4">
          There are several types of CSS selectors, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Element selectors</li>
          <li>Class selectors</li>
          <li>ID selectors</li>
          <li>Attribute selectors</li>
          <li>Descendant selectors</li>
          <li>Child selectors</li>
          <li>Adjacent sibling selectors</li>
          <li>General sibling selectors</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">Using CSS Selectors</h2>
        <p className="mb-4">
          To use CSS selectors, you need to add a CSS file to your HTML document and write the styles you want to apply using the selector patterns. Here's an example of how to apply a style to all the paragraph elements in your document using the element selector:
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg mb-4">
          <code>{`p {
  font-size: 16px;
}`}</code>
        </pre>
        <p className="mb-4">
          This will set the font size of all paragraph elements to 16 pixels. You can use other selectors to apply styles to specific elements or groups of elements based on their attributes, classes, IDs, and more.
        </p>
      </main>
    </div>
  );
};

export default Selectors;
