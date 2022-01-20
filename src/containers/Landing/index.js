import React from "react";
import { object, func, array } from "prop-types";
import { connect } from "react-redux";

import ApprovedImages from "../ApprovedImages";
import UploadImage from "../UploadImage";
import CtaPanel from "../../components/CtaPanel";
import {
  LandingPage,
  Box,
  Typography,
  HorizontalRule,
} from "../../components/Styled";
import useFetchImage from "../../hooks/useFetchImage";
import { addImage } from "../../redux/actions";

const Landing = (props) => {
  const { url, showCta, setShowCta } = useFetchImage();

  const approve = () => {
    setShowCta(false);
    props.addImage({ id: Date.now(), url: url });
  };
  const decline = () => {
    setShowCta(false);
  };

  return (
    <>
      <LandingPage>
        <Box>
          <Typography style={{ marginBottom: "10px" }}>
            Image Approval App
          </Typography>
          <HorizontalRule />
          <Typography style={{ marginTop: "20px", marginBottom: "10px" }}>
            {`Approved Images (${props.images.length})`}
          </Typography>
          <ApprovedImages />
          <UploadImage showCta={showCta} />
          <HorizontalRule />
          <CtaPanel approve={approve} decline={decline} showCta={showCta} />
        </Box>
      </LandingPage>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (image) => dispatch(addImage(image)),
  };
};

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

Landing.propTypes = {
  props: object,
  images: array,
  addImage: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
