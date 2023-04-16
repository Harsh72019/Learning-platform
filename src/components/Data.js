import Layout from './CSS/Layout';
import Selectors from './CSS/Selectors';
import Intro from './HTML/Intro';
import Tags from './HTML/Tags';
import Function from './Javascript/Function';
import Variable from './Javascript/Variable';

const courses = [
    {
      id: 1,
      name: 'HTML',
      topics: ['Introduction', 'Tags'],
      content: [
        <Intro />,
        <Tags />,
      ],
    },
    {
        id: 2,
        name: 'CSS',
        topics: ['Layout', 'Selectors'],
        content: [
          <Layout />,
          <Selectors />,
        ],
      },
      {
        id: 3,
        name: 'Javascript',
        topics: ['Function', 'Variable'],
        content: [
          <Function/>,
          <Variable />,
        ],
      },
  ];

export default courses;