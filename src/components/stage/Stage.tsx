import TranslationBox from "../translationBox/TranslationBox";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Categories from "../categories/Categories";

require('./Stage.css');

const Stage = () => {
  return (
    <>
      <Container className='stage'>
        <Row>
          <Col>
            <Categories />
          </Col>
        </Row>
        <Row>
          <Col>
            <TranslationBox />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Stage;
