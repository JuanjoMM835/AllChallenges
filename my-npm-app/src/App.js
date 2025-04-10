import React from 'react';
import Crud from './components/Crud';
// se invoca el crud para que la logica se plasme en pantalla 
function App() {
    return (
        <div className="app">
            <Crud /> 
        </div>
    );
}

export default App;
// solo tengo para decir que al momento de cargar por 1ra vez se demora un poquitin 1 minuto aproximadamente 
// despues de eso si lo hace bien el useeffect hace buen trabajo :)