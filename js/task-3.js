const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryRef = document.querySelector('ul#gallery');


const imageLinkHandler = (link, text) => {
    const imageListItem = document.createElement('li');
    imageListItem.classList.add('picture-container')
  
    const imageTag = document.createElement('img');
    imageTag.classList.add('picture-item')

  
    imageTag.src = link
    imageTag.setAttribute('alt', `${text}`)

    imageListItem.appendChild(imageTag)

   return galleryRef.insertAdjacentElement('beforeend', imageListItem)
  }

  
images.forEach(({ url, alt }) => imageLinkHandler(url, alt))
  