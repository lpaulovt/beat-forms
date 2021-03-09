import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useCont} from '../../hooks/index';
import styles, {Container, Logo} from './styles';
import {Subtitle} from '../../pages/Home/styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import formatDate from '../../utils/FormatDate/index';
import SvgDelete from '../../assets/SvgDelete';
import SvgPlus from '../../assets/SvgPlus';
import SvgArrowLeft from '../../assets/SvgArrowLeft';
import SvgCalendar from '../../assets/SvgCalendar';

const CreateForm = ({navigation}) => {
  const {data, setData, storeData} = useCont();

  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [customFields, setCustomFields] = useState([]);
  const [customLabel, setCustomLabel] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    console.log(selectedDate);
    if (event.type === 'neutralButtonPressed') {
      setDate(new Date(0));
    } else {
      setDate(currentDate);
    }

    setShow(false);
  };

  const handleCreateForm = async () => {
    if (title !== '' || user !== '' || customFields.length !== 0) {
      setData([
        ...data,
        {
          id: Math.random(),
          isFill: false,
          titulo: title,
          usuario: user,
          dataCadastro: date,
          fields: customFields,
          location: {
            latitude: '',
            longitude: '',
          },
        },
      ]);

      await storeData(data);

      navigation.navigate('Home');
    }
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

      <Subtitle style={{marginTop: 0, marginBottom: 25}}>
        Crie seu formulário
      </Subtitle>
      <Input label="Título" value={title} setValue={setTitle} />
      <Input label="Usuário" value={user} setValue={setUser} />
      <View style={styles.containerInput}>
        <View style={{width: '80%'}}>
          <Input
            label="Data criada"
            value={formatDate(`${date}`)}
            setValue={date}
            editable={false}
            placeholder="dd/mm/aaaa"
          />
        </View>
        <Button
          label={<SvgCalendar width={30} height={30} />}
          onpress={() => setShow(true)}
          style={{backgroundColor: '#8264E2', width: 50, height: 50}}
        />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="calendar"
          onChange={onChangeDate}
        />
      )}
      <Subtitle style={{marginTop: 0, marginBottom: 10, fontSize: 14}}>
        Campos adicionais:
      </Subtitle>
      {customFields.map((item, index) => (
        <View key={item.label} style={styles.containerInput}>
          <View style={{width: '80%'}}>
            <Input
              label={item.label}
              value={''}
              setValue={''}
              editable={false}
            />
          </View>

          <Button
            onPress={() => {
              const fields = [...customFields];
              fields.splice(index, 1);
              setCustomFields(fields);
            }}
            label={<SvgDelete />}
            style={{width: 50, height: 50, backgroundColor: '#FF2343'}}
          />
        </View>
      ))}

      <Subtitle style={{marginTop: 0, marginBottom: 10, fontSize: 14}}>
        Crie um campo adicional preenchendo a caixa de texto abaixo:
      </Subtitle>
      <View style={styles.containerInput}>
        <View style={{width: '80%'}}>
          <Input
            label={'Nome:'}
            value={customLabel}
            setValue={setCustomLabel}
          />
        </View>
        <Button
          onPress={() => {
            if (customLabel !== '') {
              setCustomFields([
                ...customFields,
                {label: customLabel, value: ''},
              ]);

              setCustomLabel('');
            }
          }}
          style={{width: 50, height: 50, backgroundColor: '#8264E2'}}
          label={<SvgPlus />}
        />
      </View>

      <Button
        onPress={() => handleCreateForm()}
        label="Criar formulário"
        style={{backgroundColor: '#42D70D'}}
      />
    </Container>
  );
};

export default CreateForm;
