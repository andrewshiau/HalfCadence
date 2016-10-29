import React from 'react';

const styles = {
  footer: { // center text
    textAlign: `center`
  },
  footerText: { // give top margin
    margin: `2rem 0`
  }
};

const Footer = () => (
  <footer style={styles.footer}>
    <hr/>
    <p style={styles.footerText}>half cadence by&nbsp;
      <a
        target="_blank"
        href="https://instagram.com/half_cadence"
        title="Andrew's Instagram"
        >
        andrew shiau
      </a>
    </p>
  </footer>
);

export default Footer;
