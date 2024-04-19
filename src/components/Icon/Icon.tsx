/// <reference types="vite-plugin-svgr/client" />
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
    Warning
} from "../../assets";


const Icon: React.FC<IIcon> = ({ iconName, color}) => {

    const svgClasses = classNames({
        'w-full h-full': true,
        'fill-black': color === 'black',
        'fill-white': color === 'white',
        'fill-aci-blue': color === 'blue',
        'fill-aci-red': color === 'red',
        'fill-aci-green': color === 'green',
        'fill-aci-yellow': color === 'yellow',
        'fill-gray-400': color === 'gray',
        'fill-aci-orange': color === 'orange',
    });

    
    switch (iconName) {
        case 'alarm':
            return <Alarm className={svgClasses} />;
        case 'logo':
            return <AmazonConnectIcon className={svgClasses} />;
        case 'arrow_back':
            return <ArrowBackIos className={svgClasses} />;
        case 'arrow_forward':
            return <ArrowForwardIos className={svgClasses} />;
        case 'bar_chart':
            return <BarChart className={svgClasses} />;
        case 'calendar_today':
            return <CalendarToday className={svgClasses} />;
        case 'call_end':
            return <CallEnd className={svgClasses} />;
        case 'cancel':
            return <Cancel className={svgClasses} />;
        case 'check_circle':
            return <CheckCircle className={svgClasses} />;
        case 'check_circle_fill':
            return <CheckCircleFill className={svgClasses} />;
        case 'clear_night':
            return <ClearNight className={svgClasses} />;
        case 'close':
            return <Close className={svgClasses} />;
        case 'done':
            return <Done className={svgClasses} />;
        case 'instant_mix':
            return <InstantMix className={svgClasses} />;
        case 'keyboard_return':
            return <KeyboardReturn className={svgClasses} />;
        case 'logout':
            return <Logout className={svgClasses} />;
        case 'menu':
            return <Menu className={svgClasses} />;
        case 'mitre':
            return <Mitre className={svgClasses} />;
        case 'move_down':
            return <MoveDown className={svgClasses} />;
        case 'phone_in_talk':
            return <PhoneInTalk className={svgClasses} />;
        case 'radio_button_unchecked':
            return <RadioButtonUnchecked className={svgClasses} />;
        case 'search':
            return <SearchFill className={svgClasses} />;
        case 'sentiment_dissatisfied':
            return <SentimentDissatisfied className={svgClasses} />;
        case 'social_leaderboard':
            return <SocialLeaderboard className={svgClasses} />;
        case 'support_agent':
            return <SupportAgent className={svgClasses} />;
        case 'visibility':
            return <Visibility className={svgClasses} />;
        case 'visibility_off':
            return <VisibilityOff className={svgClasses} />;
        case 'warning':
            return <Warning className={svgClasses} />;
        default:
            return <span>Icon not found :(</span>;
    }
};

Icon.defaultProps = {
    color: 'white',
};

export default Icon;
