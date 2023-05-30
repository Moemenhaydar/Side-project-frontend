import React from "react";
import "../products/productvisitor.css";
const ProductVisitor = () => {


   // Array of card data
   const cardsData = [
    {
      id: 1,
      imageUrl: "https://unsplash.it/500/500/",
      title: "Diligord",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },
    {
      id: 2,
      imageUrl: "https://unsplash.it/511/511/",
      title: "Rocogged",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },
    {
      id: 3,
      imageUrl: "https://unsplash.it/500/500/",
      title: "Diligord",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },
    {
      id: 4,
      imageUrl: "https://unsplash.it/511/511/",
      title: "Rocogged",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },
    // Add more card data objects as needed
  ];

  // Function to handle hover effect
  const toggleHover = (event) => {
    event.currentTarget.classList.toggle('hover');
  };

  return (
    <div className="wrapper">
      <h1 className="product-h1">Parallax Flipping Cards</h1>
      <div className="cols">
        {cardsData.map((card) => (
          <div className="col" key={card.id} onTouchStart={toggleHover}>
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${card.imageUrl})` }}>
                <div className="inner">
                  <p className="product-p">{card.title}</p>
                  <span className="product-span">Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p className="product-p">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductVisitor;
