import {Component} from "react";
import {connect} from "react-redux";
import {filterSelector, userSelector} from "./selectors";

class App extends Component {

    handleUser = (e) => {
        this.props.dispatch({type: "CHANGE_USERNAME", payload: e.target.value})
    }
    addUser = () => {
        this.props.dispatch({type: "ADD_USER"})
    }
    handleSearch = (e) => {
        this.props.dispatch({type: "CHANGE_SEARCH", payload: e.target.value})
    }
    render() {
        console.log("rendered users", this.props.filteredUsers);
        return (
            <div className="App">
                <input
                    type="text"
                    value={this.props.username}
                    onChange={this.handleUser}
                />
                <button onClick={this.addUser}>Add user</button>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.props.search}
                    onChange={this.handleSearch}
                />
                {this.props.users.map((user, index) => (
                    <div key={index}>{user}</div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state", state);

    return {
        //users: state.users.users,
        users: userSelector(state),
        username: state.users.username,
        search: state.users.search,
        filteredUsers: filterSelector(state)
    }
}

export default connect(mapStateToProps)(App);
