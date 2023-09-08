const HeroSection = () => (
  <main className="heroSection">
    {/* Left Side  */}
    <div className="heroSec-content">
      {/* Heading  */}
      <h1 className="heroSec-heading">
        YOUR FEET <br /> DESERVE <br /> THE BEST
      </h1>
      {/* Some Text Info */}
      <p className="heroSec-text">
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.
      </p>
      {/* Buttons  */}
      <div className="heroSec-btn">
        <button className="heroSec-btn1">Shop Now</button>
        <button className="heroSec-btn2">Category</button>
      </div>
      {/* Amazon Availability  */}
      <div className="heroSec-availability">
        <p>Also Available On</p>
        <div className="herSec-availability-sites">
          <div>
            <img src="./assets/amazon.png" alt="Amazon-logo" />
          </div>
          <div>
            <img src="./assets/flipkart.png" alt="FlipKart-logo" />
          </div>
        </div>
      </div>
    </div>
    {/* Shoe Image  */}
    <div className="hero-img">
      <img src="./assets/shoe_image.png" alt="Shoe_image" />
    </div>
  </main>
);

export default HeroSection;
