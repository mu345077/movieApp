var Login = require('./scripts/components/Login');

//import Login from './scripts/components/Login'
import Signup from './scripts/components/Signup'
import  MovieBox from './scripts/components/MovieBox'


var App = React.createClass({

    render: function() {
        return (
            <Router>
                <Route pat  h="/login" component={Login} />[]
            </Router>
        )
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
