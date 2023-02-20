import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image
          src="/images/redditFace.svg"
          alt="reddit_face"
          height="30px"
        ></Image>
        <Image
          src="/images/redditText.svg"
          alt="reddit_text"
          height="40px"
          display={{ base: "none", md: "unset" }}
        ></Image>
      </Flex>
      <SearchInput />
    </Flex>
  );
};
export default Navbar;
