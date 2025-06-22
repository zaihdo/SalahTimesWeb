"use client";

import {
  Button,
  Column,
  Fade,
  Line,
  Logo,
  NavIcon,
  Option,
  Row,
  SmartLink,
  ToggleButton,
  UserMenu,
  Text
} from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderProps {
  authenticated?: boolean;
  avatar?: string;
  name?: string;
  subline?: string;
}

const Header2: React.FC<HeaderProps> = ({ authenticated, avatar, name, subline }) => {
  const pathname = usePathname() ?? "";

  return (
    <Row paddingX="8" paddingTop="8" fillWidth position="sticky" horizontal="center" top="0" 
      zIndex={2}>
      <Fade
        fillWidth
        position="absolute"
        top="0"
        height={8}
        pattern={{ display: true, size: "2" }}
      />
      <Row
        as="header"
        border="neutral-alpha-weak"
        maxWidth="l"
        paddingX="m"
        radius="l"
        height="56"
        vertical="center"
        background="page"
      >
        {/* <Row hide="s">
          <Logo dark icon="/trademark/icon-dark.svg" wordmark="/trademark/type-dark.svg" size="s" href="/" />
          <Logo light icon="/trademark/icon-light.svg" wordmark="/trademark/type-light.svg" size="s" href="/" />
        </Row>
        <Row show="s" gap="4" vertical="center" fillWidth>
          <NavIcon />
          <Logo dark icon="/trademark/icon-dark.svg" size="s" href="/" />
          <Logo light icon="/trademark/icon-light.svg" size="s" href="/" />
        </Row> */}
          <Row fillWidth vertical="center" horizontal="end">
            <Row
              hide="s"
              textVariant="label-default-s"
              fillWidth
              gap="16"
              paddingX="l"
              vertical="center"
              horizontal="center"
            >
              <SmartLink href="/" selected={pathname === "/"}><Text onBackground="brand-weak">Home</Text></SmartLink>
              <SmartLink href="/privacypolicy" selected={pathname === "/privacypolicy"}><Text onBackground="brand-weak">Privacy Policy</Text></SmartLink>
            </Row>
          </Row>
      </Row>
    </Row>
  );
};

export { Header2 };
