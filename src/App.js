import './App.css';
import CheckBox from './components/checkBox';
import DropDown from './components/dropdown';
import InputFile from './components/inputFile';
import InputText from './components/inputText';
import Radio from './components/radio';


function App() {
  return (
    <>
      <InputText /><br/>
      <CheckBox /><br/>
      <DropDown /><br/>
      <Radio /><br/>
      <InputFile />
    </>
  );
}

export default App;
