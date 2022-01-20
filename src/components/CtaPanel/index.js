import React from "react";
import { func, bool } from "prop-types";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Typography = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

const StyledCheckIcon = styled(CheckIcon)`
  cursor: pointer;
`;

const StyledClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;

const CtaPanel = ({ approve, decline, showCta }) => {
  return !showCta ? (
    <Typography style={{ marginTop: "30px" }}>
      Click on the + in order to get image recommendations
    </Typography>
  ) : (
    <Flex>
      <StyledClearIcon onClick={() => decline()} />
      <StyledCheckIcon onClick={() => approve()} />
    </Flex>
  );
};

CtaPanel.propTypes = {
  approve: func,
  decline: func,
  showCta: bool,
};

export default CtaPanel;
