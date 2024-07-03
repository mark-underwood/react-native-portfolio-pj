import { View, Text, Pressable } from 'react-native';

const Abort = () => {
    return (
        <View>
            <Pressable delayLongPress={2000} onLongPress={
                console.log('Make this show an exit to main menu confirmation modal!')
            }>
                <Text>ABORT</Text>
            </Pressable>
        </View>
    );
};

export default Abort;