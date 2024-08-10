import { sendOtp } from 'services/auth';

import styles from "./SendOtpForm.module.css"
import { e2p } from '../../utils/numbers';

const SendOtpForm = ({setStep, mobile, setMobile}) => {
  const submitHandler = async (event) => {
    event.preventDefault();
    
    if(mobile.length !== 11) return

    const {response, error} = await sendOtp(e2p(mobile));
      if(response) setStep(2)
      if(error) console.log(error.response.data.message)

      console.log(response, error);
  }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p> ورود به حساب کاربری </p>
      <span>
        برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input"> شماره موبایل خود را وارد کنید </label>
      <input type="number" id='input' placeholder='شماره موبایل' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
      <button type='submit'> ارسال </button>
    </form>
  )
}

export default SendOtpForm