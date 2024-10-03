import Logo from "/logo.png";
import Github from "/github.svg";
import Linkedin from "/linkedin.svg";
import Container from "./Container";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black_100">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <img src={Logo} alt="Logo do projeto" width={200} height={40} />
          </div>
          <div className="flex items-center justify-around gap-4">
            <a href="https://www.linkedin.com/in/paulopbi/" target="_blank">
              <img src={Linkedin} alt="Linkedin logo" width={32} height={32} />
            </a>
            <a href="https://github.com/paulopbi" target="_blank">
              <img src={Github} alt="Github logo" width={32} height={32} />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
