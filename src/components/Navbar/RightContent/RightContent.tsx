import AuthModal from "@/components/Modal/Auth/AuthModal";
import React from "react";
import AuthButtons from "./AuthButtons";

type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <AuthButtons />
    </>
  );
};
export default RightContent;
