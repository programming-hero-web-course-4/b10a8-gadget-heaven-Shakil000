import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-center">
          <h1 className="text-2xl font-bold pt-32">Gadget Heaven</h1>
          <p className="text-gray-300 px-2">Leading the way in cutting-edge technology and innovation.</p>
          <p className="divider"></p>
        </div>
      <footer className="footer justify-around p-10">
        <nav>
          <h6 className="footer-title font-bold text-black">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold text-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold text-black">Legal</h6>
          <a className="link link-hover">Terms of Services</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
