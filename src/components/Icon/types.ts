export interface IIconNoColorNoSize {
    /**
     * The name of the icon to display
     */
    iconName: string
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
     * The size of the icon
     */
    size?: 'banner' | 'section-title' | 'title' | 'text' | 'detail'
}
