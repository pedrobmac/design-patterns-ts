//Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

//Leaf
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

//Leaf
export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

//Leaf
export class ValidateContainsNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

//Composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

//Client-code
const validateString = new ValidateString();
const validateEmail = new ValidateEmail();
const validateContainsNumber = new ValidateContainsNumber();

const validationComposite = new ValidationComposite();
validationComposite.add(validateString, validateContainsNumber, validateEmail);

console.log(validationComposite.validate('email1@test.com'));
console.log(validationComposite.validate('email@test.com'));
console.log(validationComposite.validate('email1'));
console.log(validationComposite.validate(123));
