import React from 'react';
import { Link } from 'gatsby';

import './allTagsIndex.css';


const SingleTagIndexTemplate = ({ pageContext, ...rest }) => {
  console.log(rest);
  const { tagName, posts } = pageContext;
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
    },
    title: {
      fontFamily: 'Avenir',
    },
    ul: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      listStyleType: 'none',
      padding: '10px'
    },
    li: {
      fontFamily: 'Avenir',
      fontSize: '20px',
      padding: '10px'
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tag: {tagName}</h1>
      <ul style={styles.ul}>
        {posts.map(post => (
          <li key={post.frontmatter.path} style={styles.li}>
            <Link className="tag-link--item" to={post.frontmatter.path}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="back-to-tags">
        <Link className="tag-link--item" style={{ fontSize: '16px', color: 'red'}} to={'/tags'}> {'<'} Back to tags</Link>
      </div>
    </div>
  );
};

export default SingleTagIndexTemplate;