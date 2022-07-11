import { FontColorDirective } from './font-color.directive';

describe('FontColorDirective', () => {
  it('should create an instance', () => {
    let refMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new FontColorDirective(refMock);
    expect(directive).toBeTruthy();
  });
});
