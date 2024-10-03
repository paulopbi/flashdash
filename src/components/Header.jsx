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
            <img src={Linkedin} alt="Linkedin logo" width={32} height={32} />
            <img src={Github} alt="Github logo" width={32} height={32} />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
