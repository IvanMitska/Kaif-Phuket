import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ScrollingTextSection,
  ScrollingTextContainer,
  ScrollingTextWrapper,
  AnimatedText,
  TextLine
} from './ScrollingTextStyles';

const ScrollingText = () => {
  const { t } = useTranslation();

  const line1 = `${t('sports.scrolling.text1', 'BE STRONG')}. ${t('sports.scrolling.text2', 'BE CONFIDENT')}. ${t('sports.scrolling.text3', 'BE UNSTOPPABLE')}. `;
  const line2 = `${t('sports.scrolling.text2', 'BE CONFIDENT')}. ${t('sports.scrolling.text3', 'BE UNSTOPPABLE')}. ${t('sports.scrolling.text4', 'BE MORE HUMAN')}. `;

  return (
    <ScrollingTextSection>
      <ScrollingTextContainer>
        <ScrollingTextWrapper>
          <TextLine className="scroll-left">
            <AnimatedText>
              {line1}{line1}{line1}
            </AnimatedText>
            <AnimatedText>
              {line1}{line1}{line1}
            </AnimatedText>
          </TextLine>

          <TextLine className="scroll-right">
            <AnimatedText>
              {line2}{line2}{line2}
            </AnimatedText>
            <AnimatedText>
              {line2}{line2}{line2}
            </AnimatedText>
          </TextLine>
        </ScrollingTextWrapper>
      </ScrollingTextContainer>
    </ScrollingTextSection>
  );
};

export default ScrollingText;
