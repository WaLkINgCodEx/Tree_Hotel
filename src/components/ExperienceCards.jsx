import { experienceActivities } from "../data";
import ExperienceCard from "./ExperienceCard";

const ExperienceCards = () => {
  return (
    <div className="exp-wrapper">
      <div className="exp-cards-container">
        {experienceActivities.map((activity) => {
          console.log(activity);
          return (
            <ExperienceCard
              title={activity.name}
              desc={activity.desc}
              images={activity.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ExperienceCards;
