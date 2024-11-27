import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

 const Header = () => {
  return (
    <Navbar position="static" className='bg-transparent'>
      <NavbarBrand>
        <img src="/img/Logo.png" alt="" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link  href="#" className='text-white font-[400] text-base'>
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" className='text-white font-[400] text-base' >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#" className='text-white font-[400] text-base'>
            Customer
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#" className='text-white font-[400] text-base'>
            Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Button as={Link} className='bg-primary text-white font-[504]' href="#" variant="flat">
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className='text-white font-[500] text-base' href="#" variant="bordered">
            Contact Us    
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;