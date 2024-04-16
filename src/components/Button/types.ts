import { IIconNoColor } from "../Icon/types"
import { ITypographyNoColor } from "../Typography/types"

export interface IButton {
    /**
     * The function to execute when the button is clicked
     */
    onClick: () => void
    /**
     * The typography props of the button
     */
    typo?: ITypographyNoColor
    /**
     * The color of the button
     */
    color?: 'red' | 'green' | 'blue' | 'yellow' | 'gray' | 'orange'
    /**
     * Icon of the button
     */
    icon?: IIconNoColor
    /**
     * If the button has drop shadow
     */
    shadow?: boolean
}
