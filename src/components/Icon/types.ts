export enum IconNames {
    Logo = 'logo',
    Alarm = 'alarm',
    ArrowBack = 'arrow_back',
    ArrowForward = 'arrow_forward',
    BarChart = 'bar_chart',
    CalendarToday = 'calendar_today',
    CallEnd = 'call_end',
    Cancel = 'cancel',
    Check = 'check',
    CheckCircle = 'check_circle',
    CheckCircleFill = 'check_circle_fill',
    ClearNight = 'clear_night',
    Close = 'close',
    Done = 'done',
    Exercise = 'exercise',
    InstantMix = 'instant_mix',
    KeyboardReturn = 'keyboard_return',
    Logout = 'logout',
    Menu = 'menu',
    Mitre = 'mitre',
    MoveDown = 'move_down',
    PhoneInTalk = 'phone_in_talk',
    RadioButtonUnchecked = 'radio_button_unchecked',
    Search = 'search',
    SentimentDissatisfied = 'sentiment_dissatisfied',
    SocialLeaderboard = 'social_leaderboard',
    SupportAgent = 'support_agent',
    Visibility = 'visibility',
    VisibilityOff = 'visibility_off',
    Warning = 'warning',
    ExpandLess = 'expand_less',
    ExpandMore = 'expand_more'
}

export interface IIconNoColorNoSize {
    /**
     * The name of the icon to display
     */
    iconName: IconNames;
}

export interface IIcon {
    /**
     * The name of the icon to display
     */
    iconName: IconNames;
    /**
     * The color of the icon
     */
    color?: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'yellowA' | 'gray' | 'orange'
    /**
     * The class name to apply to the icon
     */
    className?: string;
}
