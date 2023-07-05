"use client"

import { getBreedsByBreed } from "@/app/[id]/page"
import { FormEventHandler, useState } from "react"

type Props = {
  onSearch: (value:any[]) => void
}

const BreadSearch = ({ onSearch}:Props) => {
    const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const breed = await getBreedsByBreed(search);
onSearch(breed)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="search bread" value={search} onChange={(event) => setSearch(event.target.value)} />
    </form>
  )
}

export default BreadSearch