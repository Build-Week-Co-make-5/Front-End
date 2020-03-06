import React, { useState, createContext } from 'react';

export const IssueContext = createContext();

export const IssueProvider = (props) => {
  const [issues, setIssues] = useState([
    {
      issue_name: "Pothole",
      issue_location: "8207 High Ridge Circle",
      category: "roads",
      priority: "high",
      imgurl: "https://unsplash.com/photos/-OOiAy2lBZc",
      issue_details:
        "I asked Domino's to come fix it but they said they're not doing that in our state yet.",
    },
    {
      issue_name: "Debris on sidewalk",
      issue_location: "7723 South Lane",
      category: "debris",
      priority: "low",
      imgurl: "https://unsplash.com/photos/ATsfZ_x8lZg",
      issue_details: "There are sticks and leaves all over the sidewalk here",
    },
    {
      issue_name: "Overgrown Grass",
      issue_location: "Park on Myrtle Ave",
      category: "landscape",
      priority: "low",
      imgurl: "https://unsplash.com/photos/h2i3A8SuKkw",
      issue_details:
        "The grass at this playground is getting out of control! Please schedule it to be mowed ASAP",
    },
    {
      issue_name: "Broken curb",
      issue_location: "2977 N 1412 E",
      category: "roads",
      priority: "medium",
      imgurl: "",
      issue_details: "The curb is falling apart here and needs fixed again",
    },
    {
      issue_name: "Needs pruning",
      issue_location: "Needs pruning",
      category: "landscape",
      priority: "low",
      imgurl: "",
      issue_details:
        "People walk in the road because the shrubs and trees are so overgrown here",
    },
    {
      issue_name: "Trash",
      issue_location: "8277 Newbridge Ave",
      category: "debris",
      priority: "low",
      imgurl: "",
      issue_details: "Needs cleaned up",
    },
  ]);
  
  // Will render all of the child components
  return(
    <IssueContext.Provider value={[issues, setIssues]}>
      {props.children}
    </IssueContext.Provider>
  );
};
