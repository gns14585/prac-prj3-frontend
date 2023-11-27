import { useEffect, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function MemberSignup() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    axios
      .post("/api/member/signup", {
        userId,
        userPassword,
        userNickName,
        userEmail,
      })
      .then(() => {
        console.log("good");
        navigate("/");
      })
      .catch(() => console.log("bad"))
      .finally(() => console.log("done"));
  }

  return (
    <Box>
      <FormControl>
        <FormLabel>id</FormLabel>
        <Input
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel>비밀번호</FormLabel>
        <Input
          value={userPassword}
          type="password"
          onChange={(e) => setUserPassword(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel>닉네임</FormLabel>
        <Input
          value={userNickName}
          onChange={(e) => setUserNickName(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>이메일</FormLabel>
        <Input
          value={userEmail}
          type="email"
          onChange={(e) => setUserEmail(e.target.value)}
        ></Input>
      </FormControl>

      <Button onClick={handleSubmit}>가입</Button>
    </Box>
  );
}
