import mailchimp from "@mailchimp/mailchimp_marketing";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  mailchimp.setConfig({
    apiKey: config.mailchimpKey,
    server: config.mailchimpServer,
  });

  const body = await readBody(event);

  const listId = "ac2862c58b";

  let french;
  let english;

  let date = new Date(body.birthday).getDate();
  let month = new Date(body.birthday).getMonth() + 1;

  if (date < 10) {
    date = "0" + date;
  }

  if (month < 10) {
    month = "0" + month;
  }

  const subscribingUser = {
    email: body.email,
    fName: body.fName,
    lName: body.lName,
    language: body.language,
    birthday: `${month}/${date}`,
    address: {
      addr1: body.address.addr1,
      city: body.address.city,
      state: body.address.state,
      zip: body.address.zip,
      country: body.address.country,
    },
  };

  if (body.birthday === null) {
    subscribingUser.birthday = "";
  }

  if (subscribingUser.language === "20b75dca3e") {
    french = true;
    english = false;
  } else if (subscribingUser.language === "c4e9098dd7") {
    french = false;
    english = true;
  }

  await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    status: "subscribed",
    merge_fields: {
      FNAME: subscribingUser.fName,
      LNAME: subscribingUser.lName,
      BIRTHDAY: subscribingUser.birthday,
      ADRESS_1: subscribingUser.address.addr1,
      CITY: subscribingUser.address.city,
      STATEPROV: subscribingUser.address.state,
      ZIP_CODE: subscribingUser.address.zip,
      COUNTRY: subscribingUser.address.country,
    },
    interests: {
      "20b75dca3e": french,
      c4e9098dd7: english,
    },
  });

  return {
    status: 200,
  };
});
