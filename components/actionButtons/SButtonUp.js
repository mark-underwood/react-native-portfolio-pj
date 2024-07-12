import { Pressable } from 'react-native';
import { useDispatch } from "react-redux"; // send button actions to redux store
import { updateButtonSUp } from './actionButtonsSlice';
import ActionButton from './ActionButton';
import { styles, props } from './actionButtonStyles';

const SButtonUp = () => {
    const title = 'U';
    const dispatch = useDispatch();
    
    return (
        <Pressable
            onPressIn={() => dispatch(updateButtonSUp(true))}
            onPressOut={() => dispatch(updateButtonSUp(false))}
            style={styles.actionButton}
        >
            <ActionButton title={title} />
        </Pressable>
    )
};

export default SButtonUp;