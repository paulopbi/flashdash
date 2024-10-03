import Proptypes from "prop-types";

const Button = ({ children, links }) => {
  return (
    <button className="py-2 px-4 rounded-[4px] uppercase font-bold hover:bg-accent_secondary bg-accent text-black_100">
      <a href={links} target="_blank">
        {children}
      </a>
    </button>
  );
};

Button.propTypes = {
  children: Proptypes.string,
  links: Proptypes.string,
};

export default Button;
