import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import {
  ScrollingTextSection,
  ScrollingTextContainer,
  ScrollingTextWrapper,
  AnimatedText,
  TextLine
} from './ScrollingTextStyles';

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const texts = textRefs.current.filter(Boolean);

    // Character fill animation - simplified
    texts.forEach((textElement) => {
      const splitText = new SplitType(textElement, { types: 'chars' });

      gsap.fromTo(
        splitText.chars,
        {
          color: 'transparent'
        },
        {
          color: '#FFE600',
          stagger: 0.005,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
          }
        }
      );
    });

    // Horizontal scroll animation for line 1 - ultra smooth
    if (line1Ref.current) {
      gsap.to(line1Ref.current, {
        x: '-15%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Horizontal scroll animation for line 2 - ultra smooth
    if (line2Ref.current) {
      gsap.fromTo(
        line2Ref.current,
        { x: '-15%' },
        {
          x: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const line1 = `${t('sports.scrolling.text1', 'BE STRONG')}. ${t('sports.scrolling.text2', 'BE CONFIDENT')}. ${t('sports.scrolling.text3', 'BE UNSTOPPABLE')}. `;
  const line2 = `${t('sports.scrolling.text2', 'BE CONFIDENT')}. ${t('sports.scrolling.text3', 'BE UNSTOPPABLE')}. ${t('sports.scrolling.text4', 'BE MORE HUMAN')}. `;

  return (
    <ScrollingTextSection ref={sectionRef}>
      <ScrollingTextContainer>
        <ScrollingTextWrapper>
          <TextLine ref={line1Ref}>
            <AnimatedText ref={(el) => (textRefs.current[0] = el)}>
              {line1}{line1}{line1}
            </AnimatedText>
            <AnimatedText ref={(el) => (textRefs.current[1] = el)}>
              {line1}{line1}{line1}
            </AnimatedText>
          </TextLine>

          <TextLine ref={line2Ref}>
            <AnimatedText ref={(el) => (textRefs.current[2] = el)}>
              {line2}{line2}{line2}
            </AnimatedText>
            <AnimatedText ref={(el) => (textRefs.current[3] = el)}>
              {line2}{line2}{line2}
            </AnimatedText>
          </TextLine>
        </ScrollingTextWrapper>
      </ScrollingTextContainer>
    </ScrollingTextSection>
  );
};

export default ScrollingText;
