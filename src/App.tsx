import { useState } from 'react';
import './App.css';
import {
  Dog,
  getRandomBreed,
  getRandomDogImage,
} from './services/add-perrico.service';

function App() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  const addDog = async () => {
    const breed = await getRandomBreed();
    const newDog = await getRandomDogImage(breed);
    if (newDog) {
      setDogs((prev) => [...prev, newDog]);
    }
  };

  const handleLike = (id: number) => {
    setDogs((prev) =>
      prev.map((dog) => (dog.id === id ? { ...dog, like: dog.like + 1 } : dog))
    );
  };

  const handleDislike = (id: number) => {
    setDogs((prev) =>
      prev.map((dog) =>
        dog.id === id ? { ...dog, dislike: dog.dislike + 1 } : dog
      )
    );
  };

  return (
    <>
      <div className='button-bar'>
        <button onClick={addDog}>Perrear 🐶</button>
      </div>

      <div className='dog-container'>
        {dogs.map((dog) => (
          <div className='card' key={dog.id}>
            <img
              src={dog.image}
              alt={`Perro de raza ${dog.breed || 'desconocida'}`}
            />
            <div className='card-content'>
              <p style={{ fontWeight: 'bold' }}>{dog.breed}</p>
              <div className='reaction-buttons'>
                <div className='reaction'>
                  <button
                    className='like-button'
                    onClick={() => handleLike(dog.id)}
                  >
                    👍
                  </button>
                  <span>{dog.like}</span>
                </div>
                <div className='reaction'>
                  <button
                    className='dislike-button'
                    onClick={() => handleDislike(dog.id)}
                  >
                    👎
                  </button>
                  <span>{dog.dislike}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
