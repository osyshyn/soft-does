const addDataLayer = (path: string, form_name: string = "Contact Us") => {
  console.log("addDataLayer", path, form_name);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit",
    form_name: form_name,
    form_location: path,
    form_id: "contact-form",
  });
};

export default addDataLayer;
