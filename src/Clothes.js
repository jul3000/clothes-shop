function Clothes ({myClothes}) {

    return (
      <div className="products">
        {myClothes.map(element =>{
          const {id, name, searchTerm, price, image} =element;
  
          return (<div key={id} className="product-card">
            <img src={image} width="400px" height="500px" alt="clothes"/>
            <div className="product-info">
              <p>{id}</p>
              <p>{name}</p>
              <p>Description of {searchTerm}...</p>
              <p>Price: {price} euro</p>
            </div>
          </div>
  
          )
  
  
        })}
      </div>
    )
  }
  
  export default Clothes;