import './App.css';
import CheckBox from './components/checkBox';
import DropDown from './components/dropdown';
import InputFile from './components/inputFile';
import InputText from './components/inputText';
import Radio from './components/radio';
import Table from './components/table';


function App() {
  return (
    <>
      <InputText /><br />
      <CheckBox /><br />
      <DropDown /><br />
      <Radio /><br />
      <InputFile /><br />
      <Table />
    </>
  );
}

export default App;
