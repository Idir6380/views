import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { ReactComponent as Phone } from '../icone/phone.svg';
import { ReactComponent as Phonedark } from '../icone/darkphone.svg';
import { ReactComponent as Message } from '../icone/message.svg';
import { ReactComponent as Messagedark } from '../icone/messagedark.svg';
import './ContactForm.css'

function ContactForm(props) {
    return (
        <div className='contact-form'>
            <div className='div-1'>
                <h1>
                    <span className='heading-span'>Ge</span>t in touch
                </h1>

                <div className='info-div'>
                    <p>
                        <span>
                            <span className='space-span'>

                                {props.Icon == true ? <Phone /> : <Phonedark />}{' '}
                                +
                            </span>
                            213 541 113 181
                        </span>
                        <span className='big-space-span'>. .</span>
                        <span>
                            <span className='space-span'>

                                {props.Icon == true ? <Message /> : <Messagedark />}{' '}
                                m
                            </span>
                            ixin@gmail.com
                        </span>
                    </p>
                </div>
            </div>

            <form className='row '>
                <div className='col-md-5 '>
                    <label className='form-label'>Name</label>
                    <input
                        type='text'
                        className='form-control name-input'
                        id='inputEmail4'
                    />
                </div>
                <div className='col-md-7 col-sm-12'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        className='form-control email-input'
                        id='inputPassword4'
                    />
                </div>

                <div className='col'>

                    <div className='br-div'>..</div>
                    <label>message</label>

                    <textarea className='text-area' />
                    <br />
                    <button>
                        Send{' '}
                        <svg
                            width='22'
                            height='20'
                            viewBox='0 0 22 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M8.91245 9.9998H3.00045L1.02345 2.1348C1.01079 2.0891 1.00308 2.04216 1.00045 1.9948C0.978447 1.2738 1.77245 0.773804 2.46045 1.1038L21.0004 9.9998L2.46045 18.8958C1.78045 19.2228 0.996447 18.7368 1.00045 18.0288C1.00247 17.9655 1.01359 17.9029 1.03345 17.8428L2.50045 12.9998'
                                stroke='white'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}
export default ContactForm