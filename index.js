import { Text, TextInput } from 'react-native'

let _applyed = false
export default class GlobalFont {
    static applyGlobal(fontFamily) {
        if (_applyed) { return }
        if (Text.defaultProps == null) Text.defaultProps = {};
        Text.defaultProps.style = [Text.defaultProps.style, { fontFamily }];
        if (TextInput.defaultProps == null) TextInput.defaultProps = {};
        TextInput.defaultProps.style = [TextInput.defaultProps.style, { fontFamily }];
        _applyed = true;
    }
}
