import { name } from "file-loader";


export default class UserList {
  constructor(element) {
    this.element = element;
    this.items = new Set();
    
    
  }

  buildDOM() {
    const usersNumber = document.querySelector('[data-role="users-number"]');
    const fragment = document.createDocumentFragment();
    const itemSize = this.items.size;

    this.element.innerHTML = '';

    for (const name of this.items) {
      const element = document.createElement('div');
      element.classList.add('user-list-item');
      element.textContent = name;
      fragment.append(element);
      
         
    }

    this.element.append(fragment);
   
    



    if(itemSize === 1) {
      usersNumber.textContent = `${this.items.size}`+` участник`;
    }
    else if(itemSize > 4) {
      usersNumber.textContent = `${this.items.size}`+` участников`;
    }
    else {
      usersNumber.textContent = `${this.items.size}`+` участника`;
    }
    
  }
 


  add(name) {
    this.items.add(name);
    this.buildDOM();
    
  }

  remove(name) {
    this.items.delete(name);
    this.buildDOM();
    
  }
}

