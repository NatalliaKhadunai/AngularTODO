describe('sorting the list of users', function () {
    it('sorts in descending order by default', function ($filter) {
        var users = [
            {
                name: 'jack'
            },
            {
                name: 'igor'
            },
            {
                name: 'jeff'
            }
        ];
        var sorted = $filter('orderBy')(users, 'name', false);
        expect(sorted).toEqual(['jack', 'jeff', 'igor']);
    });
});