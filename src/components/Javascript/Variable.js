import React from 'react';

const Variable = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">JavaScript Variables</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">What are variables in JavaScript?</h2>
        <p className="mb-4">
          Variables are containers for storing data values in JavaScript. A variable is declared with the <code>var</code>, <code>let</code>, or <code>const</code> keyword, followed by a variable name. The value of the variable can be assigned using the assignment operator (<code>=</code>).
        </p>
        <h2 className="text-xl font-bold mb-4">Declaring variables in JavaScript</h2>
        <p className="mb-4">
          In JavaScript, variables can be declared using the <code>var</code>, <code>let</code>, or <code>const</code> keyword. The <code>var</code> keyword was traditionally used to declare variables, but <code>let</code> and <code>const</code> were introduced in ES6 and are now the preferred way to declare variables.
        </p>
        <p className="mb-4">
          <code>var</code> is function-scoped, meaning that a variable declared with <code>var</code> is only accessible within the function in which it is declared, or globally if declared outside a function. <code>let</code> and <code>const</code> are block-scoped, meaning that a variable declared with <code>let</code> or <code>const</code> is only accessible within the block in which it is declared.
        </p>
        <h2 className="text-xl font-bold mb-4">Assigning values to variables</h2>
        <p className="mb-4">
          In JavaScript, values can be assigned to variables using the assignment operator (<code>=</code>). For example:
        </p>
        <pre className="bg-gray-400 text-white p-3 rounded-lg mb-4 w-full overflow-auto">
          <code>var x = 10; // declares a variable x and assigns the value 10</code>
        </pre>
        <p className="mb-4">
          You can also assign the value of one variable to another variable, like this:
        </p>
        <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code>var x = 10;<br/>var y = x; // assigns the value of x to y</code>
        </pre>
        <h2 className="text-xl font-bold mb-4">Naming variables in JavaScript</h2>
        <p className="mb-4">
          Variable names in JavaScript can contain letters, digits, underscores, and dollar signs. They must begin with a letter, underscore, or dollar sign. Variable names are case-sensitive.
        </p>
      </main>
    </div>
  );
};

export default Variable;
