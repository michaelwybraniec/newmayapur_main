import mailchimp from "@mailchimp/mailchimp_marketing";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  mailchimp.setConfig({
    apiKey: config.mailchimpKey,
    server: config.mailchimpServer,
  });

  const listId = "ac2862c58b";

  const response = await mailchimp.lists.listInterestCategoryInterests(
    listId,
    "007e7cb2af"
  );

  return {
    status: 200,
    response,
  };
});
