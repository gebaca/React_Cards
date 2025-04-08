export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function getBreeds(): Promise<Record<string, string[]>> {
  const url = 'https://dog.ceo/api/breeds/list/all';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.message;
  } catch (error: any) {
    console.error(error.message);
    return {};
  }
}

export async function getRandomBreed(): Promise<string> {
  const breeds = await getBreeds();
  const keys = Object.keys(breeds);
  const randomIndex = getRandomInt(0, keys.length - 1);
  return keys[randomIndex];
}

export interface Dog {
  id: number;
  image: string;
  like: number;
  dislike: number;
  breed?: string;
}

export async function getRandomDogImage(
  breed: string = ''
): Promise<Dog | undefined> {
  const url =
    breed === ''
      ? 'https://dog.ceo/api/breeds/image/random'
      : `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return {
      id: Date.now() + Math.random(),
      image: json.message,
      like: getRandomInt(0, 1),
      dislike: getRandomInt(0, 2),
      breed,
    };
  } catch (error: any) {
    console.error(error.message);
  }
}
