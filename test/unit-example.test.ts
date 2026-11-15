describe('przykład testu jednostkowego', () => {
  it('wykonuje prostą czystą funkcję testową', () => {
    const add = (left: number, right: number) => left + right;

    expect(add(2, 3)).toBe(5);
  });
});
