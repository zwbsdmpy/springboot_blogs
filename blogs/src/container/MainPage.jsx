import {connect} from "react-redux";
import MainPageView from "../component/MainPageView";
import * as actionType from "../redux/action/actionType";

const mapStateToProps = (state) => {
    return (
        state: state
    )
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageView)
