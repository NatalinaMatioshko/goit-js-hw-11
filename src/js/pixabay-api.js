export default function fetchingGallery(userRequest) {
  const searchParams = new URLSearchParams({
    key: '45524155-4a5a252fd9d205519c9b1e139',
    q: userRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const { hits } = data;
      return hits;
    });
}
