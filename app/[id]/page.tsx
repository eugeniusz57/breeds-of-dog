import Image from "next/image";

type Props = {
    params: {
        id: string;
    }
}

export const   getBreedsByBreed = async (breedName:string) => {
  const res = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random`);
    if (!res.ok) {  throw new Error('Unable to fetch') }
  return res.json();
}
const Breed = async ({ params: { id} }:Props) => {

 

  const breed = await getBreedsByBreed(id);
  const breedsImg = breed.message
  
  return (
    <>
      <h2>{id.toUpperCase()}</h2>
      {/* <Image src={breedsImg} width={500} height={500} alt={`Breed name ${id}`}/> */}
      <img className="breed__img" src={breedsImg} alt={`Breed name ${id}`} />
    </>

  )
}

export default Breed;
 