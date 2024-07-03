import { Text, Pressable } from 'react-native';
import { useDispatch } from "react-redux"; // send button actions to redux store
import { updateButtonSLeft } from './actionButtonsSlice';
import styles from './styles';

const SButtonLeft = () => {
    const dispatch = useDispatch();
    // const sLeftAct = () => dispatch(updateButtonSLeft({ sLeft: true }));
    // const sLeftOff = () => dispatch(updateButtonSLeft({ sLeft: false }));

    return (
        <Pressable
            // onPressIn={sLeftAct}
            // onPressOut={sLeftOff}
            onPressIn={() => dispatch(updateButtonSLeft(true))}
            onPressOut={() => dispatch(updateButtonSLeft(false))}
            style={styles.actionButtons}
        >
            <Text>L</Text>
        </Pressable>
    )
};

export default SButtonLeft;