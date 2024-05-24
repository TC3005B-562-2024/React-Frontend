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

    const classes = classNames('aspect-square w-full h-full', className);

    const newColor = classNames({
        'black': color === 'black',
        'white': color === 'white',
        '#428ADE': color === 'blue',
        '#CC3232': color === 'red',
        '#99C140': color === 'green',
        '#E7B416': color === 'yellow',
        '#9CA3AF': color === 'gray',
        '#FCA311': color === 'orange',
    });


    switch (iconName) {
        case 'alarm':
            return <Alarm className={classes} fill={newColor} />;
        case 'logo':
            return <AmazonConnectIcon className={classes} fill={newColor} />;
        case 'arrow_back':
            return <ArrowBackIos className={classes} fill={newColor} />;
        case 'arrow_forward':
            return <ArrowForwardIos className={classes} fill={newColor} />;
        case 'bar_chart':
            return <BarChart className={classes} fill={newColor} />;
        case 'calendar_today':
            return <CalendarToday className={classes} fill={newColor} />;
        case 'call_end':
            return <CallEnd className={classes} fill={newColor} />;
        case 'cancel':
            return <Cancel className={classes} fill={newColor} />;
        case 'check':
            return <Check className={classes} fill={newColor} />;
        case 'check_circle':
            return <CheckCircle className={classes} fill={newColor} />;
        case 'check_circle_fill':
            return <CheckCircleFill className={classes} fill={newColor} />;
        case 'clear_night':
            return <ClearNight className={classes} fill={newColor} />;
        case 'close':
            return <Close className={classes} fill={newColor} />;
        case 'done':
            return <Done className={classes} fill={newColor} />;
        case 'instant_mix':
            return <InstantMix className={classes} fill={newColor} />;
        case 'keyboard_return':
            return <KeyboardReturn className={classes} fill={newColor} />;
        case 'logout':
            return <Logout className={classes} fill={newColor} />;
        case 'menu':
            return <Menu className={classes} fill={newColor} />;
        case 'mitre':
            return <Mitre className={classes} fill={newColor} />;
        case 'move_down':
            return <MoveDown className={classes} fill={newColor} />;
        case 'phone_in_talk':
            return <PhoneInTalk className={classes} fill={newColor} />;
        case 'radio_button_unchecked':
            return <RadioButtonUnchecked className={classes} fill={newColor} />;
        case 'search':
            return <SearchFill className={classes} fill={newColor} />;
        case 'sentiment_dissatisfied':
            return <SentimentDissatisfied className={classes} fill={newColor} />;
        case 'social_leaderboard':
            return <SocialLeaderboard className={classes} fill={newColor} />;
        case 'support_agent':
            return <SupportAgent className={classes} fill={newColor} />;
        case 'visibility':
            return <Visibility className={classes} fill={newColor} />;
        case 'visibility_off':
            return <VisibilityOff className={classes} fill={newColor} />;
        case 'warning':
            return <Warning className={classes} fill={newColor} />;
        case 'expand_less':
            return <ExpandLess className={classes} fill={newColor} />;
        case 'expand_more':
            return <ExpandMore className={classes} fill={newColor} />;
        case 'exercise':
            return <Exercise className={classes} fill={newColor} />;
        default:
            return <span>Icon not found :(</span>;
    }
};

export default Icon;
