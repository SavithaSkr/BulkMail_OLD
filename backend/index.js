import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
//middleware
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail", // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "designdynasty84@gmail.com",
    pass: "pvtc irob doal zeok",
  },
});

/* main().catch(console.error); */

// starting server
app.post("/sendemail", (req, res) => {
  var msg = req.body.msg;
  console.log("hi i m hre");
  console.log(msg);
  transporter.sendMail(
    {
      from: "designdynasty84@gmail.com",
      to: "wafoxak468@calunia.com",
      subject: "message from bulmail",
      text: msg,
    },
    (error, info) => {
      if (error) {
        res.send(false);
      } else {
        res.send(true);
      }
    }
  );
});
app.listen(5000, () => {
  console.log("Server Started");
});
