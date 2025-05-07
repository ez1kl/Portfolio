import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .send(
        'service_ujmw846', 
        'template_7l83c96', 
        {
          from_name: form.name,
          to_name: 'Yassine',
          from_email: form.email,
          to_email: 'contact@yassinebadaoui.com',
          message: form.message,
        },
        'OtjEmcWDcQfQY5RHp' 
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Merci ! Je vous répondrai dès que possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error('Une erreur est survenue. Veuillez réessayer.');
        }
      );
  };
  

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Contactez-moi</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Votre nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Votre email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Quel est votre email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Votre message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Quel est votre message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>
          <button
            type="submit"
            className={`live-demo flex justify-center sm:gap-4 
    gap-3 sm:text-[20px] text-[16px] text-timberWolf 
    font-bold font-beckman items-center py-5
    whitespace-nowrap transition duration-[0.2s] ease-in-out
    ${loading ? 'sm:w-[220px] w-[200px]' : 'sm:w-[130px] w-[100px]'} 
    ${loading ? 'sm:h-[60px] h-[55px]' : 'sm:h-[50px] h-[45px]'} 
    rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack`}
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', send);
            }}
          >
            {loading ? 'Envoi en cours' : 'Envoie'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
    w-[23px] h-[23px] object-contain"
            />
          </button>


        </form>
      </motion.div>
      <ToastContainer
  position="bottom-right"
  autoClose={5000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="dark"
  toastClassName={() =>
    "bg-eerieBlack text-timberWolf border border-white/10 font-poppins rounded-lg shadow-md px-4 py-3"
  }
  bodyClassName={() => "text-sm"}
  progressClassName="bg-timberWolf"
/>
    </div>
  );
};




export default SectionWrapper(Contact, 'contact');
