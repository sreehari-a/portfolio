import React, { memo, useEffect, useState } from "react";
import stylize from "../../../utils/stylize";
import styles from "./styles";
import { useInjectReducer } from "../../../utils/injectReducer";
import { useInjectSaga } from "../../../utils/injectSaga";
import reducer from "./reducer";
import saga from "./saga";
import MessageForm from "./messageForm";
import { createStructuredSelector } from "reselect";
import { sendMessage } from "./actions";
import { selectLoader } from "./selectors";
import { connect } from "react-redux";
import { compose } from "redux";
import LoadingIndicator from "../../../components/LoadingIndicator";

const key = "messageForm";
function ContactTab(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { classes, loading, fetchContent } = props;
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    setShowLoader(loading);
  }, [props.loading]);
  return (
    <div className={classes.container}>
      {(showLoader && <LoadingIndicator />) || <MessageForm loading={loading} fetchContent={fetchContent}/>}
      {/* <MessageForm loading={loading} fetchContent={fetchContent}/> */}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  loading: selectLoader(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchContent: (payload) => dispatch(sendMessage(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default stylize(compose(withConnect, memo)(ContactTab), styles);
