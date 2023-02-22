import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import data from '../helpers/extraDetails.json';

const ModalButton = ({id, title, onPress, btnWidth, selected = false}) => {
  const buttonStyle = id =>
    id === selected
      ? {...styles.btn, backgroundColor: colors.black}
      : styles.btn;
  const textStyle = id =>
    id === selected
      ? {...styles.modalText, color: colors.white}
      : styles.modalText;
  return (
    <TouchableOpacity
      style={[buttonStyle(id), {width: btnWidth}]}
      onPress={() => onPress(id)}>
      <Text style={textStyle(id)}>{title}</Text>
    </TouchableOpacity>
  );
};
const SizeModal = ({modalVisible, setModalVisible}) => {
  const navigation = useNavigation();
  const [collarType, setCollarType] = useState('');
  const [frontPocket, setFrontPocket] = useState('');
  const [sidePocket, setSidePocket] = useState('');
  const [stichType, setStichType] = useState('');
  const [tailType, setTailType] = useState('');
  const [shalwarPocket, setShalwarPocket] = useState();

  const handleSubmit = () => {
    // Check if all fields are valid
    if (errors.name === '' && inputValues.name.length > 0) {
      // Submit form
      console.log('Form submitted');
      console.log(inputValues);
      // navigation.navigate('Home');
    } else {
      console.log(errors);
      console.log('Form has errors');
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={{marginTop: hp(2)}}>
              <Text style={styles.modalText}>Collar Type</Text>
              <View style={styles.btnContainer}>
                {data.collarTypes.map(type => (
                  <ModalButton
                    id={type.id}
                    btnWidth={'30%'}
                    title={type.title}
                    selected={collarType}
                    onPress={setCollarType}
                  />
                ))}
              </View>
            </View>
            <View style={{marginTop: hp(2)}}>
              <Text style={styles.modalText}>Front Pocket</Text>
              <View style={styles.btnContainer}>
                {data.frontPocketTypes.map(type => (
                  <ModalButton
                    id={type.id}
                    btnWidth={'30%'}
                    title={type.title}
                    selected={frontPocket}
                    onPress={setFrontPocket}
                  />
                ))}
              </View>
            </View>
            <View style={{marginTop: hp(2)}}>
              <Text style={styles.modalText}>Side Pocket</Text>
              <View style={styles.btnContainer}>
                {data.sidePocketTypes.map(type => (
                  <ModalButton
                    id={type.id}
                    btnWidth={'30%'}
                    title={type.title}
                    selected={sidePocket}
                    onPress={setSidePocket}
                  />
                ))}
              </View>
            </View>
            <View style={{marginTop: hp(2)}}>
              <Text style={styles.modalText}>Stitch Type</Text>
              <View style={styles.btnContainer}>
                {data.stichTypes.map(type => (
                  <ModalButton
                    id={type.id}
                    btnWidth={'30%'}
                    title={type.title}
                    selected={stichType}
                    onPress={setStichType}
                  />
                ))}
              </View>
            </View>
            <View style={{marginTop: hp(2)}}>
              <Text style={styles.modalText}>Tail Type</Text>
              <View style={styles.btnContainer}>
                {data.tailTypes.map(type => (
                  <ModalButton
                    id={type.id}
                    btnWidth={'45%'}
                    title={type.title}
                    selected={tailType}
                    onPress={setTailType}
                  />
                ))}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.modalText}>Shalwar Pocket</Text>
              <CheckBox
                disabled={false}
                value={shalwarPocket}
                onValueChange={value => setShalwarPocket(value)}
                tintColors={{
                  true: 'rgba(0, 0, 0, 0.7)',
                  false: 'rgba(0, 0, 0, 0.7)',
                }}
              />
            </View>
            <View>
              <Text style={styles.modalText}>Note:</Text>
              <TextInput
                style={[
                  {
                    backgroundColor: colors.white,
                    elevation: 5,
                    borderRadius: 10,
                    color: colors.black,
                    marginBottom: hp(1),
                  },
                  styles.modalText,
                ]}
              />
            </View>
            <TouchableOpacity
              style={[styles.saveButton]}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('Cart');
              }}>
              <Text style={[styles.modalText, styles.textStyle]}>Save</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  //   centeredView: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     marginTop: 22,
  //   },
  modalView: {
    height: hp(85),
    margin: wp(6),
    backgroundColor: 'white',
    borderRadius: wp(1),
    padding: wp(3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 6,
    paddingVertical: hp(1),
    marginVertical: hp(1),
    width: '70%',
    elevation: 5,
    backgroundColor: colors.white,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 6,
    paddingVertical: hp(1),
    elevation: 5,
    backgroundColor: colors.white,
  },
  btnContainer: {
    marginVertical: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  textStyle: {fontSize: 16},
  modalText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
});
export default SizeModal;
