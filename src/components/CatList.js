import React from "react";
import useGetAPI from "../Hooks/useGetAPI";
export default function CatList() {
 const { data } = useGetAPI(process.env.REACT_APP_MEDIBANK_WEB_SERVICE);
 const catMapData = {};
 // find list of cats by gender of owners
 data.forEach((personItem) => {
  if (personItem.pets) {
   personItem.pets.forEach((pet) => {
    if (pet.type === "Cat") {
     const ownerGender = personItem.gender;
     const catName = pet.name;
     if (!catMapData[ownerGender]) {
      catMapData[ownerGender] = [];
     }
     catMapData[ownerGender].push(catName);
    }
   });
  }
 });
 // sort data alphabetical
 for (const gender in catMapData) {
  catMapData[gender].sort();
 }
 return (
  <>
   {Object.keys(catMapData).map((gender) => (
    <div key={gender}>
     {/* I use gender as key since it is unique */}
     <h2>{gender}</h2>
     <ul>
      {catMapData[gender].map((catName, i) => (
       <li key={i}>{catName}</li> //It is better to use a unique key for example an id for every catName
      ))}
     </ul>
    </div>
   ))}
  </>
 );
}
