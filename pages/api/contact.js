import { Resend } from 'resend'

import EmailTemplate from '@/components/EmailSend/index'

const resend = new Resend(
 "re_gbgr1EEM_AKGZemLqHoEk16qy22piCe1r"
//   're_Bk3zRAbt_2Qw8yAT3UNB1EQKgpVPzE1WD'
  );

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    console.log('data', data)

 const dataRes =   await resend.emails.send({
      from: 'onboarding@resend.dev',
     
     to:'kristalturkey@gmail.com',
      replyTo: data.email,
      subject: `${data.name} `,
      react: <EmailTemplate {...data} />,
    })

    console.log('dataRes', dataRes)
    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}