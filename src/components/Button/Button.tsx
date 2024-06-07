import { IButton } from "./types";
import './Button.css';
import { Icon } from "../Icon";
import classNames from "classnames";

/**
 * A default Button component using Google's Icons.
 */
const Button: React.FC<IButton> = ({ onClick: task, type = 'button', text, size = 'text', color = 'orange', icon, hasShadow, isDisabled }) => {

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

  const iconClasses = classNames({
    'flex items-center justify-center': true,
    // Size
    'w-banner': size === 'banner',
    'w-section-title': size === 'section-title',
    'w-title': size === 'title',
    'w-text': size === 'text',
    'w-detail': size === 'detail',
  });

  return (
    <>
      <button data-testid="aci-button" className={mainClasses} onClick={task} disabled={isDisabled} type={type} role='button'>
        {text && <span>{text}</span>}
        {icon &&
          <div className={iconClasses}>
            <Icon
              iconName={icon.iconName}
            />
          </div>
        }
      </button>
    </>
  );
};

export default Button;
