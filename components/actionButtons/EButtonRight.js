import { Pressable } from 'react-native';
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
            style={styles.actionButton}
        >
            <ActionButton title={title} />
        </Pressable>
    )
}

export default EButtonRight;