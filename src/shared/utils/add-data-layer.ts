const addDataLayer = ({
  event,
  form_name,
  path,
  form_id,
}: {
  event: string;
  form_name: string;
  path: string;
  form_id: string;
}) => {
  console.log("addDataLayer", path, form_name);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: event,
    form_name: form_name,
    form_location: path,
    form_id: form_id,
  });
};

export default addDataLayer;
