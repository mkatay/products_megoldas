import React from "react";
import aboutStore1 from "../assets/about1.jpg";
import aboutStore2 from "../assets/about2.jpg";
import './about.scss'

export const About = () => {
  return (
    <div className="container mt-5 p-5 shadow about">
      <div className="row">
        <div className="col-md-7 col-12">
          <h3 className="mb-4">Welcome to Our Store!</h3>
          <p className="lead">
            We believe in bringing you the finest products with a touch of
            unique properties. Our mission is to provide you with main benefits
            or special features.
          </p>

          <h3 className="mt-5">Our Story</h3>
          <p>
            Founded in 2010, Our Store has been a labor of love. We started with
            a passion for products and a vision for a general objective or
            value. Over the years, we've expanded in the world.
          </p>
        </div>
        <div className="col-md-5 col-12">
            <img src={aboutStore2} alt="our store" className="img-fluid img-thumbnail" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-5 col-12">
          <img
            src={aboutStore1}
            alt="our store"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-md-7 col-12">
          <h3>What Sets Us Apart?</h3>
          <ul>
            <li>
              <strong>Quality Craftsmanship:</strong> Every product is crafted
              with precision and care to ensure quality and durability.
            </li>
            <li>
              <strong>Unique Designs:</strong> Discover categories that stand
              out with our exclusive designs.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Your happiness is our
              priority. We strive to provide an exceptional shopping experience
              and top-notch customer service.
            </li>
          </ul>
          <h3 className="mt-5">Connect With Us</h3>
          <p>
            Join our community on social media to stay updated on the latest
            news and promotions. Thank you for choosing Us.
          </p>
        </div>
      </div>
    </div>
  );
};
