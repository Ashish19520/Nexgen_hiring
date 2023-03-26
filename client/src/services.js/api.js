const baseUrl="http://localhost:5000/api/"

export const doBooking = async (body) => {
    try {
      const fetchResponse = await fetch(baseUrl+"createbooking", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         body
        }),
      });
      return await fetchResponse.json();
    } catch (error) {
      return error;
    }
  };