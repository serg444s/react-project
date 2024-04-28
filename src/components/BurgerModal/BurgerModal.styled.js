import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  /* width: 100%; */
  height: 500px;
  padding: 20px 16px;
  background-color: #ffffff;
`;

export const StyledIconSupport = styled.svg`
  stroke-opacity: 0.5px;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSypport = styled.button`
  width: 129px;
  height: 61px;
  font-weight: 600;
  border: none;
  padding: 0;
  outline: none;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #fff;
  background-image: url('/src/img/svg.svg');
  background-repeat: no-repeat;
  background-color: transparent;
  &:hover {
    border: none;
    outline: none;
  }
`;

export const Btn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`;

export const BottomContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const BtnGoIt = styled.button`
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;

  &:hover {
    border: none;
    outline: none;
  }
`;

export const ImgContainer = styled.div`
  width: 1053px;
  height: 563px;
  background-image: url('../../img/vector-x2.png');
`;
