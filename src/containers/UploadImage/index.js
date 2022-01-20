import React from "react";
import { bool } from "prop-types";
import AddIcon from "@mui/icons-material/Add";

import Loading from "../../components/Loading";
import { HorizontalRule, IconButton } from "../../components/Styled";
import useFetchImage from "../../hooks/useFetchImage";

const UploadImage = ({ showCta }) => {
  const { url, isLoading, refetch, isFetching } = useFetchImage();

  const handleClick = () => {
    refetch();
  };

  return (
    <>
      <HorizontalRule />
      {isLoading || isFetching ? (
        <Loading />
      ) : showCta ? (
        <img
          src={url}
          width="100%"
          height="250px"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        />
      ) : (
        <IconButton
          style={{
            marginTop: "20px",
            marginBottom: "15px",
          }}
          onClick={() => handleClick()}
        >
          <AddIcon
            color="disabled"
            style={{ fontSize: "100px", marginTop: "75px" }}
          />
        </IconButton>
      )}
    </>
  );
};

UploadImage.propTypes = {
  showCta: bool,
};

export default UploadImage;
