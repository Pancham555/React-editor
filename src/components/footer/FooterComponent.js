import React from "react";

const FooterComponent = () => {

    const Footer_sitefooter__1nIiI =  {
            backgroundColor: "#26272b",
            padding: "45px 0 20px",
            fontSize: "15px",
            lineHeight: "24px",
            color: "#737373"
        }
    

    const Footer_socialIcons__3cDm1 = {
        paddingLeft: "0",
        marginBottom: "0",
        listStyle: "none"
    }

  return (
    <footer style={Footer_sitefooter__1nIiI}>
      <div style={{columns:"2"}}>
        <div style={{marginLeft:"20%"}}>
          <h6>About</h6>
          <div style={{width:"auto"}}>
            <p class="text-justify">
              Larcel Space redefines your outlook towards Interior
              Design.Emphasizing Customer delight without the limitations of
              time constraints.A hassle-free process of designing your interiors
              at the ease of one click. Get a seamless experience of making your
              dream house a reality.
            </p>
          </div>
          <div style={{display:"inline-block"}}>
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a style={{color: "#737373"}} href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a style={{color: "#737373"}} href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a style={{color: "#737373"}} href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a style={{color: "#737373"}} href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a style={{color: "#737373"}} href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div style={{marginLeft:"45%"}}>
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p>
              Copyright © 2021 All Rights Reserved by
              <a style={{color: "#737373"}} href="#"> Perspectify</a>.
            </p>
          </div>
          <div style={{display:"flex"}}>
            <ul style={Footer_socialIcons__3cDm1}>
              <li>
                <a class="Footer_facebook__2Wkwz" href="#">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{verticalAlign:"center"}}
                  >
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
