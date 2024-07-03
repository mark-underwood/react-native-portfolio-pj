import { Text, Pressable } from 'react-native';
import { useDispatch } from "react-redux"; // send button actions to redux store
import { updateButtonERight } from './actionButtonsSlice';
import styles from './styles';

const EButtonRight = () => {
    const dispatch = useDispatch();
    // const eRightAct = () => dispatch(updateButtonERight({ eRight: true }));
    // const eRightOff = () => dispatch(updateButtonERight({ eRight: false }));

    return (
        <Pressable
            // onPressIn={eRightAct}
            // onPressOut={eRightOff}
            onPressIn={() => dispatch(updateButtonERight(true))}
            onPressOut={() => dispatch(updateButtonERight(false))}
            style={styles.actionButtons}
        >
            <Text>R</Text>
        </Pressable>
    )
}

export default EButtonRight;