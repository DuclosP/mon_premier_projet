import { ToMinutsPipe } from './to-minuts.pipe';

describe('ToMinutsPipe', () => {
  it('create an instance', () => {
    const pipe = new ToMinutsPipe();
    expect(pipe).toBeTruthy();
  });
});
