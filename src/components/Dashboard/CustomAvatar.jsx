import { createAvatar } from '@dicebear/avatars';
import * as miniavsStyle from '@dicebear/miniavs';
import * as botStyle from '@dicebear/avatars-bottts-sprites';
import * as bigSmileStyle from '@dicebear/big-smile';
import * as adventurerStyle from '@dicebear/adventurer';
import * as micahStyle from '@dicebear/micah';
import * as bigearStyle from "@dicebear/big-ears"


export const CustomAvatar = (props) => {
    let svgStyle = botStyle;

    let avatarStyleFromProps = props.avatarStyle;
    switch(avatarStyleFromProps){
        case "robot":
            svgStyle = botStyle;
        break;

        case "miniavs":
            svgStyle = miniavsStyle;
        break;

        case "bigsmile":
            svgStyle = bigSmileStyle;
        break;

        case "adventurer":
            svgStyle = adventurerStyle;
        break;

        case "micah":
            svgStyle = micahStyle;
        break;

        case "bigear":
            svgStyle = bigearStyle;
        break;

        default:
            svgStyle = botStyle;

    }

    let svg = createAvatar(svgStyle, {
        seed: props.seed,
        dataUri: true
        // ... and other options
    });

    return (
        <img src={svg} style={props.style} alt="avatar" />
    )
}