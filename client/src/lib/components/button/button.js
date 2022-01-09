import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./button.module.css";

function Button({ children, classes, onClick }) {
  return (
    <button className={classNames(styles.button, classes.button)} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  classes: {},
  onClick: () => {},
};

export default Button;
