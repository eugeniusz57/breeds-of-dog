import { getBreedsByBreed } from "@/serverAPI";
import Image from "next/image";

type Props = {
    params: {
        id: string;
    }
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
 