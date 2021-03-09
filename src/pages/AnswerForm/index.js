import React, {useState} from 'react';
import GetLocation from 'react-native-get-location';
import {ActivityIndicator} from 'react-native';
import Button from '../../components/Button/index';
import {Container} from '../../pages/CreateForm/styles';
import {Logo, Subtitle} from '../../pages/Home/styles';
import Input from '../../components/Input';
import {useCont} from '../../hooks/index';
import SvgArrowLeft from '../../assets/SvgArrowLeft';

const AnswerForm = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {data, setData, storeData} = useCont();
  const {index} = route.params;
  const form = data[index];

  const handleAnswerform = async () => {
    setIsLoading(true);
    data[index].isFill = true;
    await getLocation();
    setData([...data]);

    await storeData(data);
    navigation.navigate('Home');
  };

  const getLocation = async () => {
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
    })
      .then((location) => {
        console.log(location);
        data[index].location.latitude = location.latitude;
        data[index].location.longitude = location.longitude;
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  return (
    <Container>
      <Button
        label={<SvgArrowLeft />}
        onpress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 10,
          backgroundColor: '#8264E2',
          height: 40,
          width: 40,
          borderRadius: 20,
        }}
      />
      <Logo
        style={{resizeMode: 'contain'}}
        source={require('../../assets/LogoAgrotoolsNew.png')}
      />
      <Subtitle>Preencha todos os campos corretamente.</Subtitle>
      <Input
        label="Título"
        value={data[index].titulo}
        setValue={''}
        placeholder={data[index].placeholder}
        editable={false}
      />
      <Input
        label="Usuário"
        value={data[index].usuario}
        setValue={''}
        placeholder={data[index].placeholder}
        editable={false}
      />

      {data[index].fields.map((item, index) => (
        <AnswerInput item={item} index={index} form={form} setData={setData} />
      ))}

      <Button
        onPress={() => handleAnswerform()}
        label={
          isLoading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            'Finalizar formulário!'
          )
        }
        style={{backgroundColor: '#42D70D'}}
      />
    </Container>
  );
};

export default AnswerForm;

const AnswerInput = ({item, index, form}, setData) => {
  const [value, setValue] = useState('');

  const handleEdit = (v) => {
    setValue(v);
    form.fields[index].value = v;
  };

  return (
    <Input
      label={item.label}
      value={form.fields[index].value}
      setValue={(value) => handleEdit(value)}
      placeholder={item.placeholder}
      editable={true}
    />
  );
};
