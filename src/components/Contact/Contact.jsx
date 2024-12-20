import './Contact.scss'
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Inputs from "./Inputs";
import { motion } from "framer-motion"


const Contact = () => {


    const variant = {
        hidden: { opacity: 0, x: -100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .8,
                delay: 0.15,
                x: { duration: .8 },
            },
        },
    }

    const variant2 = {
        hidden: { opacity: 0, x: -100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .8,
                delay: 0.15,
                x: { duration: .8 },
            },
        },
    };
    return (
        <div className="contact">
            <section id="contact" className="contact__container">
                <ul className="card_container" >
                    <h3 className="input_title">Talk to me</h3>

                    <motion.div initial="hidden" variants={variant} whileInView="show">
                        <li className="contact__card">
                            <AiOutlineMail className="icon" />

                            <h3 className="contact__card_title">Email</h3>

                            <span className="card_data">fikii.business@gmail.com</span>
                        </li>


                    </motion.div>

                    <motion.div initial="hidden" variants={variant2} whileInView="show">
                        <li className="contact__card">
                            <AiOutlinePhone className="icon" />

                            <h3 className="contact__card_title">Phone</h3>

                            <span className="card_data">+359885643812</span>
                        </li>
                    </motion.div>
                </ul>

                <motion.div initial="hidden" variants={variant2} whileInView="show">
                    <Inputs />
                </motion.div>
            </section></div>
    );
};

export default Contact;
