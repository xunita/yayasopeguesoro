export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  return new Promise((resolve, reject) => {
    try {
      const fetchBody = {
        service_id: config.emailjsServiceId,
        template_id: config.emailjsTemplateId,
        user_id: config.emailjsPublicKey,
        template_params: {
          ...body,
        },
      };
      console.log("fetchBody: ", fetchBody);
      $fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(fetchBody),
        headers: {
          contentType: "application/json",
        },
      })
        .then((response) => {
          console.log("email response status: ", response);
          //
          if (response.status === 200) {
            resolve({
              success: true,
              response,
            });
          } else {
            resolve({
              success: false,
              response,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          resolve({
            success: false,
            error,
          });
        });
    } catch (error) {
      reject({
        error,
      });
    }
  });
});
