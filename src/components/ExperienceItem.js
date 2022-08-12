import './ExperienceItem.css';
import ExperienceDate from './ExperienceDate';

function ExperienceItem(props) {
  
  return (
    <div className="experience-item">
      <ExperienceDate date={props.date}/>
      <div className="experience-item_title">
        <h2>{props.title}</h2>
        <div className="experience-item_company-name">{props.companyName}</div>
        <div className="experience-item_project"><p>{props.project}</p></div>
        <div className="experience-item_description"><p>{props.description}</p></div>
      </div>
    </div>
  )
}

export default ExperienceItem;
