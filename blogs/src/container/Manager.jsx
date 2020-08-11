import {connect} from "react-redux";
import ManagerView from "../component/ManagerView";
import * as action from "../redux/actionCreater";

const mapStateToProps = (state) => {
    return {
        userData: state.mainView.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(action.login(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerView)
