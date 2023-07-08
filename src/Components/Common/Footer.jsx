import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="hedingh3 text_align_left">
                <h3>About</h3>
                <p>
                  {" "}
         Whether you're looking for a momentary escape from daily stresses or a comprehensive wellness experience, our app is your trusted companion on your path to wellness. Experience the epitome of self-care with our Spa App."
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hedingh3 text_align_left">
                <h3>Blog</h3>
                <p>
                Bookmark our Spa App Blog and make it your go-to resource for all things wellness. Embrace the transformative power of self-care as you explore our insightful articles, practical tips, and inspiring stories. Join us on this journey towards a balanced and fulfilling life, one blog post at a time."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="hedingh3 text_align_left">
                <h3>Menu</h3>
                <ul className="menu_footer">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/service">Service</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hedingh3  text_align_left">
                <h3>Newsletter</h3>
                <form id="colof" className="form_subscri">
                  <input
                    className="newsl"
                    placeholder="Email"
                    type="text"
                    name="Email"
                  />
                  <button className="subsci_btn">Subscribe</button>
                </form>
                <ul className="top_infomation">
                  <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    +01 1234567890
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a href="Javascript:void(0)">spadelight@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-12">
            <div className="follow text_align_center">
              <h3>Follow Us</h3>
              <ul className="social_icon ">
                <li>
                  <a href="Javascript:void(0)">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="Javascript:void(0)">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="Javascript:void(0)">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="Javascript:void(0)">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-md-12">
            <p>
              © 2023 All Rights Reserved. Design by{" "}
              <a href="https://html.design/"> Meghna Supriti Shibam</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer