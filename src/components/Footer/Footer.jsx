import React from "react";
import {
  ContainerContact,
  FooterText,
  ApplicationForm,
  PanelGameOver,
  Input,
  InsertToProject,
  TxtLabel,
  SectionContainerContactWrapper,
  ButtonStart,
  TextArea,
} from "./FooterStyles";

const Footer = () => {
  return (
    <SectionContainerContactWrapper>
      <ContainerContact>
        <PanelGameOver>
          <InsertToProject>
            &gt;&gt; INSERT COIN TO START PROJECT &lt;&lt;
          </InsertToProject>

          <ApplicationForm>
            <div>
              <TxtLabel>PLAYER NAME:</TxtLabel>
              <Input type="text" placeholder="AAA" />
            </div>
            <div>
              <TxtLabel>CONTACT CHANNEL (EMAIL):</TxtLabel>
              <Input type="email" placeholder="player@email.com" />
            </div>
            <div>
              <TxtLabel>MISSION BRIEF:</TxtLabel>
              <TextArea rows="4" placeholder="Describe el objetivo..." />
            </div>

            <ButtonStart type="submit">START GAME</ButtonStart>
          </ApplicationForm>

          <FooterText>© 2026 LUCA GIOBANELLI - ARGENTINA</FooterText>
        </PanelGameOver>
      </ContainerContact>
    </SectionContainerContactWrapper>
  );
};

export default Footer;
