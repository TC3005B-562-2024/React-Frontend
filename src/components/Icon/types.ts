export interface IIconNoColorNoSize {
    /**
     * The name of the icon to display
     */
    iconName: string
    /**
     * Whether the icon will be filled or not
     */
    filled?: boolean
}

export interface IIcon {
    /**
     * The name of the icon to display
     */
    iconName: string
    /**
     * The color of the icon
     */
    color?: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'gray' | 'orange'
    /**
     * Whether the icon will be filled or not
     */
    filled?: boolean
    /**
     * The size of the icon
     */
    size?: 'banner' | 'section-title' | 'title' | 'text' | 'detail'
}
