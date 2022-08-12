import ExperienceItem from './ExperienceItem';
import './Experiences.css';

function Experiences(props) {
  return (
    <div className="experiences">
      <h2>Let's get started!</h2>
      <ExperienceItem 
        title={props.items[0].title}
        companyName={props.items[0].companyName}
        project={props.items[0].project}
        date={props.items[0].date}
        description={props.items[0].description}
      ></ExperienceItem>
      <ExperienceItem
        title={props.items[1].title}
        companyName={props.items[1].companyName}
        project={props.items[1].project}
        date={props.items[1].date}
        description={props.items[1].description}></ExperienceItem>
      <ExperienceItem
        title={props.items[2].title}
        companyName={props.items[2].companyName}
        project={props.items[2].project}
        date={props.items[2].date}
        description={props.items[2].description}></ExperienceItem>
      <ExperienceItem
        title={props.items[3].title}
        companyName={props.items[3].companyName}
        project={props.items[3].project}
        date={props.items[3].date}
        description={props.items[3].description}></ExperienceItem>
    </div>
  );
}

export default Experiences;