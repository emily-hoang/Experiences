import Experience from './components/Experiences';

function App() {
  const experiences = [
    {
      id: 'e1',
      title: 'Software Engineer',
      companyName: 'ThoughtWorks',
      project: 'Proactive Comm',
      date: new Date(2020, 7, 14),
      description: "ghfgf"
    },
    { 
      id: 'e2',
      title: 'Software Engineer',
      companyName: 'ThoughtWorks',
      project: 'Proactive Comm',
      date: new Date(2021, 2, 12),
      description: "ghfgf"
    },
    {
      id: 'e3',
      title: 'Software Engineer',
      companyName: 'ThoughtWorks',
      project: 'Proactive Comm',
      date: new Date(2021, 2, 28),
      description: "ghfgf"
    },
    {
      id: 'e4',
      title: 'Software Engineer',
      companyName: 'ThoughtWorks',
      project: 'Proactive Comm',
      date: new Date(2021, 5, 12),
      description: "ghfgf"
    },
  ];

  return (
    <Experience items={experiences}/>
  );
}

export default App;
