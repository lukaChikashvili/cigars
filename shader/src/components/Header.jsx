import { Menu } from 'lucide-react'
import React, { useContext } from 'react'
import { MeshContext } from '../context/MeshContext'

const Header = () => {
  const { setShowModal, showModal} = useContext(MeshContext);
  return (
    <div className='header'>
       <h1>Cigar</h1>

        <Menu className='menu' size={30} onClick={() => setShowModal(!showModal)} />
    </div>
  )
}

export default Header
