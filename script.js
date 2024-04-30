class Pet {
    constructor(id) {
      this.id = id;
      this.fedLevel = 100;
      this.fedElement = document.getElementById(`hunger${id}`);
      this.messageElement = document.getElementById(`message${id}`);
      this.displayElement = document.getElementById(`pet${id}`);
    }
  
    decreaseFedLevel() {
      this.fedLevel -= 10;
      if (this.fedLevel < 0) this.fedLevel = 0;
      this.fedElement.innerText = this.fedLevel;
      if (this.fedLevel === 0) {
        this.messageElement.innerText = "Pet ran away";
        this.displayElement.style.opacity = 0.5;
      }
    }
  
    feed(amount) {
      this.fedLevel += amount;
      if (this.fedLevel > 100) this.fedLevel = 100;
      this.fedElement.innerText = this.fedLevel;
    }
  }
  
  let pet1 = new Pet(1);
  let pet2 = new Pet(2);
  
  function feedPet(amount) {
    if(selectedPet === 1) {
       pet1.feed(amount);
    }
    if(selectedPet === 2) {
       pet2.feed(amount);
    }
   
  }
  
  setInterval(() => {
    pet1.decreaseFedLevel();
    pet2.decreaseFedLevel();
  }, 5000);
  
  let selectedPet = null;
  const petElement = document.getElementById("pet1");
  const pet2Element = document.getElementById("pet2");
  
  function selectPet(id) {
    selectedPet = id;
  
    if (selectedPet === 1) {
      petElement.classList.add('selected');
      pet2Element.classList.remove('selected');
    }
    if (selectedPet === 2) {
      petElement.classList.remove('selected');
      pet2Element.classList.add('selected');
    }
  }
  
  selectPet(1);