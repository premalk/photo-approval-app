import React, { useRef } from "react";
import { array } from "prop-types";
import { connect } from "react-redux";
import AddIcon from "@mui/icons-material/Add";

import {
  ImageContainer,
  Image,
  ImageLayer,
  Container,
  OverLayImage,
  StyedArrowForwardIosIcon,
} from "../../components/Styled";

const ImageList = (props) => {
  const containerScroll = useRef(null);

  const scrollLeft = () => {
    containerScroll.current.scrollLeft += 70;
  };

  return (
    <Container>
      <ImageContainer className="hide-scrollbar" ref={containerScroll}>
        <ImageLayer>
          {props?.images.length ? (
            props?.images.map((image) => {
              return (
                <OverLayImage
                  src={image.url}
                  key={image.id}
                  width="70px"
                  height="50px"
                />
              );
            })
          ) : (
            <Image>
              <AddIcon style={{ marginTop: "13px" }} color="disabled" />
            </Image>
          )}
        </ImageLayer>
      </ImageContainer>
      <StyedArrowForwardIosIcon onClick={() => scrollLeft()} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

ImageList.propTypes = {
  images: array,
};

export default connect(mapStateToProps)(ImageList);
