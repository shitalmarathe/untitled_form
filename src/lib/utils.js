export const spamCheck = async (message)=>{
    const response = await fetch("https://vector.profanity.dev",{
        method:"POST",
        headers: {
            "Content-type":"application/json",
        },
        body:JSON.stringify({message}),
    });

    const data = await response.json();
    return data;
};

// This submits the data to our custom Google Form
export const submitToGoogleForms = async (data) => {
    const formData = new FormData();
    formData.append(import.meta.env.VITE_FULLNAME, data.fullname);
    formData.append(import.meta.env.VITE_EMAIL, data.email);
    formData.append(import.meta.env.VITE_MESSAGE, data.message);
    formData.append(import.meta.env.VITE_SERVICES, data.services);
    
    await fetch(import.meta.env.VITE_SUBMIT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
  };