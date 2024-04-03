
import Link from 'next/link'
import axios from "axios";
import Router from 'next/router'
import styles from '@/styles/Bitswitspopup.module.css'
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"


const Freequote = (props) => {

  const [ip, setIP] = useState('');
  //creating function to load ip address from the API
  const getIPData = async () => {
      const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
      setIP(res.data);
  }
  useEffect(() => {
      getIPData()
  }, [])


  const [score, setScore] = useState('Submit');


 const router = usePathname();
  const currentRoute = router;
   const [pagenewurl, setPagenewurl] = useState('');
      useEffect(() => {
        const pagenewurl = window.location.href;
        setPagenewurl(pagenewurl);
      }, []);

  const handleSubmit = async (e) => {

      e.preventDefault()
      var currentdate = new Date().toLocaleString() + ''

      const data = {
          name: e.target.first.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          comment: e.target.message.value,
          pageUrl: pagenewurl,
          IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
          currentdate: currentdate,
      }

      const JSONdata = JSON.stringify(data)

      setScore('Sending Data');
  


      fetch('api/emailapi/route', {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSONdata
      }).then((res) => {
          console.log(`Response received ${res}`)
          if (res.status === 200) {
              console.log(`Response Successed ${res}`)
          }
      })



      let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json"
      }

      let bodyContent = JSON.stringify({
          "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
          "Brand": "Bitswits",
          "Page": `${currentRoute}`,
          "Date": currentdate,
          "Time": currentdate,
          "JSON": JSONdata,

      });

      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
          method: "POST",
          body: bodyContent,
          headers: headersList
      });
      const { pathname } = router;
      if (pathname == pathname) {
          window.location.href = '/thank-you';
      }

  }


  return (
    <>

      <div className={styles[props.formsaspire]}>
        <h4 className="t-center font30 fw500 colortextgrey font-f">Get A Free Quote</h4>

        <form className={styles.formalign} onSubmit={handleSubmit}>
          <label className={styles.label}>Full Name*</label>
          <input type="text" className={styles.formfree} required name="first" placeholder="Your name..." />

          <label className={styles.label}>Email Address*</label>
          <input type="email" className={styles.formfree} required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Type Email Address" />

          <label className={styles.label}>Phone *</label>
          <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" className={styles.formfree} required name="phone" placeholder="123-456-7890" />

          <label className={styles.label}>Message *</label>
          <textarea className={styles.formfree} required name="message" rows="2" placeholder="Type Your Message Here"></textarea>
          <button className={styles.freebtn} type="submit">{score} </button>
        </form>


        {props.show ?

          <div className='mt-4'>
            <Link className={styles.freediscuss} href="javascript:$zopim.livechat.window.show();">LET'S DISCUSS</Link>
            <Link className={styles.freehomenumer} href="tel:(213) 289 3888">(213) 289 3888</Link>
          </div>

          : ''}

      </div>
    </>
  )
}

export default Freequote