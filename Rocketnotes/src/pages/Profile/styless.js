import styled from 'styled-components';
import { AiOutlineCamera } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfilePic = styled.div`
  display: relative;
  height: 200px;
  width: 200px;
  margin: 50px 50px;

  background: url('http://github.com/kimciddev.png');
  background-size: cover;
  object-fit: contain;

  border-radius: 50%;

  > button {
    position: absolute;
    top: 25%;
    left: 52%;

    width: 60px;
    height: 60px;

    border: none;
    border-radius: 50%;

    background-image: url(${AiOutlineCamera});
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;
