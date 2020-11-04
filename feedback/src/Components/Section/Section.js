import React from 'react';
import PropsType from 'prop-types'

const Section = ({title,children}) => {
  return (
    <>
    <h2>{title}</h2>
      {children}
      </>
  );
};

export default Section;

Section.propsType = {
  title: PropsType.string,
  children: PropsType.string
}