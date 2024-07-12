import { Pressable } from 'react-native';
import { useDispatch } from "react-redux"; // send button actions to redux store
import { updateButtonSLeft } from './actionButtonsSlice';
import ActionButton from './ActionButton';
import { styles, props } from './actionButtonStyles';

const SButtonLeft = () => {
    const title = 'L';
    const dispatch = useDispatch();

    return (
        <Pressable
            onPressIn={() => dispatch(updateButtonSLeft(true))}
            onPressOut={() => dispatch(updateButtonSLeft(false))}
            style={styles.actionButton}
        >
            <ActionButton title={title} />
        </Pressable>
    )
};

export default SButtonLeft;