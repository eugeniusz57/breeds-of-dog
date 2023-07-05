"use client"
import BreadSearch from "@/components/BreadSearch";
import { useState } from "react";


type Props = {}

const SearchBreed = (props: Props) => {
  const [bread, setBread] = useState<any>([])
 
   const breedsImg = bread.message
    console.log(breedsImg);
  return (
    <> <div ><BreadSearch onSearch={setBread} /></div>
      { breedsImg && <img className="breed__img" src={breedsImg} alt={`Breed name ${bread}`} /> }
</>
     )
}

export default SearchBreed;