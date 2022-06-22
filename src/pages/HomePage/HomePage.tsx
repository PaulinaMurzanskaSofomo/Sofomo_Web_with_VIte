import { useId } from "react";
import { whatWeDolist } from "../../assets/content/homepage/SectionApproach";
import { theme } from "../../themes/MainTheme";
import {
  TestimonialsSwiper,
  ImagesSwiper,
  Banner,
  List,
  ListItem,
  Grid,
  PageView,
  Title,
} from "../../components/molecules";
import { leadersLogoList, partnersLogosList } from "../../assets/logos/logoLists";
import { featuresList } from "../../assets/content/homepage/SectionClientSuccess";
import { Typography, Image, SectionContainer } from "../../components/atoms";
import { clock } from "../../assets/icons";
import { ROUTE } from "../../routes";
import { ReactSVG } from "react-svg";
import {
  tenYears,
  circles,
  clientsCollage,
  owners,
  techsHorizontal,
  techsVertical,
  heroBase,
  heroAnimated,
} from "../../assets/images";
import { StyledHomePage, StyledClockImage, StyledParagraphWrapper } from "./StyledHomePage";
import { NestedDropdownList } from "../../organisms";
import { MotionContainer } from "../../libs/framer";
import { useContactFormContext } from "../../context/ContactFormContext";
import { useTabletScreen } from "../../hooks";
import { useResize } from "../../hooks/useResize";

export const HomePage = () => {
  const isMediumScreen = useTabletScreen();

  return (
    <StyledHomePage>
      <PageView
        animatedComponent={<ReactSVG src={heroAnimated} />}
        animatedSvg
        image={heroBase}
        variant="home"
        btnLabel="Contact Us"
        btnWidth="20rem"
      >
        <Title
          title="Scale your development team with Sofomo"
          titleVariant="heading_2"
          titleColor={theme.colors.dark}
          margin="0"
        />
        <MotionContainer>
          <StyledParagraphWrapper>
            <Typography variant="body_text_9">
              Sofomo provides exceptional development teams to innovative companies across the
              world. Our developers join your team and become your superpower!
            </Typography>
          </StyledParagraphWrapper>
        </MotionContainer>
      </PageView>
      <Banner
        image={tenYears}
        title="Exceptional development teams for startups to industry leaders"
        backgroundColor={theme.colors.gray000}
        imageInner
        titleColor={theme.colors.dark}
        titleVariant="heading_8"
      >
        <Grid itemsList={leadersLogoList} variant="grid-4-items" />
      </Banner>
      <PageView
        background={theme.colors.blue}
        image={owners}
        variant="primary"
        btnLabel="Our Story"
        btnPath={ROUTE.OUTSOURCE}
        btnWidth="18.6rem"
        btnVariant="tertiary"
        flexDirection="column"
      >
        <Title
          quotationMarkColor={theme.colors.white}
          quotationMarkSize="3rem"
          label="Your struggle is real. Sofomo can help."
          labelColor="#b5bff4"
          titleColor={theme.colors.white}
          titleVariant="heading_4"
          titleHighlighted="We understand that scaling development team is the hardest thing"
          titleAfter="digital companies do, period.
          That'&nbsp;why we started Sofomo a decade ago."
          highlightColor={theme.colors.purpleHighlight}
        />
      </PageView>
      <PageView
        image={clientsCollage}
        variant="secondary"
        btnLabel="Client Success"
        btnPath={ROUTE.OUTSOURCE}
      >
        <Title
          label="Client Success"
          title="10+ years of amazing"
          titleHighlighted="client relationships"
          titleVariant="heading_3"
          titleColor={theme.colors.dark}
          margin="0"
        />
        <MotionContainer>
          <List variant="standard" margin="3.5rem 0 1rem 0">
            {featuresList.map((item) => (
              <ListItem
                key={useId()}
                icon={item.icon}
                variant="icon-left"
                iconWidth="4rem"
                listItem={item.title}
                margin="0 0 2.5rem 0"
              />
            ))}
          </List>
        </MotionContainer>
      </PageView>
      <PageView btnLabel="What We Do" btnPath={ROUTE.OUTSOURCE} variant="noImage">
        <Title
          titleVariant="heading_3"
          titleColor={theme.colors.dark}
          label="Proven Approach"
          title="Sofomo developers join your team&nbsp;become"
          titleHighlighted="YOUR superpower!"
        />
        <MotionContainer>
          <List variant="split" margin="3.5rem 0 2.5rem 0">
            {whatWeDolist.map((item) => (
              <ListItem
                checkIconColor={theme.colors.blue}
                key={useId()}
                iconWidth="1.6rem"
                variant="icon-left"
                listItem={item}
                margin="0 0 1rem 0"
              />
            ))}
          </List>
        </MotionContainer>
      </PageView>
      <ImagesSwiper />
      <SectionContainer background={theme.colors.gray000}>
        <TestimonialsSwiper />
      </SectionContainer>
      <PageView
        background={theme.colors.purple}
        variant="skillset"
        flexDirection="column"
        image={isMediumScreen ? techsHorizontal : techsVertical}
        btnLabel="Learn More"
        btnPath={ROUTE.OUTSOURCE}
      >
        <StyledClockImage>
          <Image src={clock} alt="clock" />
        </StyledClockImage>
        <Title
          titleVariant="heading_3"
          margin="0"
          titleColor={theme.colors.white}
          title="With our skillset,
          We've&nbsp;got&nbsp;you covered"
        />
        <NestedDropdownList />
      </PageView>
      <PageView variant="centeredNoImage" btnLabel="Contact Us" btnWidth="20rem">
        <Title
          label="we're ready to get started"
          titleVariant="heading_3"
          titleColor={theme.colors.dark}
          title={
            <span>
              Let's talk about your
              <br /> development team needs
            </span>
          }
        />
      </PageView>
      <Banner
        image={circles}
        title="Companies big and small alike choose Sofomo as their development
        partner"
        backgroundColor={theme.colors.blue}
        imageOuter
        titleVariant="heading_6"
        titleColor={theme.colors.white}
        animated
      >
        <MotionContainer>
          <Grid itemsList={partnersLogosList} variant={"grid-6-items"} />
        </MotionContainer>
      </Banner>
    </StyledHomePage>
  );
};
