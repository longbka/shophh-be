module.exports = ({ env }) => ({
  // ...
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: 600000,
      },
    },
  },
  // ...
  // email: {
  //   config: {
  //     provider: "nodemailer",
  //     providerOptions: {
  //       host: "smtp.gmail.com",
  //       port: 465,
  //       auth: {
  //         user: "noreplyAirsense@gmail.com",
  //         pass: "keadbexdzuviawry",
  //       },
  //     },
  //   },
  //   settings: {
  //     defaultFrom: "email@gmail.com",
  //     defaultReplyTo: "email@gmail.com",
  //   },
  // },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "shophoanghoai@gmail.com",
        defaultReplyTo: "shophoanghoai@gmail.com",
      },
    },
  },
});

