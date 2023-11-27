import React from 'react'
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text, } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactEmailProps = {
    message: string;
    senderEmail: string;
}

export default function ContactFormEmail({ message, senderEmail }:ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-[#0b0b0b] text-white">
          <Container>
            <Section className="bg-white/5 border border-black/5 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight !text-white">
                You received the following message from the contact form:
              </Heading>
              <Text className="!text-white">{message}</Text>
              <Hr />
              <Text className="!text-white">The sender&apos;s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
