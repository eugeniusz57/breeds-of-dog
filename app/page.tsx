import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
const   getBreeds = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');

  if (!res.ok) {  throw new Error('Unable to fetch') }
  return res.json();
}



export default async function Home() {
  const breeds = await getBreeds();
  const breedsArr = Object.keys(breeds.message)
  
  return (
  <>
    <h1>List breeds of dogs</h1>

    <ul>
        {breedsArr.map((breed: any) => (<li key={breed}>
          <Link href={breed}>{breed }</Link>
        </li>)) }  
    </ul>
  </>

  )
}
