import PropTypes from "prop-types";
import React, { useState } from "react";



function Layout({ children }) {

  return (
    <div className="h-full font-normal">
      <main >
        {children}
      </main>

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;