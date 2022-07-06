import './App.css';
import FormBuilder from './FormBuilder';
import {config} from './data';

function App() {
    return (
        <div className='App'>
            <FormBuilder formData={config}/>
        </div>
    );
}

export default App;
