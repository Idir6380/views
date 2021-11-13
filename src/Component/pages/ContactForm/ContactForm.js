import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './ContactForm.css'
function ContactForm() {
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
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 29 29'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.7524 7.54057L8.66459 2.82202C8.19334 2.27827 7.32938 2.28069 6.782 2.82927L3.42042 6.1969C2.41992 7.19861 2.13355 8.68607 2.71234 9.87869C6.17013 17.038 11.9441 22.82 19.0985 26.2879C20.29 26.8666 21.7762 26.5803 22.7767 25.5786L26.1697 22.1795C26.7195 21.6297 26.7207 20.7609 26.1721 20.2897L21.4355 16.2236C20.94 15.7983 20.1703 15.8539 19.6737 16.3517L18.0255 18.0023C17.9412 18.0907 17.8301 18.149 17.7094 18.1683C17.5887 18.1875 17.465 18.1665 17.3573 18.1086C14.6633 16.5573 12.4285 14.3196 10.8807 11.6235C10.8227 11.5157 10.8017 11.3918 10.8209 11.2709C10.8401 11.15 10.8985 11.0387 10.987 10.9541L12.6303 9.30957C13.1282 8.80932 13.1825 8.03598 12.7524 7.53936V7.54057Z'
                    stroke='white'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>{' '}
                +
              </span>
              213 541 113 181
            </span>
            <span className='big-space-span'>. .</span>
            <span>
              <span className='space-span'>
                <svg
                  width='24'
                  height='20'
                  viewBox='0 0 31 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M26.2923 0.166992H4.70898C3.48236 0.166992 2.30597 0.654268 1.43862 1.52162C0.57126 2.38898 0.0839844 3.56537 0.0839844 4.79199V20.2087C0.0839844 21.4353 0.57126 22.6117 1.43862 23.479C2.30597 24.3464 3.48236 24.8337 4.70898 24.8337H26.2923C27.5189 24.8337 28.6953 24.3464 29.5627 23.479C30.43 22.6117 30.9173 21.4353 30.9173 20.2087V4.79199C30.9173 3.56537 30.43 2.38898 29.5627 1.52162C28.6953 0.654268 27.5189 0.166992 26.2923 0.166992ZM25.2594 3.25033L15.5007 10.5732L5.7419 3.25033H25.2594ZM26.2923 21.7503H4.70898C4.30011 21.7503 3.90798 21.5879 3.61886 21.2988C3.32974 21.0097 3.16732 20.6175 3.16732 20.2087V5.17741L14.5757 13.7337C14.8425 13.9338 15.1671 14.042 15.5007 14.042C15.8342 14.042 16.1588 13.9338 16.4257 13.7337L27.834 5.17741V20.2087C27.834 20.6175 27.6716 21.0097 27.3824 21.2988C27.0933 21.5879 26.7012 21.7503 26.2923 21.7503Z'
                    fill='white'
                  />
                </svg>{' '}
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
