import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, role, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    // Log to console
    console.log("📨 New Contact Form Submission:");
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`💼 Role: ${role || "Not specified"}`);
    console.log(`💬 Message: ${message}`);
    console.log("⏰ Time:", new Date().toLocaleString());
    console.log("-----------------------------------");

    // Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to ADMIN (you) - Form details
    const adminMailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Your email
      replyTo: email, // So you can reply directly to user
      subject: `📩 New Contact Message from ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p><strong style="color: #374151;">👤 Name:</strong> ${name}</p>
            <p><strong style="color: #374151;">📧 Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p><strong style="color: #374151;">💼 Role/Position:</strong> ${role || "Not specified"}</p>
            <p><strong style="color: #374151;">📝 Message:</strong></p>
            <div style="background-color: white; padding: 12px; border-radius: 6px; border-left: 4px solid #10b981; margin-top: 8px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p><strong>📊 Submission Details:</strong></p>
            <ul style="margin: 5px 0; padding-left: 20px;">
              <li>Time: ${new Date().toLocaleString()}</li>
              <li>IP: ${req.ip || 'Not available'}</li>
              <li>User Agent: ${req.headers['user-agent']?.substring(0, 50) || 'Not available'}...</li>
            </ul>
          </div>

          <div style="margin-top: 25px; text-align: center;">
            <a href="mailto:${email}" style="background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              ✉️ Reply to ${name}
            </a>
          </div>

          <p style="margin-top: 25px; font-size: 12px; color: #9ca3af; text-align: center;">
            This email was automatically generated from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // 2. Email to USER - Thank you/confirmation
    const userMailOptions = {
      from: `"Tejas Mahakal" <${process.env.EMAIL_USER}>`,
      to: email, // User's email
      subject: `✅ Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #10b981; margin-bottom: 5px;">Thank You!</h1>
            <p style="color: #6b7280; font-size: 16px;">I've received your message and will get back to you soon.</p>
          </div>

          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 10px; border-left: 4px solid #10b981;">
            <h3 style="color: #065f46; margin-top: 0;">📋 Message Summary</h3>
            <p><strong>Your Name:</strong> ${name}</p>
            <p><strong>Your Email:</strong> ${email}</p>
            <p><strong>Role/Position:</strong> ${role || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 12px; border-radius: 6px; margin: 10px 0; font-style: italic;">
              "${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"
            </div>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
            <h4 style="color: #374151; margin-top: 0;">⏳ What's Next?</h4>
            <ul style="color: #4b5563;">
              <li>I'll review your message and respond within <strong>24 hours</strong></li>
              <li>For urgent queries, you can connect on <a href="https://www.linkedin.com/in/your-profile" style="color: #2563eb;">LinkedIn</a></li>
              <li>Check out my <a href="https://github.com/your-github" style="color: #2563eb;">GitHub</a> for recent projects</li>
            </ul>
          </div>

          <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
            <p><strong>Tejas Mahakal</strong><br/>
            MERN Developer → DevOps + AWS<br/>
            Email: tejs.mahakal@gmail.com</p>
            
            <div style="margin-top: 15px;">
              <a href="https://www.linkedin.com/in/your-profile" style="margin: 0 10px; color: #2563eb; text-decoration: none;">LinkedIn</a> | 
              <a href="https://github.com/your-github" style="margin: 0 10px; color: #2563eb; text-decoration: none;">GitHub</a> | 
              <a href="[YOUR_PORTFOLIO_URL]" style="margin: 0 10px; color: #2563eb; text-decoration: none;">Portfolio</a>
            </div>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
            This is an automated confirmation email. Please don't reply to this message.<br/>
            If you have additional questions, feel free to send another email.
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log("✅ Emails sent successfully - to admin and user");

    return res.status(200).json({
      success: true,
      message: "Thanks! I received your message and will reply within 24 hours.",
    });
  } catch (error) {
    console.error("❌ Email error:", error);
    
    // Even if email fails, still log the submission
    console.log("⚠️ Form submission logged but email failed");
    
    return res.status(200).json({
      success: true,
      message: "Message received! (Email notification failed, but I got your message)",
    });
  }
});

export default router;