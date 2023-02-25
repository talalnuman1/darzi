import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
export default function SearchBar({onSearch}) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState();

  const debouncedSearch = debounce(value => {
    onSearch(value);
    setLoading(false);
  }, DEBOUNCE_DELAY);

  const handleTextChange = value => {
    setLoading(true);
    setText(value);
    debouncedSearch(value);
  };
  return (
    <View>
      <View style={styles.input}>
        {loading ? (
          <ActivityIndicator style={{marginHorizontal: wp(3.5)}} size={16} />
        ) : (
          <Image
            style={styles.search}
            source={require('../assets/icons/search.png')}
          />
        )}
        <View
          style={{
            width: 2,
            height: '50%',
            backgroundColor: colors.black,
            opacity: 0.4,
          }}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={colors.darkGrey}
          style={styles.textInput}
          value={text}
          onChangeText={handleTextChange}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  search: {
    marginHorizontal: wp(4),
    // padding: 10,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: wp(18),
    // width: '100%',
    marginTop: -hp(3.2),
    borderRadius: wp(2.5),
    backgroundColor: 'white',
  },
  textInput: {
    paddingHorizontal: wp(4),
    fontSize: hp(2.2),
    borderRadius: wp(2.5),
    width: '100%',
    color: colors.darkGrey,
    fontFamily: 'Poppins-Regular',
  },
});
