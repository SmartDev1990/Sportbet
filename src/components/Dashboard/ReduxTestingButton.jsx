import {Button} from '@mui/material';

// New redux dependencies
import {connect} from "react-redux";
import {setName} from "@actions/userActions";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};
  
  const mapDispatchToProps = (dispatch) => {
      return {
        setName: (name) => {
              dispatch(setName(name));
          }
      };
  };

  
const ReduxTestingButton = (props) => (
    <Button id={props.user.name} onClick={() => props.setName('WindAeolus')}>Redux Test Button</Button>
);


export default connect(mapStateToProps, mapDispatchToProps)(ReduxTestingButton);