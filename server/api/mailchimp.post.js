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

  let chosenLanguage;

  if (subscribingUser.language === "20b75dca3e") {
    chosenLanguage = true;
  } else {
    chosenLanguage = false;
  }

  const response = await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    merge_fields: {
      FNAME: subscribingUser.fName,
      LNAME: subscribingUser.lName,
    },
    status: "subscribed",
    interests: {
      "20b75dca3e": chosenLanguage,
      c4e9098dd7: !chosenLanguage,
    },
  });

  return {
    status: 200,
  };
});
