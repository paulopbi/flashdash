import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <section className="w-full mx-auto max-w-[900px] px-4">{children}</section>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
