import React from 'react';
import { Link } from 'gatsby';

import './allTagsIndex.css';

const AllTagsIndexTemplate = ({ pageContext }) => {
  const { tags } = pageContext;
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
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      listStyleType: 'none',
      padding: '10px',
    },
    li: {
      fontFamily: 'Avenir',
      fontSize: '20px',
      padding: '10px',
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tags</h1>
      <ul style={styles.ul}>
        {tags.map(tag => (
          <li key={tag} style={styles.li}>
            <Link className="tag-link--item" to={`/tags/${tag}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTagsIndexTemplate;
