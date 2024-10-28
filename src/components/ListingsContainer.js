import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import Search from "./Search";

function ListingsContainer() {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => {
        const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
      })
  }

  const filteredItems = items.filter((item) => 
    item.description.toLowerCase().includes(search.toLowerCase())
  );  
  

  return (
    <main>
      <Search setSearch={setSearch} />
      <ul className="cards">
        {filteredItems.map((item) => (
          <ListingCard 
          key={item.id}
          id={item.id} 
          description={item.description} 
          image={item.image}
          location={item.location}
          deleteButton={handleDelete}
          />
        ))
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
