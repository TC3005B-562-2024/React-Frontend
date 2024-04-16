export interface ITypography {
    /**
     * The type (size) of the typography from largest to smallest:
     * - banner
     * - section title
     * - title
     * - text
     */
    type: 'banner' | 'section title' | 'title' | 'text'
    /**
     * The color of the text
     */
    color: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'gray' | 'orange'
    /**
     * Whether the text should be bold or not
     */
    bold?: boolean
    /**
     * The text to display
     */
    text: string

}
