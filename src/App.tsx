import { useState } from 'react';
import './App.css';

interface Dog {
  imgUrl: string;
  likes: number;
  dislikes: number;
}

function App() {
  const [dogList, setDogList] = useState<Dog[]>([]);
  const handleClick = () => {
    setDogList([
      ...dogList,
      {
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTk2ybkcp3PXrN_SNXG7KA2EYuG99kQIM3Gw&s',
        likes: 0,
        dislikes: 0,
      }
    ])
  }
  return (
    <>
        <button className='add-btn' onClick={handleClick()}></button>
        <div className="dog-list">
          {dogList.map(dog) => {
            return(
              <div className='dog'>
            <img src={dog.imgUrl} alt='dog' />
            <div className='dog__votes'>
              <span>{dog.likes} ❤️</span>
              <span>{dog.dislikes} 🤢</span>
              <div className='dog__actions'></div>
              <button>like</button>
              <button>dislike</button>
            </div>
          </div>
            )
          }}
        </div>
    </>
  );
}

export default App;
