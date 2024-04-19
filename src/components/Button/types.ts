import { IIconNoColorNoSize } from "../Icon/types";

export interface IButton {
    /**
     * The function to execute when the button is clicked
     */
    onClick: () => void;
    /**
     * The text prop of the button.
     */
    text?: string;
    /**
     * The size of the button.
     */
    size?: 'banner'| 'section-title' | 'title' | 'text' | 'detail';
    /**
     * The color of the button
     */
    color?: 'red' | 'green' | 'blue' | 'yellow' | 'gray' | 'orange';
    /**
     * Icon of the button
     */
    icon?: IIconNoColorNoSize;
    /**
     * If the button has drop shadow
     */
    shadow?: boolean;
}
