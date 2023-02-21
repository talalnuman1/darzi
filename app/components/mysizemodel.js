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
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';

// import Icon from 'react-native-vector-icons/AntDesign';

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
const MySizeModal = ({modalVisible, setModalVisible}) => {
  const navigation = useNavigation();

  //   const [collarType, setCollarType] = useState('');
  //   const [frontPocket, setFrontPocket] = useState('');
  //   const [sidePocket, setSidePocket] = useState('');
  //   const [stichType, setStichType] = useState('');
  //   const [tailType, setTailType] = useState('');
  //   const [shalwarPocket, setShalwarPocket] = useState();
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.leftside}
            onPress={() => setModalVisible(false)}>
            <Image
              style={styles.iconstyle}
              source={require('../assets/icons/close1.png')}
            />
          </TouchableOpacity>
          <ScrollView style={styles.padding}>
            <View>
              <Text style={styles.bigmodalText}>My Sizes</Text>
            </View>
            <View style={styles.bgflexrwo}>
              <View style={styles.btnflexrow}>
                <Text style={styles.modalText}>Ghias Ali</Text>
                <TouchableOpacity
                  style={styles.btnblack}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalTextwhite}>Select</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.flexrowsizes}>
                <View>
                  <Text style={styles.modalText}>Shirt Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Shoulder Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Neck</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Waist</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Poncha</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                </View>
                <View>
                  <Text style={styles.modalText}>Arm Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Mark Shoulder</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Chest</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Shalwar Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Cuff</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                </View>
              </View>
            </View>
            <View style={styles.bgflexrwo}>
              <View style={styles.btnflexrow}>
                <Text style={styles.modalText}>Ghias Ali</Text>
                <TouchableOpacity style={styles.btnblack}>
                  <Text style={styles.modalTextwhite}>Select</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.flexrowsizes}>
                <View>
                  <Text style={styles.modalText}>Shirt Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Shoulder Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Neck</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Waist</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Poncha</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                </View>
                <View>
                  <Text style={styles.modalText}>Arm Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Mark Shoulder</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Chest</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Shalwar Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Cuff</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                </View>
              </View>
            </View>
            <View style={styles.bgflexrwo}>
              <View style={styles.btnflexrow}>
                <Text style={styles.modalText}>Ghias Ali</Text>
                <TouchableOpacity style={styles.btnblack}>
                  <Text style={styles.modalTextwhite}>Select</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.flexrowsizes}>
                <View>
                  <Text style={styles.modalText}>Shirt Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Shoulder Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Neck</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Waist</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Poncha</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                </View>
                <View>
                  <Text style={styles.modalText}>Arm Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Mark Shoulder</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Chest</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Shalwar Length</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                  <Text style={styles.modalText}>Cuff</Text>
                  <Text style={styles.modalTextlenght}>30</Text>
                </View>
              </View>
            </View>
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
  padding: {
    paddingHorizontal: hp(1),
  },
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

  textStyle: {fontSize: 16},
  modalText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
  },
  modalTextlenght: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Regular',
    color: colors.darkGrey,
  },
  bigmodalText: {
    fontSize: hp(2.5),
    fontFamily: 'Poppins-Bold',
    color: colors.black,
    textAlign: 'center',
  },
  flexrowsizes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgflexrwo: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    elevation: 8,
    backgroundColor: colors.white,
    marginTop: hp(1),
    borderRadius: hp(1),
  },
  btnblack: {
    backgroundColor: colors.black,
    borderRadius: 15,
    paddingHorizontal: wp(3),
    alignItems: 'center',
  },
  modalTextwhite: {
    color: colors.white,
  },
  btnflexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  iconstyle: {
    width: 30,
    height: 30,
  },
  leftside: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
export default MySizeModal;
