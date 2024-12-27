// const express = require('express');
// const nodemailer = require('nodemailer');
// const mysql = require('mysql2/promise');
// const cron = require('node-cron');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;
// app.use(cors());

// const dbConfig = {
//   host: "localhost",
//   user: "root",
//   password: "123$5678",
//   database: "user_db",
// };

// // Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "bvrit25@gmail.com",
//     pass: "sftf qyxo twwd qinb", // App-specific password
//   },
// });

// // Function to fetch top projects
// const getTopProjects = async () => {
//   const connection = await mysql.createConnection(dbConfig);

//   const lastMonthQuery = `
//     SELECT 
//       projects.id, projects.heading, projects.summary, COUNT(registrations.id) AS registration_count
//     FROM 
//       projects
//     WHERE 
//       MONTH(projects.release_date) = MONTH(CURRENT_DATE() - INTERVAL 1 MONTH)
//     GROUP BY 
//       projects.id
//     ORDER BY 
//       registration_count DESC
//     LIMIT 2;
//   `;

//   // Fetch projects from last month
//   const [lastMonthProjects] = await connection.execute(lastMonthQuery);

//   // If no projects found last month, fetch from earlier months
//   if (lastMonthProjects.length === 0) {
//     const previousMonthsQuery = `
//       SELECT 
//         projects.id, projects.name, projects.description, COUNT(registrations.id) AS registration_count
//       FROM 
//         projects
//       LEFT JOIN 
//         registrations 
//       ON 
//         projects.id = registrations.project_id
//       WHERE 
//         MONTH(projects.release_date) < MONTH(CURRENT_DATE())
//       GROUP BY 
//         projects.id
//       ORDER BY 
//         registration_count DESC
//       LIMIT 2;
//     `;
//     const [previousProjects] = await connection.execute(previousMonthsQuery);
//     await connection.end();
//     return previousProjects;
//   }

//   await connection.end();
//   return lastMonthProjects;
// };

// // Function to send emails
// const sendMonthlyInsights = async () => {
//   const projects = await getTopProjects();

//   // Fetch all users (assuming you have a users table)
//   const connection = await mysql.createConnection(dbConfig);
//   const [users] = await connection.execute('SELECT email FROM tester');
//   await connection.end();

//   // Construct email content
//   const emailContent = `
//     <head>
//   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
// </head>

// <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
//   <div style="background-color: #ffffff; text-align: center; padding: 20px;">
//     <img src="https://biz.prlog.org/qualizeal/logo.png" alt="QualiZeal Logo" style="max-width: 200px;">
//   </div>
//   <div style="padding: 20px; background-color: #f9f9f9;">
//     <h2 style="color: #3860be; text-align: center; font-size: 22px; margin-bottom: 20px;">Exciting Project Opportunities Await You!</h2>
//     <p style="color: #333; font-size: 16px;">Dear [User's Name],</p>
//     <p style="color: #333; font-size: 16px;">We are thrilled to bring you the latest updates from <strong>QualiZeal</strong>. Explore top-notch projects this month that align with your skills and interests.</p>
//     <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
//     ${projects.map(
//       (project) => `
//       <div style="padding: 15px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 5px; margin-bottom: 20px;">
//         <h3 style="color: #3860be; font-size: 18px; margin-bottom: 10px;">${project.heading}</h3>
//         <p style="color: #555; font-size: 14px; margin-bottom: 10px;">${project.summary}</p>
//         <p style="color: #555; font-size: 14px; margin-bottom: 5px;"><strong>Why Join:</strong> Enhance your skills, earn rewards, and be a part of groundbreaking technology initiatives.</p>
//       </div>`
//     ).join('')}
//     <p style="color: #333; font-size: 16px;">Apply now to seize this opportunity to earn, influence future technologies, and contribute to exciting new studies!</p>
//     <p style="color: #333; font-size: 16px;">If you have any questions, feel free to reach out to us at <a href="mailto:support@qualizeal.com" style="color: #3860be; text-decoration: none;">support@qualizeal.com</a>.</p>
//     <p style="color: #333; font-size: 16px;">We look forward to seeing your active participation in these projects!</p>
//     <p style="color: #333; font-size: 16px;">Best regards,<br><strong>QualiZeal Team</strong></p>
//   </div>
//   <div style="background-color: #f5f5f5; text-align: center; padding: 15px;">
//     <p style="color: #666; font-size: 14px; margin: 0;">2024 QualiZeal. All Rights Reserved.</p>
//     <p style="color: #666; font-size: 14px; margin: 0;">Connect with us: 
//       <a href="#" style="color: #3860be; text-decoration: none;">Facebook</a> | 
//       <a href="#" style="color: #3860be; text-decoration: none;">Twitter</a> | 
//       <a href="#" style="color: #3860be; text-decoration: none;">LinkedIn</a>
//     </p>
//   </div>
// </div>

//   `;

//   for (const user of users) {
//     const mailOptions = {
//       from: 'bvrit25@gmail.com',
//       to: user.email,
//       subject: 'Monthly Insights - Top Projects',
//       html: emailContent,
//     };
//     try {
//       await transporter.sendMail(mailOptions);
//       console.log(`Email sent to ${user.email}`);
//     } catch (error) {
//       console.error(`Failed to send email to ${user.email}:`, error);
//     }
//   }
// };

// cron.schedule('0 9 1 * *', sendMonthlyInsights);


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





const express = require('express');
const nodemailer = require('nodemailer');
const mysql = require('mysql2/promise');
const cron = require('node-cron');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "123$5678",
  database: "user_db",
};

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "bvrit25@gmail.com",
    pass: "sftf qyxo twwd qinb", // App-specific password
  },
});

// Function to fetch top projects
const getTopProjects = async () => {
  const connection = await mysql.createConnection(dbConfig);

  const recentProjectsQuery = `
    SELECT 
      project_id, 
      heading, 
      summary, 
      start_date,
      registration_count
    FROM 
      projectworkinfo
    WHERE 
      creation_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH)
    ORDER BY 
      registration_count DESC
    LIMIT 2;
  `;

  // Fetch the top 2 projects published in the last month with the highest registration count
  const [topProjects] = await connection.execute(recentProjectsQuery);

  await connection.end();
  return topProjects;
};

// Function to send emails
const sendMonthlyInsights = async () => {
  const projects = await getTopProjects();

  // Fetch all users (assuming you have a users table)
  const connection = await mysql.createConnection(dbConfig);
  const [users] = await connection.execute('SELECT email FROM tester');
  await connection.end();

  // Construct email content
const emailContent = `
   <head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body, h2, h3, p {
            font-family: 'Poppins', Arial, sans-serif;
        }
    </style>
</head>

<div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; overflow: hidden;">
    <div style="background-color: #ffffff; text-align: center; padding: 20px;">
        <img src="https://biz.prlog.org/qualizeal/logo.png" alt="QualiZeal Logo" style="max-width: 200px;">
    </div>
    <div style="padding: 20px; background-color: #f9f9f9;">
        <h2 style="color: #3860be; text-align: center; font-size: 24px; font-weight: 600; margin-bottom: 20px;">Exciting Project Opportunities Await You!</h2>
        <p style="color: #333; font-size: 16px; line-height: 1.5;">Dear User,</p>
        <p style="color: #333; font-size: 16px; line-height: 1.5;">We are thrilled to bring you the latest updates from <strong>QualiZeal</strong>. Explore top-notch projects this month that align with your skills and interests.</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        ${projects.map(
            (project) => `
            <div style="padding: 20px; background-color: #ffffff; margin-bottom: 20px;">
                <h3 style="color: #3860be; font-size: 20px; font-weight: 600; margin-bottom: 10px;">${project.heading}</h3>
                <p style="color: #555; font-size: 16px; margin: 5px 0; font-weight: 400;">Start Date: ${new Date(project.start_date).toLocaleDateString()}</p>
                <p style="color: #555; font-size: 16px; margin: 5px 0; font-weight: 400;">Project ID: ${project.project_id}</p>
                <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 10px 0;">${project.summary}</p>
            </div>`
        ).join('')}

        <p style="color: #333; font-size: 16px; line-height:1.5">Why Join : Enhance your skills, earn rewards, and be a part of groundbreaking technology initiatives.</p>
        <p style="color: #333; font-size: 16px; line-height: 1.5;">Apply now to seize this opportunity to earn, influence future technologies, and contribute to exciting new studies!</p>
        <p style="color: #333; font-size: 16px; line-height: 1.5;">If you have any questions, feel free to reach out to us at <a href="mailto:support@qualizeal.com" style="color: #3860be; text-decoration: none;">support@qualizeal.com</a>.</p>
        <p style="color: #333; font-size: 16px; line-height: 1.5;">We look forward to seeing your active participation in these projects!</p>
        <p style="color: #333; font-size: 16px; line-height: 1.5;">Best regards,<br><strong>QualiZeal Team</strong></p>
    </div>
    <div style="background-color: #f5f5f5; text-align: center; padding: 20px;">
        <p style="color: #666; font-size: 14px; margin: 0;">2024 QualiZeal. All Rights Reserved.</p>
        <p style="color: #666; font-size: 14px; margin: 10px 0;">Connect with us: 
            <a href="#" style="color: #3860be; text-decoration: none;">Facebook</a> | 
            <a href="#" style="color: #3860be; text-decoration: none;">Twitter</a> | 
            <a href="#" style="color: #3860be; text-decoration: none;">LinkedIn</a>
        </p>
    </div>
</div>

`;

  for (const user of users) {
    const mailOptions = {
      from: 'bvrit25@gmail.com',
    //   to: user.email,
        to: '22211a05u3@bvrit.ac.in',
      subject: 'Monthly Insights - Top Projects',
      html: emailContent,
    };
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent`);
    } catch (error) {
      console.error(`Failed to send email`, error);
    }
  }
};

// Schedule the cron job to run at 9 AM on the 1st day of each month
// cron.schedule('0 9 1 * *', sendMonthlyInsights);
sendMonthlyInsights();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
