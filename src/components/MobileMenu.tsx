"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MobileMenu = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  

  return (
    <div className="hidden">
          <Button onClick={toggleMobileMenu}>
            {
               isMobileMenuOpen ? (<AiOutlineClose size={24} className=""/>) : (<AiOutlineMenu size={24} className=""/>)
            }
          </Button>
        </div>
  )
}

export default MobileMenu