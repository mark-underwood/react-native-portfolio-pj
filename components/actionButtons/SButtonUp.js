import { Text, Pressable } from 'react-native';
import { useDispatch } from "react-redux"; // send button actions to redux store
import { updateButtonSUp } from './actionButtonsSlice';
import styles from './styles';

const SButtonUp = () => {
    const dispatch = useDispatch();
    // const sUpAct = () => dispatch(updateButtonSUp({ sUp: true }));
    // const sUpOff = () => dispatch(updateButtonSUp({ sUp: false }));

    return (
        <Pressable
            // onPressIn={sUpAct}
            // onPressOut={sUpOff}
            onPressIn={() => dispatch(updateButtonSUp(true))}
            onPressOut={() => dispatch(updateButtonSUp(false))}
            style={styles.actionButtons}
        >
            <Text>U</Text>
        </Pressable>
    )
};

export default SButtonUp;