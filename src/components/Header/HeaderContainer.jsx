import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {setAuthUserDate} from './../../redux/authReducer'
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserDate(id, email, login);
                }
            });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

let mapStateToprops = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToprops, {setAuthUserDate})(HeaderContainer);