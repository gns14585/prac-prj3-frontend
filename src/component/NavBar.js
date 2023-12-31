import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  let navigate = useNavigate();
  return (
    <Flex>
      <Button onClick={() => navigate("/")}>home</Button>
      <Button onClick={() => navigate("/signup")}>회원가입</Button>
      <Button onClick={() => navigate("/login")}>로그인</Button>
    </Flex>
  );
}
