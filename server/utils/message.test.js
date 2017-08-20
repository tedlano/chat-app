var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('Generate Message Object', () =>{
        var from = "TestUser";
        var text = "Test Text";
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});
