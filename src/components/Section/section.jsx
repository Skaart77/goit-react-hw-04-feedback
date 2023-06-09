import PropTypes from 'prop-types';
import { Sections, Title } from './section.styled';

const Section = ({ title, children }) => {
  return (
    <Sections>
      <Title>{title}</Title>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
