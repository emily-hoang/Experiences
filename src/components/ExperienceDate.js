import './ExperienceDate.css';

function ExperienceDate(props) {
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className="experience-date">
        <div className="experience-date_day">{day}</div>
        <div className="experience-date_month">{month}</div>
        <div className="experience-date_year">{year}</div>
      </div>
  );
}

export default ExperienceDate;