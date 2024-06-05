import React, { useState } from "react";
import styled from "styled-components";
import { certification } from "../../data/constants";
import CertficationCard from "../cards/CertficationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Certification = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="Certification">
      <Wrapper>
        <Title>Certification</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          These are Course Completion certificate form NXTWay CCBP 4.0 and Infosys SpringBoard. 
        </Desc>



        <CardContainer>
          {toggle === "all" &&
            certification.map((certificate,index) => <CertficationCard certification={certificate} key={index}/>)}
          {certification
            .filter((item) => item.category === toggle)
            .map((certificate,index) => (
              <CertficationCard certification={certification} key={index} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certification;
