const baseUrl="http://localhost:5000/api/"

export const doBooking = async (body,id) => {
    try {
      const fetchResponse = await fetch(baseUrl+"createbooking", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
       body:JSON.stringify(body)
      });
      return await fetchResponse.json();
    } catch (error) {
      return error;
    }
  };
  
  export const allAvailableHotels = async (type,start,end) => {
    try {
      const fetchResponse = await fetch(baseUrl+`getallhotels?startDate=${start}&endDate=${end}&type=${type}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      return await fetchResponse.json();
    } catch (error) {
      return error;
    }
  };