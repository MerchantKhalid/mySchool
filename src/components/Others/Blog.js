import React from 'react';

const Blog = () => {
    return (
        <div>
        <h2>What is Cors</h2>
        <h4>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</h4>

        <h2>Why are you using firebase</h2>
       <h4>With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. </h4> 
       <h2>What other options wehave to implement authentication?</h2>
       <h4><p>Cookie-Based authentication</p></h4> 
       <h4><p>Token-Based authentication</p></h4> 
       <h4><p>Third party access(OAuth, API-token)</p></h4> 
       <h4><p>OpenId</p></h4> 
       <h4><p>SAML</p></h4> 

       <h2> How does the private route work?</h2>
       <h4>The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isnot logged in they are redirected to the /login page, if the user is logged in but arent in an authorised role they are redirected to the home page.</h4>

       <h2>What is Node? How does Node work?</h2>
       <h4>Node.JS works and runs on the VB JavaScript engine. An essential thing to comprehend is that Node isnot a web server. In this article will give a simple method to comprehend the outline of how Node.JS works? along with its functions, what makes Node.JS extraordinary and clarify that its something other than server-side JavaScript. It is capable of rapidly conveying information to/from an internet browser.</h4>


            
        </div>
    );
};

export default Blog;