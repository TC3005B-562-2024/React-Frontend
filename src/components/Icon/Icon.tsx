import { IIcon } from "./types";
import classNames from "classnames";

import {
    Alarm,
    AmazonConnectIcon,
    ArrowBackIos,
    ArrowForwardIos,
    BarChart,
    CalendarToday,
    CallEnd,
    Cancel,
    Check,
    CheckCircle,
    CheckCircleFill,
    ClearNight,
    Close,
    Done,
    InstantMix,
    KeyboardReturn,
    Logout,
    Menu,
    Mitre,
    MoveDown,
    PhoneInTalk,
    RadioButtonUnchecked,
    SearchFill,
    SentimentDissatisfied,
    SocialLeaderboard,
    SupportAgent,
    Visibility,
    VisibilityOff,
    Warning,
    ExpandLess,
    ExpandMore,
    Exercise
} from "../../assets";


const Icon: React.FC<IIcon> = ({ iconName, color, className }) => {

    const classes = classNames('aspect-square w-full', className);

    const newColor = classNames({
        'black': color === 'black',
        'white': color === 'white',
        '#428ADE': color === 'blue',
        '#CC3232': color === 'red',
        '#99C140': color === 'green',
        '#E7B416': color === 'yellow',
        '#FFC300': color === 'yellowA',  
        '#9CA3AF': color === 'gray',
        '#E99306': color === 'orange',
    });


    switch (iconName) {
        case 'alarm':
            return <Alarm className={classes} fill={newColor} data-testid='alarm' />;
        case 'logo':
            return <AmazonConnectIcon className={classes} fill={newColor} data-testid='logo' />;
        case 'arrow_back':
            return <ArrowBackIos className={classes} fill={newColor} data-testid='arrow_back' />;
        case 'arrow_forward':
            return <ArrowForwardIos className={classes} fill={newColor} data-testid='arrow_forward' />;
        case 'bar_chart':
            return <BarChart className={classes} fill={newColor} data-testid='bar_chart' />;
        case 'calendar_today':
            return <CalendarToday className={classes} fill={newColor} data-testid='calendar_today' />;
        case 'call_end':
            return <CallEnd className={classes} fill={newColor} data-testid='call_end' />;
        case 'cancel':
            return <Cancel className={classes} fill={newColor} data-testid='cancel' />;
        case 'check':
            return <Check className={classes} fill={newColor} data-testid='check' />;
        case 'check_circle':
            return <CheckCircle className={classes} fill={newColor} data-testid='check_circle' />;
        case 'check_circle_fill':
            return <CheckCircleFill className={classes} fill={newColor} data-testid='check_circle_fill' />;
        case 'clear_night':
            return <ClearNight className={classes} fill={newColor} data-testid='clear_night' />;
        case 'close':
            return <Close className={classes} fill={newColor} data-testid='close' />;
        case 'done':
            return <Done className={classes} fill={newColor} data-testid='done' />;
        case 'instant_mix':
            return <InstantMix className={classes} fill={newColor} data-testid='instant_mix' />;
        case 'keyboard_return':
            return <KeyboardReturn className={classes} fill={newColor} data-testid='keyboard_return' />;
        case 'logout':
            return <Logout className={classes} fill={newColor} data-testid='logout' />;
        case 'menu':
            return <Menu className={classes} fill={newColor} data-testid='menu' />;
        case 'mitre':
            return <Mitre className={classes} fill={newColor} data-testid='mitre' />;
        case 'move_down':
            return <MoveDown className={classes} fill={newColor} data-testid='move_down' />;
        case 'phone_in_talk':
            return <PhoneInTalk className={classes} fill={newColor} data-testid='phone_in_talk' />;
        case 'radio_button_unchecked':
            return <RadioButtonUnchecked className={classes} fill={newColor} data-testid='radio_button_unchecked' />;
        case 'search':
            return <SearchFill className={classes} fill={newColor} data-testid='search' />;
        case 'sentiment_dissatisfied':
            return <SentimentDissatisfied className={classes} fill={newColor} data-testid='sentiment_dissatisfied' />;
        case 'social_leaderboard':
            return <SocialLeaderboard className={classes} fill={newColor} data-testid='social_leaderboard' />;
        case 'support_agent':
            return <SupportAgent className={classes} fill={newColor} data-testid='support_agent' />;
        case 'visibility':
            return <Visibility className={classes} fill={newColor} data-testid='visibility' />;
        case 'visibility_off':
            return <VisibilityOff className={classes} fill={newColor} data-testid='visibility_off' />;
        case 'warning':
            return <Warning className={classes} fill={newColor} data-testid='warning' />;
        case 'expand_less':
            return <ExpandLess className={classes} fill={newColor} data-testid='expand_less' />;
        case 'expand_more':
            return <ExpandMore className={classes} fill={newColor} data-testid='expand_more' />;
        case 'exercise':
            return <Exercise className={classes} fill={newColor} data-testid='exercise' />;
        default:
            return <span data-testid="default" >Icon not found :(</span>;
    }
};

export default Icon;
