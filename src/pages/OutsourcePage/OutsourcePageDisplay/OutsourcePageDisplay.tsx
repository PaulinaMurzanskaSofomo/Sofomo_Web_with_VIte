import React, { useId } from "react";
import { aboutList } from "../../../assets/content/landingOutsource/SectionOutsTop";
import {
  List,
  ListItem,
  Grid,
  Banner,
  Card,
  PageView,
  Title,
  ImagesSwiper,
} from "../../../components/molecules";
import { theme } from "../../../themes/MainTheme";
import { checkSvg } from "../../../assets/icons";
import { developersShort } from "../../../assets/content/developersShort";
import { partnersLogosList, logosOutsource } from "../../../assets/logos/logoLists";
import { outsourceCards } from "../../../assets/content/landingOutsource/SectionHowWePartner";
import { Button, Typography, DottedArrow } from "../../../components/atoms";
import {
  heroOutsource,
  tenYears,
  owners,
  clientsCollage,
  jimConning,
  circles,
} from "../../../assets/images";
import {
  StyledArrow,
  StyledGridWrapper,
  StyledListWrapper,
  StyledLoopWrapper,
  StyledOutsourcePageDisplay,
  StyledStickyForm,
  StyledStickyContainer,
  WrapperStickyRelative,
  StyledButtonWrapper,
  StyledCardWhite,
  StyledAvatar,
} from "./StyledOutsourcePageDisplay";
import { ContactModal } from "../../../organisms";
import { useContactFormContext } from "../../../context/ContactFormContext";
import { useLaptopScreen, useScreenGraterThanTablet } from "../../../hooks";
import { MotionContainer } from "../../../libs/framer";

interface Props {
  stickyForm: boolean;
  centeredItem: string;
  refsArray: React.MutableRefObject<HTMLDivElement | null>[];
  handleScroll: VoidFunction;
}

export const OutsourcePageDisplay = ({
  stickyForm,
  handleScroll,
  centeredItem,
  refsArray,
}: Props) => {
  const { setFormActive } = useContactFormContext();
  const laptop = useLaptopScreen();
  const minTablet = useScreenGraterThanTablet();

  return (
    <WrapperStickyRelative>
      <StyledStickyContainer>
        <StyledStickyForm className={stickyForm ? "show-modal" : ""}>
          <ContactModal
            formTitle="Get in touch"
            formSubtitle="We don’t have call centers. Our leadership will discuss your needs."
            outsource
          />
        </StyledStickyForm>
      </StyledStickyContainer>
      <StyledOutsourcePageDisplay>
        <PageView variant="intro" image={heroOutsource}>
          <Title
            labelColor={theme.colors.blue}
            titleVariant="heading_2"
            titleColor={theme.colors.dark}
            label="outsource development company"
            title="Trusted outsource developers with Sofomo"
          />
          <MotionContainer>
            <List variant="standard">
              {aboutList.map((item) => (
                <ListItem
                  key={useId()}
                  variant="icon-left"
                  listItem={item}
                  margin="0 0 1rem 0"
                  icon={checkSvg}
                />
              ))}
            </List>
          </MotionContainer>
          <StyledArrow onClick={handleScroll}>
            <DottedArrow variant="down" backgroundColor="none" />
          </StyledArrow>
        </PageView>
        <StyledGridWrapper>
          {laptop && (
            <Typography variant="body_text_4" color={theme.colors.gold} width="30rem">
              10+ Years of partnering
            </Typography>
          )}
          <StyledLoopWrapper>
            <Grid
              variant="grid-5-items"
              itemsList={logosOutsource.concat(logosOutsource)}
              additionalVariant="loop"
            />
          </StyledLoopWrapper>
        </StyledGridWrapper>
        <Banner
          backgroundColor={theme.colors.gray000}
          titleVariant="heading_8"
          titleColor={theme.colors.dark}
          image={tenYears}
          imageInner
          title="10+ Years of success"
          subtitle="With the world’s most innovative companies"
        >
          <StyledLoopWrapper>
            <Grid
              variant="grid-5-items"
              additionalVariant="loop"
              itemsList={logosOutsource.concat(logosOutsource)}
            />
          </StyledLoopWrapper>
        </Banner>
        <PageView background={theme.colors.purple} variant="halfWidth">
          <Title
            titleVariant="heading_3"
            titleColor={theme.colors.white}
            label="Our developers"
            labelColor={theme.colors.white}
            title={
              <span>
                With our skillset,
                <br />
                We've got you covered
              </span>
            }
          />
          <MotionContainer delay={0.2}>
            <StyledListWrapper>
              {developersShort.map((item) => (
                <List variant="standard" className="grid-area" margin="0" key={item.id}>
                  <ListItem
                    listItem={item.type}
                    variant="icon-left-bold"
                    itemColor="white"
                    icon={item.icon}
                    margin="0 0 1.5rem 0"
                  />
                  <List variant="standard" margin="0">
                    {item.role.map((item) => (
                      <ListItem
                        key={useId()}
                        checkIconColor={theme.colors.white}
                        listItem={item.title}
                        variant="icon-left"
                        itemColor="white"
                        iconMargin="0 1.5rem 0 0"
                        margin="0 0 1.5rem 0"
                      />
                    ))}
                  </List>
                </List>
              ))}
            </StyledListWrapper>
          </MotionContainer>
        </PageView>
        <PageView variant="tertiary" background={theme.colors.blue} image={owners}>
          <Title
            titleVariant="heading_3"
            titleColor={theme.colors.white}
            label="CLOSE PARTNERSHIPS"
            title="How we partner with you"
            margin="0 0 5.5rem 0"
          />
          {outsourceCards.map((item, i) => (
            <StyledCardWhite
              ref={refsArray[i]}
              id={`card${i}`}
              key={i}
              className={centeredItem === `card${i}` ? "animate-card" : ""}
            >
              <Card
                title={item.title}
                headingColor={
                  centeredItem === `card${i}` && minTablet ? theme.colors.blue : theme.colors.white
                }
                variant="large-responsive"
                id={`card${i}`}
              >
                <Typography
                  variant="body_text_9"
                  color={
                    centeredItem === `card${i}` && minTablet
                      ? theme.colors.blue
                      : theme.colors.white
                  }
                >
                  {item.description}
                </Typography>
              </Card>
            </StyledCardWhite>
          ))}
        </PageView>
        <PageView variant="quaternary" image={clientsCollage} flexDirection="column">
          <Title
            titleVariant="heading_3"
            titleColor={theme.colors.dark}
            label="CLIENT SUCCESS"
            title="Great companies trust Sofomo as their outsource development partner"
          />
          <Typography variant="body_text_11">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.”
          </Typography>
          <StyledAvatar src={jimConning} alt="jim conning" />
        </PageView>
        <ImagesSwiper />
        <PageView variant="withArrow">
          <Title
            label="WE’RE READY TO GET STARTED"
            titleVariant="heading_3"
            titleColor={theme.colors.dark}
            title="Let’s talk about 
            your outsource development needs"
            margin="0 auto"
          />
          <StyledArrow className="arrow-rotating">
            <DottedArrow variant="down" />
          </StyledArrow>
        </PageView>
        <Banner
          image={circles}
          title="Innovators trust Sofomo as their development partner."
          backgroundColor={theme.colors.blue}
          imageOuter
          titleVariant="heading_6"
          titleColor={theme.colors.white}
          className="outsource"
          animated
        >
          <MotionContainer>
            <Grid variant="grid-6-items" itemsList={partnersLogosList} />
          </MotionContainer>
        </Banner>
      </StyledOutsourcePageDisplay>
      <StyledButtonWrapper>
        <Button
          onClick={() => {
            setFormActive(true);
          }}
          variant="secondary outsource-form"
          label="Contact Us Today !"
        />
      </StyledButtonWrapper>
    </WrapperStickyRelative>
  );
};
