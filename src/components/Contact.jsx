import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageCircle, FiBookOpen } from "react-icons/fi";

// Custom Message Box (alert() වෙනුවට)
const showMessageBox = (message, isError = false) => {
  const messageBox = document.createElement('div');
  messageBox.className = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-lg text-white font-bold z-[9999] transition-opacity duration-300 ${isError ? 'bg-red-600' : 'bg-green-600'}`;
  messageBox.textContent = message;
  document.body.appendChild(messageBox);

  setTimeout(() => {
    messageBox.classList.add('opacity-0');
    messageBox.addEventListener('transitionend', () => messageBox.remove());
  }, 3000); // Message එක තත්පර 3කට පස්සේ අයින් වෙනවා
};

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Environment variables හරියට load වෙලාද කියලා බලන්න
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const secretKey = import.meta.env.VITE_EMAILJS_SECRET_KEY; // මේක තමයි Secret Key එක

    if (!serviceID || !templateID || !secretKey) {
      showMessageBox("Email service not configured. Missing Environment Variables.", true);
      console.error("EmailJS environment variables are not defined. Check your .env file and Vercel settings.");
      return;
    }

    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current,
        secretKey // මෙතන තමයි secret key එක පාවිච්චි වෙන්නේ
      )
      .then(
        () => {
          showMessageBox("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          showMessageBox("Failed to send message. Please try again later.", true);
          console.error("Email sending failed:", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-white via-gray-100 to-white py-24 px-4 md:px-10 overflow-hidden text-black pt-[88px]"
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 p-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        {/* Modern Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent tracking-widest uppercase mb-3">
            Let's Connect & Start a Conversation
          </h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Reach out for collaborations, questions, or just to say hello. I'm always open to new opportunities and connections!
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Side */}
          <motion.div
            className="flex-1 flex flex-col items-center md:items-start justify-center gap-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Let's Start Our Story Together</h1>
            <p className="text-gray-600 text-lg mb-4 text-center md:text-left">
              Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open!
            </p>
            <div className="flex flex-col gap-2 text-gray-700 text-base">
              <div className="flex items-center gap-2">
                <FiMail className="text-xl text-blue-600" />
                <span>manuthkausilu20031018@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FiBookOpen className="text-xl text-green-600" />
                <span>Horana, Sri Lanka</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5 bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black bg-gray-50 text-gray-800 transition"
              />
            </div>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black bg-gray-50 text-gray-800 transition"
              />
            </div>
            <div className="relative">
              <FiBookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                name="subject"
                required
                placeholder="Your Subject"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black bg-gray-50 text-gray-800 transition"
              />
            </div>
            <div className="relative">
              <FiMessageCircle className="absolute left-3 top-4 text-gray-400 text-xl" />
              <textarea
                name="message"
                required
                placeholder="What can I help for you?"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black bg-gray-50 text-gray-800 transition min-h-[120px] resize-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold shadow transition text-lg border-2 border-transparent group"
              whileHover={{
                scale: 1.09,
                backgroundColor: "#fff",
                color: "#000",
                borderColor: "#000",
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FiSend className="text-xl group-hover:animate-bounce transition-transform duration-300" />
              Send
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;