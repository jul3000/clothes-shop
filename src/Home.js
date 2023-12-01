import { useState } from 'react';
import Clothes from './Clothes';
import Buttons from './Buttons';
import data from './data';

function Home() {
const [clothes, setClothes] = useState(data);

const chosenClothes =(searchTerm) => {
  const newClothes = data.filter(element => element.searchTerm === searchTerm);
  setClothes(newClothes);
}

return (<div>
  <div className='cont'>
    <h2 className='back'>Free standard shipping</h2>
  </div>
  <Buttons filteredClothes= {chosenClothes}/>
  <Clothes myClothes={clothes}/>
  </div>
)
}

export default Home;

