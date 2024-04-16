import { IIcon } from '../Icon/types'

export interface IButton {
    /**
     * The text of the button
     */
    text?: string
    /**
     * The color of the button
     */
    color?: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'gray' | 'orange'
    /**
     * Icon of the button
     */
    icon?: IIcon
}
