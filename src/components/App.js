import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
         const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=10");
       
        const firstNames = response.data.results.map((user) => user.name.first);
        setItems(firstNames);

        
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    }, []);

    return <Users isLoading={isLoading} items={items} />;
};

export default App;
