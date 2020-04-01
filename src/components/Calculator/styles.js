import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 800px;

  @media (max-width: 668px) {
    & {
      flex-direction: column;
    }
  }
`;
export const Screen = styled.div`
  font-size: 29px;
  font-weight: bold;
  background: #fff;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (max-width: 668px) {
    & {
      order: 0;
    }
  }
`;
export const KeyBoard = styled.div`
  background: #888;
  opacity: 0.5;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  @media (max-width: 668px) {
    & {
      order: 1;
    }
  }
`;
export const Keys = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex: 1;
  min-height: 64px;
  min-width: 100px;
  font-weight: bold;
  background: #0a1b36;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.6s;

  &:hover {
    background: #fff;
    color: #0a1b36;
  }
  &:active {
    transform: translateY(4px);
    background: #0a1b36;
    color: #fff;
  }
`;
export const Valor = styled.input`
  min-height: 200px;
  padding-left: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);

  &:disabled {
    background: #fff;
    color: #000;
    width: 100%;
    height: 100%;
  }
`;
