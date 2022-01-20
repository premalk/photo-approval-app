function addImage(image) {
  return {
    type: "ADD_IMAGE",
    payload: { url: image.url, id: image.id },
  };
}

export { addImage };
