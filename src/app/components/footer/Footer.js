import React from 'react';

const styles = {
  footer: { // center text
    textAlign: `center`
  },
  footerText: { // give top margin
    marginTop: `2.5rem`
  }
};

const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.footerText}>half cadence by&nbsp;
      <a
        target="_blank"
        href="https://instagram.com/half_cadence"
        title="email me"
        >
        andrew shiau
      </a>
    </p>
  </footer>
);

export default Footer;
