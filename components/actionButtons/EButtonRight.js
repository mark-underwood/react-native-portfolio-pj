import { Button, ImageBackground, Pressable, Text } from 'react-native';
import { useDispatch } from "react-redux"; // send button actions to redux store
import { updateButtonERight } from './actionButtonsSlice';
import ActionButton from './ActionButton';
import { styles, props } from './actionButtonStyles';

const EButtonRight = () => {
    const title = 'R';
    const dispatch = useDispatch();
    
    return (
        <Pressable
            onPressIn={() => dispatch(updateButtonERight(true))}
            onPressOut={() => dispatch(updateButtonERight(false))}
            style={styles.actionButtons}
        >
            <ActionButton title={title} />
        </Pressable>
    )
}

export default EButtonRight;