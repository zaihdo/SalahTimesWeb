"use client";

import { Header2 } from "@/components/Header2";
import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
  NavIcon,
} from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" horizontal="center" gap="s" align="center">
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="16"
        >
          {/* <Logo dark icon="/trademarks/wordmark-dark.svg" href="https://once-ui.com" size="xs" />
          <Logo light icon="/trademarks/wordmark-light.svg" href="https://once-ui.com" size="xs" /> */}
          <Text>🕌</Text>
          <Line vert background="neutral-alpha-strong" />
          <Text marginX="4">
            <LetterFx trigger="instant">Salaah Times Botswana</LetterFx>
          </Text>
        </Badge>
        <Heading variant="display-strong-xl" marginTop="24">
          Pray your Salaah on time with Jama'ah
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
        >
          Accross every city and masjid in Botswana 🇧🇼
        </Text>
        
        <Button
          id="docs"
          href="https://docs.once-ui.com/once-ui/quick-start"
          data-border="rounded"
          weight="default"
          prefixIcon="copy"
          arrowIcon
        >
          Download the app now
        </Button>
      </Column>
    </Column>
  );
}
