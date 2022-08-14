import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
  `;

const SocialContainer = styled.div`
    display: flex;
  `;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;

const Title = styled.h3`
    margin-bottom: 30px;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
  
  `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

const Lin = styled.a`
text-decoration: none;
color: black;
  `

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>A & G</Logo>
        <Desc>
          As Asia’s Online Fashion Destination, we create endless style possibilities through an ever-expanding range of products form the most coveted international and local brands, putting you at the centre of it all.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Lin href="#">Help Center</Lin></ListItem>
          <ListItem><Lin href="#">Return Policy</Lin></ListItem>
          <ListItem><Lin href="#">Privacy Policy</Lin></ListItem>
          <ListItem><Lin href="#">Terms and Conditions</Lin></ListItem>
          <ListItem><Lin href="#">Track Your Order</Lin></ListItem>
          <ListItem><Lin href="#">Member Centre</Lin></ListItem>
          <ListItem><Lin href="#">Order Tracking</Lin></ListItem>
          <ListItem><Lin href="#">Corporate News</Lin></ListItem>
          <ListItem><Lin href="#">Press Center</Lin></ListItem>
          <ListItem><Lin href="#">Company</Lin></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Shop 2605 & 2606, Level 2, Gateway Arcade, Harbour City, TST, Kowloon
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> cs.ecom.hk@ecom-apac.ang.com
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +852 2638 4837
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;