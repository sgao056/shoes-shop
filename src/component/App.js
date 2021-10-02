import react from 'react';
import Header from './Header';
import Products from './Products';

class App extends react.Component{

    render(){
        return (
            <div className="main">
                <Header nickname=''/>
                <Products/>
            </div>
        )
    }
}

export default App;
