export const iconNames = [
    'logo', 'alarm', 'arrow_back', 'arrow_forward', 'bar_chart',
    'calendar_today', 'call_end', 'cancel', 'check', 'check_circle',
    'check_circle_fill', 'clear_night', 'close', 'done', 'exercise',
    'instant_mix', 'keyboard_return', 'logout',
    'menu', 'mitre', 'move_down', 'phone_in_talk', 'radio_button_unchecked', 'search',
    'sentiment_dissatisfied', 'social_leaderboard',
    'support_agent', 'visibility', 'visibility_off', 'warning', 'expand_less', 'expand_more'
] as const;

export interface IIconNoColorNoSize {
    /**
     * The name of the icon to display
     */
    iconName: typeof iconNames[number];
}

export interface IIcon {
    /**
     * The name of the icon to display
     */
    iconName: typeof iconNames[number];
    /**
     * The color of the icon
     */
    color?: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'gray' | 'orange'
    /**
     * The class name to apply to the icon
     */
    className?: string;
}
