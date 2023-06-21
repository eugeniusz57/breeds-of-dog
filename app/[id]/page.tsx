
type Props = {
    params: {
        id: string;
    }
}
const Breed = ({ params: { id} }:Props) => {
  return (
    <h1>
          Breed { id} 
    </h1>
  )
}

export default Breed;
 