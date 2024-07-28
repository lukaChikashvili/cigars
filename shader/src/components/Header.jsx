import { Menu } from 'lucide-react'
import React, { useContext } from 'react'
import { MeshContext } from '../context/MeshContext'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { setShowModal, showModalText,  showModal, setShowModalText} = useContext(MeshContext);
  
  let navigate = useNavigate();

  const openModal = () => {
    setShowModal(!showModal);
    setShowModalText(!showModalText);

  }
  return (
    <div className='header'>
       <h1 className='title' onClick={() => navigate('/')}>Cigar</h1>

        <Menu className='menu' size={30} onClick={openModal} />
    </div>
  )
}

export default Header
