import mailchimp from "@mailchimp/mailchimp_marketing";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  mailchimp.setConfig({
    apiKey: config.mailchimpKey,
    server: config.mailchimpServer,
  });

  const body = await readBody(event);

  const listId = "ac2862c58b";
  const subscribingUser = {
    email: body.email,
    fName: body.fName,
    lName: body.lName,
    language: body.language,
  };

  let french;
  let english;

  if (subscribingUser.language === "20b75dca3e") {
    french = true;
    english = false
  } else if (subscribingUser.language === "c4e9098dd7") {
    french = false;
    english = true
  }

  const response = await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    merge_fields: {
      FNAME: subscribingUser.fName,
      LNAME: subscribingUser.lName,
    },
    status: "subscribed",
    interests: {
      "20b75dca3e": french,
      "c4e9098dd7": english,
    },
  });

  return {
    status: 200,
  };
});
