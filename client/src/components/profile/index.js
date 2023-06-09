import React, { useEffect, useState } from "react";
import ProfileHeader from "./profileHeader";
import ProfilePosts from "./profilePosts";
import getComments from "../../services/comments/getComments";

import "./profile.css";

const Profile = () => {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = getComments();
        console.log(data);
        data.then((res) => {
          console.log(res);
          setCommentData(res);
        }); // Replace '/api/comments' with the actual endpoint to fetch comment data from the backend
        // Set the fetched comment data to the state variable
      } catch (error) {
        console.log(error);
      }
    };
    // Fetch the profile data from an API or other data source
    // Set the fetched data to the state using setProfileData
    // Example: setProfileData(response.data);
    fetchData();
  }, []);

  return (
    <>
      <ProfileHeader />
      <table>
        <tbody>
          {commentData.map((comment, index) => {
            return (
              <tr className="row" key={index}>
                <td className="data">{comment.username}</td>
                <td className="data">{comment.commentText}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ProfilePosts />
    </>
  );
};

export default Profile;
//how to use mobx or redux to organize the code and separate the page logic
