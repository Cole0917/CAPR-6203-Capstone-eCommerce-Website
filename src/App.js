import {BrowserRouter as Router} from "react-router-dom"
import { DataProvider } from "./globalstate"
import Header from "./components/header/header"
import MainPages from './components/mainpages/Pages'

function App() {
    return (
        <DataProvider>
            <Router>
        <div className="App">
            <Header/>
            <MainPages/>
        </div>
        </Router>
        </DataProvider>
    );
}

export default App;