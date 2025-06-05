import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin, 
  FaEnvelope, FaMapMarkerAlt, FaPhoneAlt 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary via-[#1f1f28] to-primary border-t border-accent py-10 text-white w-full" id="contact-section">
      <div className="container mx-auto space-y-8 px-4 flex flex-col items-center">
        {/* Top section: logo, social icons, description */}
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Logo */}
          <Image
            src="/assets/logo.png"
            alt="NicCoders Logo"
            width={100}
            height={100}
            className="rounded-full"
          />

          {/* Social icons */}
          <div className="flex justify-center gap-6 text-accent text-2xl">
            <Link href="https://www.facebook.com/profile.php?id=61576136133967" target='_blank'><FaFacebookF className="hover:text-accent-hover transition" /></Link>
            <Link href="https://www.instagram.com/niccodersdev_?igsh=MTQzbzUzZmprdDVz" target='_blank'><FaInstagram className="hover:text-accent-hover transition" target='_blank' /></Link>
            <Link href="https://wa.me/50585785399" target='_blank'><FaWhatsapp className="hover:text-accent-hover transition" target='_blank' /></Link>
            <Link href="https://www.linkedin.com/company/niccoders/" target='_blank'><FaLinkedin className="hover:text-accent-hover transition" /></Link>
            <Link href="mailto:contact@niccoders.com"><FaEnvelope className="hover:text-accent-hover transition" /></Link>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm max-w-2xl">
            We are a company dedicated to providing cutting-edge, customized software solutions to meet the unique needs of our clients.
          </p>
        </div>

        {/* Middle: Services, Contact, Legal */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-white/70 text-center md:text-left">
          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-white mb-2">Our Services</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>User Experience Design (UX)</li>
              <li>Desktop App Development</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-white mb-2">Contact Us</h4>
            <p className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <FaMapMarkerAlt /> Managua, Nicaragua
            </p>
            <p className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <FaPhoneAlt /> Phone: 86750885
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <FaEnvelope /> contact@niccoders.com
            </p>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-2">Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        {/* Divider and bottom line */}
        <div className="w-full border-t border-accent pt-4 text-sm text-white/70 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 NicCoders</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;