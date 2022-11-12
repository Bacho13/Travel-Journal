import React from "react";
import Header from "./componenets/Header";
import Card from "./componenets/Card";
import "./App.css";
import data from "./data"


function App() {

  const cards = data.map((item) => {
      return(
        <Card
        key={item.id}
        {...item}
       />
      );
        
  });


        

  return (
    <>
      <Header />
      {/* <Card
        region="Kahketi"
        map="https://goo.gl/maps/3EsBzGbNuDnfGBzW9"
        city="Signagi"
        aboutIt=" is a region (mkhare) formed in the 1990s in eastern
         Georgia from the historical province of Kakheti and the small,
          mountainous province of Tusheti. Telavi is its capital. The region
           comprises eight administrative districts: Telavi, Gurjaani, Qvareli,
            Sagarejo, Dedoplistsqaro, Signagi, Lagodekhi and Akhmeta. Kakheti is 
            bordered by the Russian Federation with the adjacent subdivisions 
            (Chechnya to the north, and Dagestan to the northeast), the country of 
            Azerbaijan to the southeast, and with the regions of Mtskheta-Mtianeti 
            and Kvemo Kartli to the west. Kakheti has a strong linguistic and cultural
             identity, since its ethnographic subgroup of Kakhetians speak the Kakhetian 
             dialect of Georgian."
        img="kakheti.jpg"
        
      /> */}
      {cards}
      
    </>
  );
}

export default App;
