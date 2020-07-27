import axios from 'axios'

describe("Testing MessageSourceController messageSource method", () => {
  test("Should return something", async (done) => {    
    await axios.post('http://localhost:8001/message-source',{
      currentTime: new Date(),
      message: "Hello World Tests",
      from: "+123456789",
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      expect(res.status).toBe(200);
      done();
    })
    .catch(done.fail)
  });
});
