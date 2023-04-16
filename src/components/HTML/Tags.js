import React from 'react';

const Tags = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">HTML Tags</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">What are HTML tags?</h2>
        <p className="mb-4">
          HTML tags are used to define the structure and content of a web page. They are surrounded by angle brackets and typically come in pairs, with the opening tag coming first and the closing tag coming second. The content of a tag is placed between the opening and closing tags.
        </p>
        <h2 className="text-xl font-bold mb-4">Common HTML tags</h2>
        <ul className="list-disc pl-4 mb-4">
          <li>&lt;html&gt; - Defines the root of an HTML document</li>
          <li>&lt;head&gt; - Contains metadata about the document</li>
          <li>&lt;title&gt; - Defines the title of the document</li>
          <li>&lt;body&gt; - Contains the visible content of the document</li>
          <li>&lt;h1&gt; to &lt;h6&gt; - Define headings of different sizes</li>
          <li>&lt;p&gt; - Defines a paragraph of text</li>
          <li>&lt;a&gt; - Defines a hyperlink</li>
          <li>&lt;img&gt; - Defines an image</li>
          <li>&lt;ul&gt; and &lt;li&gt; - Define an unordered list</li>
          <li>&lt;ol&gt; and &lt;li&gt; - Define an ordered list</li>
          <li>&lt;div&gt; - Defines a division or section of the document</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">Attributes</h2>
        <p className="mb-4">
          HTML tags can also have attributes, which provide additional information about the element. Attributes are included in the opening tag and are typically made up of a name and a value, separated by an equals sign. For example, the &lt;a&gt; tag can have an attribute called "href" that specifies the URL that the hyperlink should point to.
        </p>
        <h2 className="text-xl font-bold mb-4">Self-closing tags</h2>
        <p className="mb-4">
          Some HTML tags, such as the &lt;img&gt; tag, do not require a closing tag and are instead self-closing. In these cases, the tag is written with a forward slash before the closing angle bracket, like this: &lt;img src="image.jpg" /&gt;.
        </p>
      </main>
    </div>
  );
};

export default Tags;
