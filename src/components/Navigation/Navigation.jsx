import { StyledNavLink, StyledNavList } from './Navigation.styled';
import HoverArrow from '../HoverArrow/HoverArrow';
import { useEffect, useState } from 'react';

function Navigation() {
  const [isHoveredId, setIsHoveredId] = useState(false);

  const handleMouseEnter = index => {
    setIsHoveredId(index);
  };

  const handleMouseLeave = () => {
    setIsHoveredId(null);
  };

  // useEffect(() => {
  //   const element = document.querySelector();

  //   if (element) {
  //     element.addEventListener('mouseenter', handleMouseEnter);
  //     element.addEventListener('mouseleave', handleMouseLeave);

  //     return () => {
  //       element.removeEventListener('mouseenter', handleMouseEnter);
  //       element.removeEventListener('mouseleave', handleMouseLeave);
  //     };
  //   }
  // }, []);

  return (
    <nav>
      <StyledNavList>
        <li>
          <StyledNavLink
            id="main"
            href=""
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            Головна
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            id="about"
            href=""
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            Про проєкт
          </StyledNavLink>
          {isHoveredId && <HoverArrow />}
        </li>
        <li>
          <StyledNavLink
            id="design"
            href=""
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            Дизайн-проєкт
          </StyledNavLink>
          {isHoveredId && <HoverArrow />}
        </li>
        <li>
          <StyledNavLink
            id="amount"
            href=""
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            Зібрані кошти
          </StyledNavLink>
          {isHoveredId && <HoverArrow />}
        </li>
        <li>
          <StyledNavLink
            id="investor"
            href=""
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            Інвестори
          </StyledNavLink>
          {isHoveredId && <HoverArrow />}
        </li>
        <li>
          <StyledNavLink
            id="how"
            href=""
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            Як інвестувати
          </StyledNavLink>
          {isHoveredId && <HoverArrow />}
        </li>
        <li>
          <StyledNavLink
            id="leaders"
            href=""
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            Співзасновники
          </StyledNavLink>
          {isHoveredId && <HoverArrow />}
        </li>
      </StyledNavList>
    </nav>
  );
}

export default Navigation;
