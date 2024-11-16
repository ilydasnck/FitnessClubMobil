import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#641D3D',
    justifyContent: 'center',
  },
  yanyana: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    flex: 1,
  },
  yanyana2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  text2: {
    fontSize: 40,
    color: '#BDBCC2',
  },
  text3: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  girisContainer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 50,
    justifyContent: 'space-between',
  },
  girisText: {
    color: '#641D3D',
    fontSize: 20,
  },
  girisText2: {
    color: '#BDBCC2',
    fontSize: 20,
  },
  girisText3: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconWrapper: {
    borderBottomWidth: 2, // İkonun altına çizgi ekler
    borderBottomColor: '#BDBCC2', // Çizgi rengi
    paddingBottom: 4, // İkon ile çizgi arasındaki boşluk
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#641D3D',
    borderRadius: 30,
    padding: 10,
    marginTop: 60,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ortala: {
    alignItems: 'center',
  },
});
