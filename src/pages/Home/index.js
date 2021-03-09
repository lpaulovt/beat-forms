/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {View, FlatList, BackHandler} from 'react-native';
import {
  Container,
  Logo,
  Title,
  Description,
  Subtitle,
  ContainerItem,
} from './styles';

import {useCont} from '../../hooks/index';
import SvgForm from '../../assets/SvgForm';
import SvgArrowRigt from '../../assets/SvgArrowRight';
import SvgShow from '../../assets/SvgShow';
import Button from '../../components/Button';
import formatDate from '../../utils/FormatDate';
import SvgLogout from '../../assets/SvgLogout';

const Home = ({navigation}) => {
  const {data} = useCont();

  return (
    <Container>
      <Button
        label={<SvgLogout />}
        onpress={() => BackHandler.exitApp()}
        style={{
          position: 'absolute',
          top: 35,
          right: 15,
          backgroundColor: '#f3f3f4',
          height: 40,
          width: 40,
          borderRadius: 20,
        }}
      />

      <Logo
        style={{resizeMode: 'contain'}}
        source={require('../../assets/LogoAgrotoolsNew.png')}
      />

      <Title>Seja bem-vindo!</Title>
      <Description>
        Cadastre formulários do seu jeito, de qualquer lugar, a qualquer hora!{' '}
      </Description>

      <Subtitle>Formulários Criados</Subtitle>
      {data.filter((item) => item.isFill === false).length === 0 ? (
        <Description style={{fontSize: 14}}>
          Não há formulários criados recentemente.
        </Description>
      ) : (
        <FlatList
          contentContainerStyle={{paddingBottom: 45, marginTop: 10}}
          showsVerticalScrollIndicator={false}
          data={data}
          style={{width: '100%', height: '10%'}}
          renderItem={({item, index}) => (
            <>
              {item.isFill !== true ? (
                <ContainerItem
                  key={item.id}
                  style={{width: '100%'}}
                  onPress={() =>
                    navigation.navigate('AnswerForm', {index: index})
                  }>
                  <SvgForm width={60} height={60} />
                  <View style={{marginLeft: 5}}>
                    <Subtitle style={{marginTop: 0, fontSize: 14}}>
                      {item.titulo}
                    </Subtitle>
                    <Description
                      style={{
                        fontSize: 12,
                        lineHeight: 14,
                        marginTop: 0,
                        width: '60%',
                      }}>
                      {item.usuario} - Criado em{' '}
                      {formatDate(`${item.dataCadastro}`)}
                    </Description>
                  </View>
                  <SvgArrowRigt style={{position: 'absolute', right: 20}} />
                </ContainerItem>
              ) : null}
            </>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <Subtitle>Formulários Preenchidos</Subtitle>
      {data.filter((item) => item.isFill === true).length === 0 ? (
        <Description style={{fontSize: 14, marginBottom: 20}}>
          Não há formulários preenchidos.
        </Description>
      ) : (
        <FlatList
          contentContainerStyle={{paddingBottom: 45, marginTop: 10}}
          showsVerticalScrollIndicator={false}
          data={data}
          style={{width: '100%', height: '10%'}}
          renderItem={({item, index}) => (
            <>
              {item.isFill === true ? (
                <ContainerItem
                  key={item.id}
                  style={{width: '100%'}}
                  onPress={() =>
                    navigation.navigate('ViewForm', {index: index})
                  }>
                  <SvgForm width={60} height={60} />
                  <View style={{marginLeft: 5}}>
                    <Subtitle style={{marginTop: 0, fontSize: 14}}>
                      {item.titulo}
                    </Subtitle>
                    <Description
                      style={{
                        fontSize: 12,
                        lineHeight: 14,
                        marginTop: 0,
                        width: '60%',
                      }}>
                      {item.usuario} - Criado em{' '}
                      {formatDate(`${item.dataCadastro}`)}
                    </Description>
                  </View>
                  <SvgShow style={{position: 'absolute', right: 20}} />
                </ContainerItem>
              ) : null}
            </>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <Button
        label="Cadastre um novo formulário "
        onpress={() => navigation.navigate('CreateForm')}
      />
    </Container>
  );
};

export default Home;
