import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req, res) {
    try {
        const { name, last, phone, email, comment, IP, currentdate, pageUrl } = await req.json();
        const brandname = 'Bitswits'
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'signups@bitswits.co',
                pass: "&2=Kmd=*D>m=4gJ&"
            }
        })

        const mailOptions = {
            from: 'signups@bitswits.co',
            to: ['signups@bitswits.co', 'ppc@infinityanimations.com', 'm.ahmar@crystal-lite.net'],
            subject: `New Lead Generated By Bitswits`,
            html: `<table>
               
                    <tr>
                        <th>Name</th>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <th>Last</th>
                        <td>${last}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>${phone}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>${email}</td>
                    </tr>
                
                    <tr>
                        <th>Comment</th>
                        <td>${comment}</td>
                    </tr>
                    <tr>
                    <th>IP</th>
                    <td>${IP}</td>
                </tr>
                <tr>
                    <th>Currentdate</th>
                    <td>${currentdate}</td>
                </tr>
               
                    <tr>
                        <th>pageUrl</th>
                        <td>${pageUrl}</td>
                    </tr>
                    <tr>
                        <th>Brand Name</th>
                        <td>${brandname}</td>
                    </tr>
                    
                    
                
               
            </table>`
        }

        await transporter.sendMail(mailOptions);





        return NextResponse.json({ "message": "Email send sucessfully", "data": [name, last, phone, email, comment, brandname, IP, currentdate, pageUrl], "status": 200 });
    } catch (error) {
        return NextResponse.json({ "message": "Failed to send Email", "data": error, "status": 500 });
    }
}