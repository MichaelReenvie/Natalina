import { useEffect, useRef } from "react";
import throttle from "https://cdn.skypack.dev/lodash@4/throttle";
import Image from "../Image/natal.png";

const Header = () => {
  const headerRef = useRef(null);

  const onScroll = throttle(() => {
    if (window.pageYOffset > 0) {
      headerRef.current.classList.add("is-active");
    } else {
      headerRef.current.classList.remove("is-active");
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <header className="header sticky sticky--top js-header" ref={headerRef}>
      <div className="grids">
        <img src={Image} alt="Feliz Natal" />
      </div>
    </header>
  );
};

export default Header;
