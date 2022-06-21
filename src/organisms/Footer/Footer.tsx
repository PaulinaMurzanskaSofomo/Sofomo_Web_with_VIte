import { useId } from "react";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../../themes/MainTheme";
import { offices } from "../../assets/content/footer/Offices";
import { socialIconsList } from "../../assets/icons/socialIconsList";
import { footerLists } from "../../assets/content/footer/SectionAbout";
import { Image, Typography, SectionContainer } from "../../components/atoms";
import { ListItem, List, Card } from "../../components/molecules";
import { StyledSpan, StyledCardBody, StyledFooter, StyledDividerLine } from "./StyledFooter";
import { useContactFormContext } from "../../context/ContactFormContext";

export const Footer = () => {
  const { setFormActive } = useContactFormContext();
  const location = useLocation();
  const defaultPath = location.pathname;

  return (
    <SectionContainer background={theme.colors.gray000} as="footer">
      <StyledFooter>
        {offices.map((office, i) => (
          <Card
            className="grid-area"
            key={useId()}
            title={office.country}
            label={office.headquarter ? "Headquarters" : ""}
            variant="large-nonresponsive"
          >
            {office.data && (
              <StyledCardBody>
                <Image width="5rem" height="5rem" src={office.avatar} alt="avatar" />
                <List variant="plain" margin="0 0 0 1.5rem">
                  {Object.values(office.data).map((item: any) => (
                    <Typography variant="body_text_5" color={theme.colors.gray400} key={useId()}>
                      {item}
                    </Typography>
                  ))}
                </List>
              </StyledCardBody>
            )}
          </Card>
        ))}
        <Card
          className="grid-area"
          socialIconsList={socialIconsList}
          title="About Us"
          variant="small-nonresponsive"
        >
          <Typography as="p" variant="body_text_5" color={theme.colors.gray400} width="30.5rem">
            Sofomo provides high performing development teams to innovative companies. Our
            developers join your team and become your superpower!.
          </Typography>
        </Card>
        {footerLists.map((list) => (
          <Card
            title={list.listTitle}
            className="grid-area"
            variant="small-nonresponsive"
            key={useId()}
          >
            <List variant={"double-list"} margin="0">
              {list.listItems.map((listItem) => (
                <Link to={listItem.path === "" ? defaultPath : listItem.path} key={useId()}>
                  <ListItem
                    as="div"
                    hover
                    hoverWeight="400"
                    variant="plain"
                    listItem={listItem.title}
                    itemColor={theme.colors.gray400}
                    itemWidth="max-content"
                    margin="0 3rem 0 0"
                    onClick={() => {
                      listItem.path === "" ? setFormActive(true) : null;
                    }}
                  />
                </Link>
              ))}
            </List>
          </Card>
        ))}
        <StyledDividerLine />
        <StyledSpan>© All rights reserved Sofomo 2020</StyledSpan>
      </StyledFooter>
    </SectionContainer>
  );
};
