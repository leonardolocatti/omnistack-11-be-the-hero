const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate an ID that have length 8', () => {
        const id = generateUniqueId()

        expect(id).toHaveLength(8)
    })
})