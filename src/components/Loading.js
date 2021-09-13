import styled from "styled-components";
import { ReactComponent as LoadingSVG } from "../pics/loading.svg";
import { COLOR } from "../constants/styles";

const LoadingWrapper = styled.div`
  background: ${COLOR.loadingBG};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <LoadingSVG />
    </LoadingWrapper>
  );
}
