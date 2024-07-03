import { Button, ImageBackground, Pressable, Text } from 'react-native';
import { useDispatch } from "react-redux"; // send button actions to redux store
import { updateButtonEUp } from './actionButtonsSlice';
import ActionButton from './ActionButton';
import { styles, props } from './actionButtonStyles';

const EButtonUp = () => {
    const title = 'U';
    const dispatch = useDispatch();
    
    return (
        <Pressable
            onPressIn={() => dispatch(updateButtonEUp(true))}
            onPressOut={() => dispatch(updateButtonEUp(false))}
            style={styles.actionButtons}
        >
            <ActionButton title={title} />
        </Pressable>
    )
};

export default EButtonUp;