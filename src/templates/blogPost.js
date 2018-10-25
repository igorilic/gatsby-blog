import React from 'react';
import { graphql, Link } from 'gatsby';

const Template = ({ data, ...rest }) => {
  console.log(rest);
  const {prev, next, pathSlug} = rest.pageContext;
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
      <h1 style={{fontFamily: 'Avenir'}}>{title}</h1>
      <div style={{fontFamily: 'Avenir', margin: '0 120px 20px 120px', textAlign: 'justify'}} className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      <div style={{display: 'flex', flex: '1', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Link style={{opacity: prev ? 1 : '0.5', fontFamily: 'Avenir', textDecoration: 'none', fontSize: '20px', fontWeight: 600, color: 'red', marginRight: '40px'}} to={prev ? prev.frontmatter.path : pathSlug}>Prev</Link>
        <Link style={{opacity: next ? 1 : '0.5', fontFamily: 'Avenir', textDecoration: 'none', fontSize: '20px', fontWeight: 600, color: 'red'}} to={next ? next.frontmatter.path : pathSlug}>Next</Link>
      </div>
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
