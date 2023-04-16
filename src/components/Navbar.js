import React, { useState } from 'react';
import courses from './Data';

function NavigationBar() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setSelectedTopic(course.topics[0]);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const CourseList = () => {
    return (
      <ul className="flex flex-row justify-center space-x-4 bg-gray-200 py-2 fixed top-0 left-0 w-full z-10">
        {courses.map((course) => (
          <li
            key={course.id}
            onClick={() => handleCourseSelect(course)}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              selectedCourse === course
                ? 'bg-blue-600 text-white'
                : 'bg-gray-400 text-gray-700 hover:bg-blue-300 hover:transition-all    '
            }`}
          >
            {course.name}
          </li>
        ))}
      </ul>
    );
  };

  const Sidebar = () => {
    if (!selectedCourse) {
      return null;
    }
  
    return (
      <div className="fixed top-16 left-0 h-full  w-48    overflow-y-auto">
        <ul className="mt-4">
          {selectedCourse.topics.map((topic) => (
            <li
              key={topic}
              onClick={() => handleTopicSelect(topic)}
              className={`px-4 py-2 cursor-pointer ${
                selectedTopic === topic ? 'bg-gray-300' : 'hover:bg-gray-200'
              }`}
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

  const Content = () => {
    if (!selectedTopic) {
      return null;
    }

    let topicIndex = selectedCourse.topics.indexOf(selectedTopic);

    return (
      <div className="ml-48 mt-12 p-4">
        {/* <h1 className="text-2xl font-bold mb-4">{selectedCourse.name}</h1>
        <h2 className="text-lg font-medium mb-2">{selectedTopic}</h2> */}
        {selectedCourse.content[topicIndex]}
      </div>
    );
  };

  return (
    <div>
      <CourseList />
      <Sidebar />
      <Content />
    </div>
  );
}

export default NavigationBar;
