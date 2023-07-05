export const   getBreedsByBreed = async (breedName:string) => {
  const res = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random`);
    if (!res.ok) {  throw new Error('Unable to fetch') }
  return res.json();
}