import { useEffect, useState } from 'react';
import Image from 'next/image'
import Logo from '../images/amerisano-logo.png';
import LogoWhite from '../images/amerisano-logo-white.png';
import CartIcon from '../images/cart-icon.png';
import CartIconWhite from '../images/cart-icon-white.png';
import UserIcon from '../images/user-icon.png';
import MenuCloseIcon from '../images/menu-close.png';
import HamburgerIcon from '../images/menu-hamburger.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
 
  const toggleMenu = () => {
    setOpen(prev => !prev);
  }

  useEffect(() => {
    const scrollFunction = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    }
  }, []);
  return (
    <section className="amerisano-banner">
      <header id="header-mobile" className={`amerisano-header mobile${open ? ' open' : ''}`}>
        <div className={`header-main${open ? ' open' : ''}`}>
          { !open && <Image width={30} height={30} onClick={toggleMenu} className="hamburger" src={HamburgerIcon} alt="hamburger-icon" /> }
          { open && <Image width={30} height={30} onClick={toggleMenu} className="close" src={MenuCloseIcon} alt="hamburger-icon" /> }
          { !open && <Image width={100} height={18} className="logo" src={LogoWhite} alt="amerisano-logo" /> }
          { open && <Image width={100} height={18} className="logo" src={Logo} alt="amerisano-logo" /> }
          <div className="header-buttons">
            <div className="cart-container">
              { !open &&
              <Image width={23} height={20} src={CartIconWhite} alt="amerisano-cart-cion" />
              }
              { open && <Image width={23} height={20} src={CartIcon} alt="amerisano-cart-cion" />}
              
            </div>
            <div className="user-container">
              <Image width={20} height={20} src={UserIcon} alt="amerisano-user-cion" />
            </div>
          </div>
        </div>
        <div className="header-call-number">
          <p>How can we help? <span>(800) 674-2894</span></p>
        </div>
        <div className={`header-navigations${open ? ' open' : ''}`}>
          <ul className="navigations">
            <li><a href="#login">Log in</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#products">How it works</a></li>
            <li><a href="#group">Group buying</a></li>
            <li><a href="tel: (800) 674-2894">(800) 674-2894</a></li>
          </ul>
        </div>
        <div className="header-mobile__overlay" onClick={toggleMenu}>

        </div>
      </header>
      <header id="header-desktop" className={`amerisano-header desktop${sticky ? ' sticky' : ''}`}>
        <div className="logo-container">
          { !sticky && <Image width={100} height={14} src={Logo} alt="amerisano-logo" /> }
          { sticky && <Image width={100} height={14} src={LogoWhite} alt="amerisano-logo" /> }
        </div>
        <ul className="navigations">
          <li><a href="#products">Products</a></li>
          <li><a href="#products">How it works</a></li>
          <li><a href="#group">Group buying</a></li>
          <li><a href="tel: (800) 674-2894">(800) 674-2894</a></li>
        </ul>
        <div className="header-buttons">
          <a href="#home" className="button amerisano-btn light">
            <span className="button-content">
              { !sticky && <Image className="button-img" width={18} height={18} src={CartIcon} alt="amerisano-cart-cion" /> }
              { sticky && <Image className="button-img" width={18} height={18} src={CartIconWhite} alt="amerisano-cart-cion" /> }
            </span>
              Cart
          </a>
          <a href="#home" className="button amerisano-btn">
            <span className="button-content">
              <Image className="button-img" width={18} height={18} src={UserIcon} alt="amerisano-cart-cion" /> 
            </span>
            Log in
          </a>
        </div>
      </header>
    </section>
  )
}