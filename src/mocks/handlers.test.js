describe('contacts', () => {
  it('returns mocked contacts', async () => {
    const result = await fetch('/contacts?page=1').then(res => res.json());
    expect(result.page).toEqual(1);
    expect(result.contacts[0]).toHaveProperty('id');
    expect(result.contacts[0]).toHaveProperty('name');
  });

  describe('page is not explicit', () => {
    it('returns results for first page', async () => {
      const result = await fetch('/contacts').then(res => res.json());
      expect(result.page).toEqual(0);
    });
  });
});
