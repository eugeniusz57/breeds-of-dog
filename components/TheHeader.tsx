import Link from "next/link"
import NavHeder from "./NavHeder"

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Search Breed', href:'/search'},
]


const TheHeader = () => {
  return (
    <header>
      <NavHeder navLinks={navItems}/>
    </header>
  )
}

export default TheHeader
