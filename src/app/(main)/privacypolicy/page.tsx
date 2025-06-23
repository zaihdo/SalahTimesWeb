// src/app/(main)/privacypolicy/page.tsx

import { Column, Text, Heading } from "@once-ui-system/core";

export default function PrivacyPolicy() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Heading size="xl" margin="m">
        Privacy Policy
      </Heading>
      <Column maxWidth="m">
      <Text size="l" margin="l">
          <Text>This privacy policy applies to the SalaahTimesBotswana prayer times app, which is a fully offline application that does not collect, store, or process any user data.</Text>
          <br />
          <br />
          <Text variant="label-strong-l">Data Collection</Text>
          <br />
          <br />
          <Text>Data Collection: We do not collect any personal data or information from our users. Our app is designed to function entirely offline, and we do not request or require any user input or data to operate.</Text>
          <br />
          <br />
          <Text variant="label-strong-l">Data Storage</Text>
          <br />
          <br />
          <Text>We do not store any user data or information on our servers or in our app. Our app is a self-contained, offline application that does not have the ability to store or retain any user data.</Text>
          <br />
          <br />
          <Text variant="label-strong-l">Data Processing</Text>
          <br />
          <br />
          <Text>We do not process any user data or information. Our app is designed to provide prayer times and other relevant information based on pre-loaded data, and we do not use any user data or input to generate this information.</Text>
          <br />
          <br />
          <Text variant="label-strong-l">User Data Protection</Text>
          <br />
          <br />
          <Text>Since we do not collect, store, or process any user data, we do not have any user data to protect. Our app is designed to be a secure and private way for users to access prayer times and other relevant information.</Text>
          <br />
          <br />
          <Text variant="label-strong-l">Changes to this Policy</Text>
          <br />
          <br />
          <Text>We may update this privacy policy from time to time to reflect changes in our app or our practices. However, since we do not collect, store, or process any user data, we do not anticipate making any significant changes to this policy.</Text>
          <br />
          <br />
          <Text variant="label-strong-l">Contact Us</Text>
          <br />
          <br />
          <Text>If you have any questions or concerns about this privacy policy, please contact us at [zaidhimran2000@gmail.com].</Text>
          <br />
          <br />
          <Text variant="label-strong-l">Acknowledgement</Text>
          <br />
          <br />
          <Text>By using our app, you acknowledge that you have read and understood this privacy policy, and you agree to our practices regarding the collection, storage, and processing of user data.</Text>
          <br />
          <br />
          <Text variant="label-strong-l">Effective Date</Text>
          <br />
          <br />
          <Text> This privacy policy is effective as of 22 June 2025 and may be updated from time to time.</Text>
        </Text>
        </Column>
    </Column>
  );
}