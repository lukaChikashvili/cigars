import { Menu, X } from 'lucide-react'
import React, { useContext } from 'react'
import { MeshContext } from '../context/MeshContext'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { setShowModal, showModalText,  showModal, setShowModalText, setChangeIcon, changeIcon} = useContext(MeshContext);
  
  let navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
    setShowModalText(!showModalText);
    setChangeIcon(true);

    


  }

  const hideModal = () => {
    setChangeIcon(false);
    setShowModal(false);
    setShowModalText(true);
  }
  return (
    <div className='header'>
       <h1 className='title' onClick={() => navigate('/')}>Cigar</h1>

        {changeIcon ? <X className='menu' onClick={hideModal}/> : <Menu className='menu' size={30} onClick={openModal} />}
    </div>
  )
}

export default Header
