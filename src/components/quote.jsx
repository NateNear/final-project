/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from "styled-components"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
`
const moveUp = keyframes`
  100%{
    transform: translateY(0);
  }
`

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

span{
  /* background-color: lightblue; */
  position: absolute;
  transform: translateY(3rem);
  animation-name: ${moveUp};
  animation-duration: 2.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.delay};
  font-family: var(--fontL);
  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.author {
    width: 100%;
    text-align: end;
  }
`;


function Quote() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <TextContainer>
        <Text delay='0s'><span>Team Members</span></Text>
        <Text delay='0.4s'><span>&nbsp;A HARINDRA REDDY - 1DS20IS001</span></Text>
        <Text delay='0.8s'><span>&nbsp;ARYAN SINGH CHAUHAN - 1DS20IS021</span></Text>
        <Text delay='1.2s'><span>&nbsp;GOUTHAM B - 1DS20IS036</span></Text>
        <Text delay='1.4s'><span>&nbsp;KARTHIK M CHIPPALAKATTI - 1DS20IS043</span></Text>
        <Text delay='1.8s'><span className='author'>GUIDE - Prof. PRAVEEN M</span></Text>
      </TextContainer>
    </Section>
  );
}

export default Quote;