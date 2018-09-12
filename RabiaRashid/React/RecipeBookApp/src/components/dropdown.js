export default class Dropdown {
isOpen = false;

    toggleDropdown(element) {
        if(!this.isOpen) 
            element.nextSibling.classList.add('show')    
        else 
            element.nextSibling.classList.remove('show');
        this.isOpen = !this.isOpen
    }
}