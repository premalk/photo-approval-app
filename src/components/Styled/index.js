import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const LandingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4%;
`;

export const Box = styled.div`
  height: 70%;
  width: 250px;
  padding: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;

export const Typography = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

export const HorizontalRule = styled.div`
  border-top: 1px solid #d7d8d6;
  align-self: stretch;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Image = styled.div`
  width: 70px;
  height: 50px;
  background-color: #eeeeee;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
`;

export const ImageLayer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  background-color; red;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

export const OverLayImage = styled.img`
  opacity: 0.4;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyedArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
  cursor: pointer;
  margin-top: 10px;
`;

export const IconButton = styled.div`
  width: 100%;
  height: 250px;
  background-color: #eeeeee;
  text-align: center;
  cursor: pointer;
  margin-top: 105px;
`;
