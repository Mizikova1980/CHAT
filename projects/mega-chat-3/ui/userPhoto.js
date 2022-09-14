export default class UserPhoto {
  constructor(element, onUpload) {
    this.element = element;
    this.onUpload = onUpload;

    console.log(element);

    this.element.addEventListener('click', (e) => {
      
      const photoLoader = document.querySelector('#upload-photo');
      const closeForm = document.querySelector('#closeBtn');
      const previewPhoto = document.querySelector('#preview');
      const previewBlock = document.querySelector('#preview-photo');
      const photoForLoad = document.querySelector('#photo');
      const loadBtn = document.querySelector('#loadBtn');
      const cleanBtn = document.querySelector('#cleanBtn');
      

      
      photoLoader.classList.remove('hidden');
           
      closeForm.addEventListener('click', (e) => {
        e.preventDefault();
        photoLoader.classList.add('hidden');
      });


      previewPhoto.addEventListener('dragover', (e) => {
        if (e.dataTransfer.items.length && e.dataTransfer.items[0].kind === 'file') {
          e.preventDefault();
        }
      });

      previewPhoto.addEventListener('drop', (e) => {
        const file = e.dataTransfer.items[0].getAsFile();
        const reader = new FileReader();
  
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => {
          e.preventDefault();
          previewBlock.classList.remove('hidden');
          photoLoader.classList.add('hidden');
          
          photoForLoad.style.backgroundImage = 'url(' + reader.result + ')';
          photoForLoad.style.backgroundRepeat = 'no-repeat';
          photoForLoad.style.backgroundSize = 'cover';
          previewPhoto.style.backgroundImage = 'url(' + reader.result + ')';
          previewPhoto.style.backgroundSize = 'cover';

          cleanBtn.addEventListener('click', () => {
            photoForLoad.style.backgroundImage = '';
            previewPhoto.style.backgroundImage = '';
            previewBlock.classList.add('hidden');
            });

          });

          
          loadBtn.addEventListener('click', () => {
            return this.onUpload(reader.result);
           
          });


          e.preventDefault();
        });

        loadBtn.addEventListener('click', () => {
          previewBlock.classList.add('hidden');
          photoLoader.classList.remove('hidden');
         
        });
          
       
        e.preventDefault();
      });
      this.element.addEventListener('drop', (e) => {
        const file = e.dataTransfer.items[0].getAsFile();
        const reader = new FileReader();
  
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => this.onUpload(reader.result));
        e.preventDefault();
      });
    }
  
   set(photo) {
      this.element.style.backgroundImage = `url(${photo})`;
      
    }

}
