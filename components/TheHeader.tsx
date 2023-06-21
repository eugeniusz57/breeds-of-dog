import Link from "next/link"


const TheHeader = () => {
  return (
    <header>
      <Link href={'/'}>Home</Link>
      <Link href={'/search'}>Search Breeds</Link>
    </header>
  )
}

export default TheHeader
