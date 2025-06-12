import styled from "styled-components";

// Basic Styled Component
const BasicButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

// children 자동 전달
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

// Props 기반 Dynamic Styling
const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Button을 확장한 새로운 컴포넌트
const LargeButton = styled(BasicButton)`
  font-size: 20px;
  padding: 15px 30px;
`;

export default function StyledComponentExample() {
  return (
    <div>
      <h1>StyledComponentExample</h1>
      <BasicButton>베이직 버튼</BasicButton>
      <Container>
        <Button primary>Primary</Button>
        <Button>Default</Button>
      </Container>
      <LargeButton>라지 버튼</LargeButton>
    </div>
  );
}
