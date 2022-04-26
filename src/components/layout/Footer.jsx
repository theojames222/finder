function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © {footerYear} - All right reserved by TheoDOAs</p>
      </div>
    </footer>
  );
}

export default Footer;
