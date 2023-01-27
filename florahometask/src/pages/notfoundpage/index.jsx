import React from "react";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";

const NotFoundPage = () => {  
  const navigate = useNavigate();
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="notFound">
      <div class="text">
       
       </div>
      </div>
    </div>
  );
};

export default NotFoundPage;