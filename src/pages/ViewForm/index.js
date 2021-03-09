import React from 'react';
import {Dimensions} from 'react-native';
import {Container} from '../../pages/CreateForm/styles';
import {Logo, Subtitle} from '../../pages/Home/styles';
import MapboxGL from '@react-native-mapbox-gl/maps';

import Input from '../../components/Input';
import {useCont} from '../../hooks/index';
import SvgLocation from '../../assets/SvgLocation';
import formatDate from '../../utils/FormatDate';
import Button from '../../components/Button';
import SvgArrowLeft from '../../assets/SvgArrowLeft';

const ViewForm = ({route, navigation}) => {
  const {data} = useCont();
  const {width} = Dimensions.get('window');
  const {index} = route.params;
  MapboxGL.setAccessToken(
    'pk.eyJ1IjoibHBhdWxvdnQiLCJhIjoiY2tsMDFhN2FqMGFxYjJ2cGpodzRvbm1wMCJ9.WlJD_2v46xXb8Ws_wujXRw',
  );

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
      <Subtitle style={{marginTop: 0, marginBottom: 20, textAlign: 'center'}}>
        {data[index].titulo}
      </Subtitle>
      <Input
        label="Usuário"
        value={data[index].usuario}
        setValue={''}
        placeholder={data[index].placeholder}
        editable={false}
      />
      <Input
        label="Data preenchido"
        value={`${formatDate(data[index].dataCadastro)}`}
        setValue={''}
        placeholder={data[index].placeholder}
        editable={false}
      />
      {data[index].fields.map((item) => (
        <Input
          key={item.label}
          label={item.label}
          value={item.value}
          setValue={''}
          placeholder={item.placeholder}
          editable={false}
        />
      ))}

      <Subtitle style={{marginTop: 0, fontSize: 12, color: '#550073'}}>
        Local em que o formulário foi preenchido:{' '}
      </Subtitle>
      <MapboxGL.MapView
        style={{
          width: width - 30,
          height: width - 30,
          borderRadius: 15,
          overflow: 'hidden',
        }}
        preferredFramesPerSecond={900000}
        styleURL={MapboxGL.StyleURL.SatelliteStreet}
        zoomEnabled={true}
        rotateEnabled={true}
        surfaceView={true}
        scrollEnabled={true}
        localizeLabels={false}>
        <MapboxGL.Camera
          centerCoordinate={[
            data[index].location.longitude,
            data[index].location.latitude,
          ]}
          zoomLevel={10}
          pitch={90}
        />
        <MapboxGL.MarkerView
          id="rocketseat"
          coordinate={[
            data[index].location.longitude,
            data[index].location.latitude,
          ]}>
          <SvgLocation width={35} height={35} />
        </MapboxGL.MarkerView>
      </MapboxGL.MapView>
    </Container>
  );
};

export default ViewForm;
