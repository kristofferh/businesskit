import styled from "@emotion/styled";

export const Container = styled.span<{ background?: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  background: ${({ background }) => background};
  border-radius: 2px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  max-width: 100%;
  line-height: 1;
`;

export const Inner = styled.span`
  padding: 4px 8px 4px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RemoveContainer = styled.span`
  margin-left: -4px;
  padding: 0 4px 0 0;
  cursor: pointer;
  display: inline-flex;
`;

export const Remove = styled.button`
  padding: 0;
  cursor: pointer;
  appearance: none;
  border: 0;
  background: transparent;

  &:focus {
    outline: 2px solid rgb(255, 255, 0);
  }
`;
