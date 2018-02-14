import {AbstractControl} from '@angular/forms';

export function validateYear(control: AbstractControl) {
  const prevYear = new Date().getFullYear() - 1;
  if (control.value.length !== 4 || parseInt(control.value, 10) > prevYear) {
    return {validYear: false};
  }
  return null;
}

export function validatePercentage(control: AbstractControl) {
  if (parseInt(control.value, 10) > 100) {
    return {validPercent: false};
  }
  return null;
}
