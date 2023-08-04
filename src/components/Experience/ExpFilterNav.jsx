import { useState } from "react";
import { experienceActivities } from "../../data";
import ExperienceCard from "./ExperienceCard";

const ExpFilterNav = () => {
  const tagList = [
    {
      displayName: "Attractions",
      tag: "attraction",
    },
    {
      displayName: "Family Retreats",
      tag: "family",
    },
    {
      displayName: "Romantic Getaways",
      tag: "couple",
    },
    {
      displayName: "Curated Itineraries",
      tag: "itinerary",
    },
    {
      displayName: "Stay For Good",
      tag: "stay",
    },
  ];

  const [selectedTags, setSelectedTags] = useState([]);

  const checkboxChangeHandler = (e) => {
    const isSelected = e.target.checked;
    const tag = e.target.value;
    setSelectedTags((prev) =>
      isSelected
        ? [...prev, tag]
        : prev.filter((selectedTag) => {
            return selectedTag !== tag;
          })
    );
  };

  const filterActivities = (activities, tags) => {
    if (tags.length === 0) {
      return activities;
    } else {
      return activities.filter((activity) => {
        return activity.tag.some((tag) => tags.includes(tag));
      });
    }
  };

  const filteredActivities = filterActivities(
    experienceActivities,
    selectedTags
  );

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="filter-nav-wrapper">
      <div className="filter-nav-container">
        <div className="filter-left">
          <h4 className="filter-looking-for">I am looking for</h4>
          {tagList.map((tag) => {
            return (
              <div className="filter-nav-select">
                <input
                  type="checkbox"
                  id={tag.tag}
                  name={tag.tag}
                  value={tag.tag}
                  checked={selectedTags.includes(tag.tag)}
                  onChange={checkboxChangeHandler}
                />
                <label htmlFor={tag.tag} className="filter-nav-btn">
                  {tag.displayName}
                </label>
              </div>
            );
          })}
        </div>
        <div className="filter-right">
          <button className="box-btn" onClick={clearFilters}>
            Reset Filters
          </button>
        </div>
      </div>
      <div className="exp-wrapper">
        <div className="exp-cards-container">
          {filteredActivities.map((activity, idx) => {
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
    </div>
  );
};
export default ExpFilterNav;
