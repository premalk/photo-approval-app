import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingBox = styled.div`
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <LoadingBox>
      <CircularProgress style={{ marginTop: "35%", marginLeft: "45%" }} />
    </LoadingBox>
  );
};

export default Loading;
