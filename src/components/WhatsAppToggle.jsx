// components/WhatsAppToggle.js
import './WhatsAppToggle.css';
import { ImWhatsapp } from "react-icons/im";

const WhatsAppToggle = () => {
  return (
    <a 
      href="https://wa.me/919765494008" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i ><ImWhatsapp /></i>
    </a>
  );
};

export default WhatsAppToggle;