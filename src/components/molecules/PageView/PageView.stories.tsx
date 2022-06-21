import React from "react";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../../../themes/MainTheme";
import { PageView, Props } from "./PageView";
import { owners, heroBase, clientsCollage } from "../../../assets/images";
import { Title } from "../../molecules";
import { Typography } from "../../atoms";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { featuresList } from "../../../assets/content/homepage/SectionClientSuccess";
import { whatWeDolist } from "../../../assets/content/homepage/SectionApproach";
import { Card } from "../Card";
import { outsourceCards } from "../../../assets/content/landingOutsource/SectionHowWePartner";
import { developersShort } from "../../../assets/content/developersShort";
import { MotionContainer } from "../../../libs/framer";

export default {
  title: "Organisms/PageView",
  component: PageView,
  argTypes: {
    onClick: { actions: "clicked" },
  },
} as Meta;
const Template: Story<Props> = (args) => (
  <BrowserRouter>
    <div className="container">
      <PageView {...args} />
    </div>
  </BrowserRouter>
);
export const Intro = Template.bind({});
Intro.args = {
  animatedSvg: true,
  image: heroBase,
  variant: "home",
  btnLabel: "Contact Us",
  btnWidth: "20rem",
  children: (
    <>
      <Title title="Scale your development team with Sofomo" titleVariant="heading_2" margin="0" />
      <MotionContainer>
        <div style={{ margin: "1.5rem 0 3rem" }}>
          <Typography variant="body_text_10">
            Sofomo provides exceptional development teams to innovative companies across the world.
            Our developers join your team and become your superpower!
          </Typography>
        </div>
      </MotionContainer>
    </>
  ),
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  background: theme.colors.blue,
  image: owners,
  btnLabel: "Our Story",
  btnWidth: "18.6rem",
  btnVariant: "tertiary",
  children: (
    <>
      <Title
        quotationMarkColor={theme.colors.white}
        quotationMarkSize="3rem"
        label="Your struggle is real. Sofomo can help."
        labelColor="#b5bff4"
        titleColor={theme.colors.white}
        titleVariant="heading_4"
        titleHighlighted="We understand that scaling development team is the hardest thing"
        titleAfter={`digital companies do, period.
        That's\u00a0why we started Sofomo a decade ago.`}
        highlightColor={theme.colors.purpleHighlight}
      />
    </>
  ),
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  image: clientsCollage,
  btnLabel: "Client Success",
  children: (
    <>
      <Title
        label="Client Success"
        title="10+ years of amazing"
        titleHighlighted="client relationships"
        titleVariant="heading_3"
        margin="0"
      />
      <MotionContainer>
        <List variant={"standard"} margin="3.5rem 0 1rem 0">
          {featuresList.map((item: any, i: any) => (
            <ListItem
              key={i}
              icon={item.icon}
              variant={"icon-left"}
              iconWidth="4rem"
              listItem={item.title}
              margin="0 0 2.5rem 0"
            />
          ))}
        </List>
      </MotionContainer>
    </>
  ),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  image: owners,
  background: theme.colors.blue,
  children: (
    <>
      <Title
        titleVariant="heading_3"
        titleColor={theme.colors.white}
        label="CLOSE PARTNERSHIPS"
        title="How we partner with you"
        margin="0 0 5.5rem 0"
      />
      {outsourceCards.map((item: any, i: number) => (
        <Card
          key={i}
          className="card-white"
          title={item.title}
          headingColor={theme.colors.white}
          variant="large-responsive"
          id={`card${i}`}
        >
          <Typography variant="body_text_9">{item.description}</Typography>
        </Card>
      ))}
    </>
  ),
};

export const Centered = Template.bind({});
Centered.args = {
  variant: "centeredNoImage",
  btnLabel: "Contact Us",
  btnWidth: "20rem",
  children: (
    <>
      <Title
        label="we're ready to get started"
        titleVariant="heading_3"
        title="Let's talk about your development team needs"
      />
    </>
  ),
};

export const HalfWidth = Template.bind({});
HalfWidth.args = {
  variant: "halfWidth",
  background: theme.colors.purple,
  children: (
    <>
      <Title
        titleVariant="heading_3"
        titleColor={theme.colors.white}
        label="Our developers"
        title=" With our skillset, We've got you covered"
      />
      <MotionContainer delay={0.2}>
        {developersShort.map((item: any) => (
          <List variant={"standard"} className="grid-area" margin="0" key={item.id}>
            <ListItem
              listItem={item.type}
              variant={"icon-left-bold"}
              itemColor="white"
              icon={item.icon}
              margin="0 0 1.5rem 0"
            />
            <List variant="standard" margin="0 0 0 0">
              {item.role.map((item: any, i: number) => (
                <ListItem
                  key={i}
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
      </MotionContainer>
    </>
  ),
};

export const NoImage = Template.bind({});
NoImage.args = {
  variant: "noImage",
  btnLabel: "What We Do",
  children: (
    <>
      <Title
        titleVariant="heading_3"
        label="Proven Approach"
        title={`Sofomo developers join your team &\u00a0become`}
        titleHighlighted="YOUR superpower!"
      />
      <MotionContainer>
        <List variant="split" margin="3.5rem 0 2.5rem 0 ">
          {whatWeDolist.map((item: any, i: number) => (
            <ListItem
              key={i}
              checkIconColor={theme.colors.blue}
              iconWidth="1.6rem"
              variant="icon-left"
              listItem={item}
              margin="0 0 1rem 0"
              itemColor="black"
            />
          ))}
        </List>
      </MotionContainer>
    </>
  ),
};
