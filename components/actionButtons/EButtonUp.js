import { Text, Pressable } from 'react-native';
import { useDispatch } from "react-redux"; // send button actions to redux store
import { updateButtonEUp } from './actionButtonsSlice';
import styles from './styles';

const EButtonUp = () => {
    const dispatch = useDispatch();
    // const eUpAct = () => dispatch(updateButtonEUp({ eUp: true }));
    // const eUpOff = () => dispatch(updateButtonEUp({ eUp: false }));

    return (
        <Pressable
            // onPressIn={eUpAct}
            // onPressOut={eUpOff}
            onPressIn={() => dispatch(updateButtonEUp(true))}
            onPressOut={() => dispatch(updateButtonEUp(false))}
            style={styles.actionButtons}
        >
            <Text>U</Text>
        </Pressable>
    )
};

export default EButtonUp;