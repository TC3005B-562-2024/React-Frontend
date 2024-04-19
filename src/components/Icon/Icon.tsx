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
        case 'arrow-back-ios':
            return <ArrowBackIos className={svgClasses} />;
        case 'arrow-forward-ios':
            return <ArrowForwardIos className={svgClasses} />;
        case 'bar-chart':
            return <BarChart className={svgClasses} />;
        case 'calendar-today':
            return <CalendarToday className={svgClasses} />;
        case 'call-end':
            return <CallEnd className={svgClasses} />;
        case 'cancel':
            return <Cancel className={svgClasses} />;
        case 'check-circle':
            return <CheckCircle className={svgClasses} />;
        case 'clear-night':
            return <ClearNight className={svgClasses} />;
        case 'close':
            return <Close className={svgClasses} />;
        case 'done':
            return <Done className={svgClasses} />;
        case 'instant-mix':
            return <InstantMix className={svgClasses} />;
        case 'keyboard-return':
            return <KeyboardReturn className={svgClasses} />;
        case 'logout':
            return <Logout className={svgClasses} />;
        case 'menu':
            return <Menu className={svgClasses} />;
        case 'mitre':
            return <Mitre className={svgClasses} />;
        case 'move-down':
            return <MoveDown className={svgClasses} />;
        case 'phone-in-talk':
            return <PhoneInTalk className={svgClasses} />;
        case 'search-fill':
            return <SearchFill className={svgClasses} />;
        case 'sentiment-dissatisfied':
            return <SentimentDissatisfied className={svgClasses} />;
        case 'social-leaderboard':
            return <SocialLeaderboard className={svgClasses} />;
        case 'support-agent':
            return <SupportAgent className={svgClasses} />;
        case 'visibility':
            return <Visibility className={svgClasses} />;
        case 'visibility-off':
            return <VisibilityOff className={svgClasses} />;
        case 'warning':
            return <Warning className={svgClasses} />;
        default:
            return <span>Icon not found :(</span>;
    }
};

Icon.defaultProps = {
    size: 'text',
};

export default Icon;
