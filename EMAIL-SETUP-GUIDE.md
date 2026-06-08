# Email & Form Setup Guide for Tjenervikar.dk

This guide will help you set up professional email addresses and working contact forms for your website.

## 📧 Part 1: Cloudflare Email Routing Setup (FREE)

### What You'll Get:
- ✅ Professional email addresses: `info@tjenervikar.dk`, `jobs@tjenervikar.dk`
- ✅ All emails forward to your personal Gmail/Outlook
- ✅ Ability to send FROM your professional address
- ✅ **Cost: 0 kr/month forever**

### Step-by-Step Instructions:

#### Step 1: Enable Email Routing in Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Log in with your Cloudflare account
3. Select your domain: **tjenervikar.dk**
4. In the left sidebar, click **Email** → **Email Routing**
5. Click **Add records and enable**
6. Cloudflare will automatically add the required DNS records (MX and TXT)
7. Click **Continue**

#### Step 2: Create Email Addresses

1. Go to **Routing rules** tab
2. Click **Create address**
3. Create the following addresses:

**For general inquiries:**
- Custom address: `info@tjenervikar.dk`
- Forward to: Your personal Gmail address
- Click **Save**

**For job applications:**
- Click **Create address** again
- Custom address: `jobs@tjenervikar.dk`
- Forward to: Your personal Gmail address
- Click **Save**

#### Step 3: Verify Your Email

1. Cloudflare will send a verification email to your Gmail
2. Open the email and click **Verify email address**
3. Click **Go to Email Routing**
4. Your email should now show **Verified** status

#### Step 4: (Optional) Send FROM Your Professional Address

To reply from `info@tjenervikar.dk` instead of your Gmail:

1. Open Gmail → Click the gear icon → **See all settings**
2. Go to **Accounts and Import** tab
3. Under "Send mail as", click **Add another email address**
4. Enter:
   - Name: `Vikarstyrken` (or your name)
   - Email: `info@tjenervikar.dk`
   - Uncheck "Treat as an alias"
5. Click **Next Step**
6. Use Gmail's SMTP server:
   - SMTP Server: `smtp.gmail.com`
   - Port: `587`
   - Username: Your Gmail address
   - Password: Your Gmail password (or App Password if 2FA enabled)
7. Click **Add Account**
8. Gmail will send a verification code to `info@tjenervikar.dk`
9. Check your Gmail (it will be forwarded there)
10. Enter the verification code
11. Done! You can now send from `info@tjenervikar.dk`

---

## 📝 Part 2: Web3Forms Setup (FREE)

### What You'll Get:
- ✅ Working contact form
- ✅ Working job application form with CV uploads
- ✅ Email notifications sent to `info@tjenervikar.dk` and `jobs@tjenervikar.dk`
- ✅ Spam protection included
- ✅ **Free tier: 250 submissions/month**

### Step-by-Step Instructions:

#### Step 1: Create Web3Forms Account

1. Go to [Web3Forms.com](https://web3forms.com)
2. Click **Get Started Free**
3. Sign up with your email (use your Gmail)
4. Verify your email address

#### Step 2: Create Access Keys

**For Contact Form:**
1. In Web3Forms dashboard, click **Create New Form**
2. Form name: `Tjenervikar Contact Form`
3. Email to receive submissions: `info@tjenervikar.dk`
4. Click **Create Form**
5. **Copy the Access Key** (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
6. Keep this safe - you'll need it in Step 3

**For Job Application Form:**
1. Click **Create New Form** again
2. Form name: `Tjenervikar Job Applications`
3. Email to receive submissions: `jobs@tjenervikar.dk`
4. Click **Create Form**
5. **Copy the Access Key**
6. Keep this safe too

#### Step 3: Add Access Keys to Website

**IMPORTANT:** You need to update the HTML file with your access keys.

1. Open `index.html` in your code editor
2. Search for: `YOUR_WEB3FORMS_ACCESS_KEY` (you'll find it twice)

**First occurrence (Contact Form - around line 1352):**
```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```
Replace `YOUR_WEB3FORMS_ACCESS_KEY` with the **Contact Form Access Key** you copied

**Second occurrence (Job Application Form - around line 1233):**
```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```
Replace `YOUR_WEB3FORMS_ACCESS_KEY` with the **Job Application Access Key** you copied

3. Save the file
4. Upload to Cloudflare Pages

#### Step 4: Test Your Forms

1. Go to your website: `https://tjenervikar.dk`
2. Scroll to the contact form
3. Fill it out and submit
4. Check your Gmail - you should receive an email at `info@tjenervikar.dk` (forwarded to Gmail)
5. Test the job application form the same way
6. Check for email at `jobs@tjenervikar.dk` (forwarded to Gmail)

---

## 🎯 Summary

### Email Addresses Created:
- ✅ `info@tjenervikar.dk` → Forwards to your Gmail
- ✅ `jobs@tjenervikar.dk` → Forwards to your Gmail

### Forms Working:
- ✅ Contact form → Sends to `info@tjenervikar.dk`
- ✅ Job application form → Sends to `jobs@tjenervikar.dk` (with CV attachment)

### Total Monthly Cost:
- **0 kr** 🎉

---

## 🆘 Troubleshooting

### Email not forwarding?
1. Check Cloudflare Email Routing dashboard
2. Make sure destination email is **Verified**
3. Check spam folder in Gmail

### Form not working?
1. Make sure you replaced `YOUR_WEB3FORMS_ACCESS_KEY` with actual keys
2. Check Web3Forms dashboard for submission logs
3. Make sure you uploaded the updated `index.html` to Cloudflare Pages

### Can't send from professional address?
1. If using Gmail with 2FA, you need an **App Password**:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this instead of your regular password

---

## 📞 Need Help?

If you get stuck, contact your developer or:
- Web3Forms Support: https://web3forms.com/support
- Cloudflare Support: https://dash.cloudflare.com/support

---

**Setup completed by:** [Your Name]  
**Date:** June 8, 2026  
**Website:** https://tjenervikar.dk
