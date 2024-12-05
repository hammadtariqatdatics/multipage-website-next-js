import Link from "next/link";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to ECart! We are dedicated to providing the best services and
        products to our customers. Our team is passionate about what we do, and
        we strive to make a positive impact in our community.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="text-lg mb-4">
        Our mission is to deliver exceptional value and quality while ensuring
        customer satisfaction. We believe in building long-lasting relationships
        with our clients based on trust and transparency.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
      <p className="text-lg mb-4">
        Our team consists of experienced professionals who are experts in their
        respective fields. We work collaboratively to bring innovative solutions
        to our clients.
      </p>
    </div>
  );
};

export default About;
