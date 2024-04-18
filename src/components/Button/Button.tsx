import { IButton } from "./types";
import './Button.css';
import { Icon } from "../Icon";
import classNames from "classnames";

/**
 * A default Button component using Google's Icons.
 */
const Button: React.FC<IButton> = ({ onClick: task, text, size, color, icon, hasShadow, isDisabled }) => {

  const mainClasses = classNames({
    'aci-button--blue': !isDisabled && color === 'blue',
    'aci-button--red': !isDisabled && color === 'red',
    'aci-button--green': !isDisabled && color === 'green',
    'aci-button--yellow': !isDisabled && color === 'yellow',
    'aci-button--orange': !isDisabled && color === 'orange',
    'bg-gray-400 border-gray-400': isDisabled,
    'shadow-md': hasShadow,
    'aci-button': true,
    // Size
    'text-banner': size === 'banner',
    'text-section-title': size === 'section-title',
    'text-title': size === 'title',
    'text-text': size === 'text',
    'text-detail': size === 'detail',
  });

  return (
    <>
      <button className={mainClasses} onClick={task} disabled={isDisabled}>
        {text &&<span>{text}</span>}
        {icon &&
          <Icon
            iconName={icon.iconName}  
            filled={icon.filled}
            size={size}
          />
        }
      </button>
    </>
  );
};

Button.defaultProps = {
  color: 'orange',
  size: 'text',
};

export default Button;
