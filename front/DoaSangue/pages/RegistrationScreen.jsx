import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

import SmallTextInput from '../components/SmallTextInput';

import { colors } from '../style/colors';

export default function RegistrationScreen({ navigation }) {
  const [nameMain, setNameMain] = useState('');
  const [passMain, setPassMain] = useState('');
  const [nameWrong, setNameWrong] = useState(false);
  const [passWrong, setPassWrong] = useState(false);
  const [invalidUserMessage, setInvalidUserMessage] = useState('');

  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);


  user = {
    email: 'email@mousse.com',
    pass: 'pass123',
  }

  function validateRegistration() {
    let valid = true;
    const errorMessages = ['Não foi possível registrar a conta :('];
    setInvalidUserMessage('');

    // Email validation
    if (nameMain != user.email) {
      setNameWrong(false);
    } else {
      setNameWrong(true);
      valid = false;
      errorMessages.push('- Email já cadastrado');
    }

    // Password validation
    if (passMain.length >= 8) {
      setPassWrong(false);
    } else {
      setPassWrong(true);
      errorMessages.push('- Senha deve ter no mínimo 8 caracteres');
      valid = false;
    }

    return {
      'valid': valid,
      'errorMessages': errorMessages
    };
  }

  function createAccount() {
    // Check email availability and password validation
    const validateRegistrationValues = validateRegistration();
    const valid = validateRegistrationValues.valid;
    const errorMessages = validateRegistrationValues.errorMessages;
    if (!valid) {
      setInvalidUserMessage(errorMessages.join('\n'));
      onToggleSnackBar();
      return;
    }
    // Create account and go to home page
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crie sua conta!</Text>

      <SmallTextInput label={'Usuário'} isPassword={false} updateVar={(text) => setNameMain(text)} style={styles.textInput} invalidInput={nameWrong} />
      <SmallTextInput label={'Senha'} isPassword={true} updateVar={(text) => setPassMain(text)} style={styles.textInput} invalidInput={passWrong} />

      <View style={styles.secView}>
        <Button mode="text" color={colors.lightRed} onPress={() => createAccount()} style={styles.buttonBig}>Criar conta</Button>

        <Button mode="text" color={colors.lightRed} onPress={() => navigation.navigate('LoginScreen')} style={styles.buttonBig}>Já possuo uma conta</Button>
      </View>

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={2500}
      >
        {invalidUserMessage}
      </Snackbar>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  secView: {
    alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'center',
    marginTop: 50,
  },
  buttonBig: {
    marginTop: 10,
    width: 300,
  },
  buttonSmall: {
    marginTop: 10,
    width: 100,
  },
  header: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 50,
    // fontWeight: 'bold',
  },
  textInput: {
    width: 300,
    alignSelf: 'center',
  }
});
