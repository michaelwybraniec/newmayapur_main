import mailchimp from "@mailchimp/mailchimp_marketing";

export default defineEventHandler(async (event) => {
  mailchimp.setConfig({
    apiKey: process.env.NUXT_MAILCHIMP_API_KEY,
    server: process.env.NUXT_MAILCHIMP_SERVER,
  });

  const body = await readBody(event);

  const listId = "ac2862c58b";
  const subscribingUser = {
    email: body.email,
  };

  const response = await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    status: "subscribed",
  });

  return {
    status: 200,
    data: response,
  };
});
