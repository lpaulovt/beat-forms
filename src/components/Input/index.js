import React, {useState, useEffect} from 'react';
import {TextInput, Animated} from 'react-native';
import styles, {Container} from './styles';

const Input = ({label, value, setValue, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [positionYLabel] = useState(new Animated.Value(0));
  const [positionXLabel] = useState(new Animated.Value(5));
  const [fontSizeLabel] = useState(new Animated.Value(1.5));

  useEffect(() => {
    if (!isFocused && value !== '') {
      Animated.timing(fontSizeLabel, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

      Animated.timing(positionYLabel, {
        toValue: -26,
        duration: 200,
        useNativeDriver: true,
      }).start();

      Animated.timing(positionXLabel, {
        toValue: '-1%',
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [fontSizeLabel, positionXLabel, positionYLabel, isFocused, value]);

  function handleFocus() {
    setIsFocused(true);
    Animated.timing(fontSizeLabel, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(positionYLabel, {
      toValue: -26,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(positionXLabel, {
      toValue: '-1%',
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  function handleBlur() {
    setIsFocused(false);
    if (value === '') {
      Animated.timing(positionYLabel, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
      Animated.timing(fontSizeLabel, {
        toValue: 1.3,
        duration: 200,
        useNativeDriver: true,
      }).start();

      Animated.timing(positionXLabel, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }

  const labelStyle = {
    top: 26,
    left: 2,
    fontSize: 10,
    color: !isFocused && value === '' ? '#aaa' : '#550073',
    transform: [
      {translateY: positionYLabel},
      {translateX: positionXLabel},
      {scale: fontSizeLabel},
    ],
  };

  return (
    <Container>
      <Animated.Text style={[labelStyle, styles.label]}>{label}</Animated.Text>
      <TextInput
        style={[styles.textInput]}
        value={value}
        onChangeText={(val) => setValue(val)}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        {...rest}
      />
    </Container>
  );
};

export default Input;
