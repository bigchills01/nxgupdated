
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const FaqItem = ({item}) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = ()=>{
    setIsOpen(!isOpen);
  };
  return (
    <div className="custom-accordion" >
    <div className="custom-accordion-header" onClick={toggleAccordion}>
      <h4 className="custom-accordion-title">{item.question}</h4>
      <div className={`custom-accordion-icon ${isOpen && 'faq-open'}`}>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
    </div>
  
    {isOpen && (
      <div className="custom-accordion-content">
        <p className="custom-accordion-text">{item.content}</p>
      </div>
    )}
  </div>
  
  );
};

export default FaqItem
