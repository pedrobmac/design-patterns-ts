//made in script mode (without exports) to simplify the code, without bundlers

//Interfaces
interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

//Concrete Observable
class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

//Concrete Observers
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

//Client code
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Initial hardcoded paragraph text';
  return p;
}

function makeDiv(): HTMLDivElement {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.innerText = 'Initial hardcoded div text';
  return div;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const div = new DivObserver(makeDiv());
const p2 = new ParagraphObserver(makeParagraph());

input.subscribe(p1, p2, div);
input.element.addEventListener('keyup', () => input.notify());

input.unsubscribe(p2);
