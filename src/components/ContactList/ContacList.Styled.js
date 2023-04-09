import styled from 'styled-components';
import { AiTwotoneDelete } from 'react-icons/ai';

export const Item = styled.li`
  border: 1px solid rgba(164, 155, 123, 0.8);
  border-radius: 3px;
  padding: 5px;
  display: flex;
  gap: 10px;
  font-size: 18px;
  margin-top: 5px;
`;
export const Button = styled.button`
  margin-left: auto;
  padding: 5px;
  width: 80px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: transparent;
  }
`;

export const Loader = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: calc(75%);
  left: calc(50% - 32px); */
`;

export const Delete = styled(AiTwotoneDelete)`
  fill: #3399cc;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.07);
    box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
  }
`;
